package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"wedding-invitation/config"
	"wedding-invitation/internal/handler"
	"wedding-invitation/internal/repository"
)

func main() {
	_ = godotenv.Load()

	db := config.InitDB()

	repo := repository.NewInvitationRepository(db)
	h := handler.NewInvitationHandler(repo)

	r := gin.Default()

	// CORS (BIAR FRONTEND BISA AKSES)
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	// ROUTES
	r.GET("/templates", h.GetTemplates)
	r.POST("/templates", h.CreateTemplate)
	r.GET("/templates/:slug", h.GetTemplateBySlug)

	log.Println("Backend running at http://localhost:8080")
	r.Run(":8080")
}
