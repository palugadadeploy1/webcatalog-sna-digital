package repository

import (
	"database/sql"
	"wedding-invitation/internal/model"
)

type InvitationRepository struct {
	db *sql.DB
}

func NewInvitationRepository(db *sql.DB) *InvitationRepository {
	return &InvitationRepository{db: db}
}

// GET ALL
func (r *InvitationRepository) FindAll() ([]model.Invitation, error) {
	rows, err := r.db.Query(`
		SELECT id, name, slug, description, price, thumbnail_url, demo_url
		FROM invitation_templates
		WHERE is_active = true
		ORDER BY id DESC
	`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var data []model.Invitation
	for rows.Next() {
		var i model.Invitation
		rows.Scan(
			&i.ID,
			&i.Name,
			&i.Slug,
			&i.Description,
			&i.Price,
			&i.ThumbnailURL,
			&i.DemoURL,
		)
		data = append(data, i)
	}

	return data, nil
}

// CREATE
func (r *InvitationRepository) Create(i *model.Invitation) error {
	return r.db.QueryRow(`
		INSERT INTO invitation_templates
		(name, slug, description, price, thumbnail_url, demo_url)
		VALUES ($1,$2,$3,$4,$5,$6)
		RETURNING id
	`,
		i.Name,
		i.Slug,
		i.Description,
		i.Price,
		i.ThumbnailURL,
		i.DemoURL,
	).Scan(&i.ID)
}

// FIND BY SLUG (PREVIEW)
func (r *InvitationRepository) FindBySlug(slug string) (*model.Invitation, error) {
	var i model.Invitation

	err := r.db.QueryRow(`
		SELECT id, name, slug, description, price, thumbnail_url, demo_url
		FROM invitation_templates
		WHERE slug = $1 AND is_active = true
		LIMIT 1
	`, slug).Scan(
		&i.ID,
		&i.Name,
		&i.Slug,
		&i.Description,
		&i.Price,
		&i.ThumbnailURL,
		&i.DemoURL,
	)

	if err != nil {
		return nil, err
	}

	return &i, nil
}
