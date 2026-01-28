package model

type InvitationTemplate struct {
	ID          uint   `json:"id" gorm:"primaryKey"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Price       int64  `json:"price"`
	PreviewURL  string `json:"preview_url"`
}
