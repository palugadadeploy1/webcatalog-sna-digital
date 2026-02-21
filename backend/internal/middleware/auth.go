package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Kita cek header khusus
		secretKey := c.GetHeader("X-SNA-KEY")

		// SecretKey
		if secretKey != "21Febuari2026SNADigitalprikitiw@!" {
			c.JSON(http.StatusForbidden, gin.H{
				"error": "Akses ditolak! Anda tidak punya izin untuk mengubah database.",
			})
			c.Abort()
			return
		}
		c.Next()
	}
}