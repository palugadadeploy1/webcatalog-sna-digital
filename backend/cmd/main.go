package main

import (
	"time"
	"wedding-invitation/config"
	"wedding-invitation/database"
	"wedding-invitation/internal/model"
	"wedding-invitation/internal/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	config.LoadEnv()
	db := config.ConnectDB()

	// HANYA MIGRATE YANG DIPAKAI
	db.AutoMigrate(
		&model.InvitationTemplate{},
	)

	// Seed katalog undangan
	database.SeedTemplates(db)

	r := gin.Default()

	// CORS untuk frontend
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	routes.SetupRoutes(r, db)

	r.Run(":8080")
}
