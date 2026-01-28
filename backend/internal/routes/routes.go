package routes

import (
	"wedding-invitation/internal/handler"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupRoutes(r *gin.Engine, db *gorm.DB) {

	// PUBLIC ROUTES

	templateHandler := handler.TemplateHandler{DB: db}

	r.GET("/templates", templateHandler.GetTemplates)
	r.GET("/templates/:id", templateHandler.GetTemplateByID)

}
