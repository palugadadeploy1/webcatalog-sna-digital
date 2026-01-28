package database

import (
	"wedding-invitation/internal/model"

	"gorm.io/gorm"
)

func SeedTemplates(db *gorm.DB) {
	var count int64
	db.Model(&model.InvitationTemplate{}).Count(&count)

	if count > 0 {
		return
	}

	db.Create(&model.InvitationTemplate{
		Title:       "Elegant Gold",
		Description: "Undangan elegan bernuansa emas",
		Price:       150000,
		PreviewURL:  "https://picsum.photos/400/300?1",
	})

	db.Create(&model.InvitationTemplate{
		Title:       "Minimalist White",
		Description: "Desain simpel dan modern",
		Price:       100000,
		PreviewURL:  "https://picsum.photos/400/300?2",
	})

	db.Create(&model.InvitationTemplate{
		Title:       "Luxury Black",
		Description: "Tema hitam premium dan eksklusif",
		Price:       200000,
		PreviewURL:  "https://picsum.photos/400/300?3",
	})
}
