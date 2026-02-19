package handler

import (
	"net/http"

	"wedding-invitation/internal/model"
	"wedding-invitation/internal/repository"

	"github.com/gin-gonic/gin"
)

type InvitationHandler struct {
	repo *repository.InvitationRepository
}

func NewInvitationHandler(repo *repository.InvitationRepository) *InvitationHandler {
	return &InvitationHandler{repo: repo}
}

// GET /templates
func (h *InvitationHandler) GetTemplates(c *gin.Context) {
	data, err := h.repo.FindAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, data)
}

// POST /templates
func (h *InvitationHandler) CreateTemplate(c *gin.Context) {
	var tpl model.Invitation

	if err := c.ShouldBindJSON(&tpl); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	if err := h.repo.Create(&tpl); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusCreated, tpl)
}

// PREVIEW TEMPLATE
func (h *InvitationHandler) GetTemplateBySlug(c *gin.Context) {
	slug := c.Param("slug")

	data, err := h.repo.FindBySlug(slug)
	if err != nil {
		c.JSON(404, gin.H{"error": "Template tidak ditemukan"})
		return
	}

	c.JSON(200, data)
}
