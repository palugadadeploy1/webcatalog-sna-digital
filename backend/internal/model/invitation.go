package model

type Invitation struct {
	ID           int    `json:"id"`
	Name         string `json:"name"`
	Slug         string `json:"slug"`
	Description  string `json:"description"`
	Price        int    `json:"price"`
	ThumbnailURL string `json:"thumbnail_url"`
	DemoURL      string `json:"demo_url"`
}
