package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"wedding-invitation/config"
	"wedding-invitation/internal/handler"
	"wedding-invitation/internal/middleware"
	"wedding-invitation/internal/repository"
)

func main() {
	_ = godotenv.Load()

	db := config.InitDB()

	repo := repository.NewInvitationRepository(db)
	h := handler.NewInvitationHandler(repo)

	r := gin.Default()

	// CORS (Disesuaikan agar bisa menerima Header Custom)
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		// Tambahkan "X-SNA-KEY" agar tidak diblokir browser saat kirim header rahasia
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, X-SNA-KEY")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	// --- ROUTES ---

	// 1. Route Publik: Siapa saja bisa melihat daftar template
	r.GET("/templates", h.GetTemplates)
	r.GET("/templates/:slug", h.GetTemplateBySlug)

	// 2. Route Terproteksi: Hanya Anda yang bisa menambah data
	// Gunakan middleware untuk membungkus route POST
	protected := r.Group("/")
	protected.Use(middleware.AuthMiddleware()) 
	{
		protected.POST("/templates", h.CreateTemplate)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Println("Backend running at port " + port)
	r.Run(":" + port)
}