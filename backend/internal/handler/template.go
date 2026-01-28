package handler

import (
	"net/http"
	"wedding-invitation/internal/model"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type TemplateHandler struct {
	DB *gorm.DB
}

// GET /templates
func (h *TemplateHandler) GetTemplates(c *gin.Context) {
	var templates []model.InvitationTemplate
	h.DB.Find(&templates)

	c.JSON(http.StatusOK, gin.H{
		"data": templates,
	})
}

// GET /templates/:id
func (h *TemplateHandler) GetTemplateByID(c *gin.Context) {
	id := c.Param("id")

	var template model.InvitationTemplate
	if err := h.DB.First(&template, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"message": "Template not found",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": template,
	})
}
