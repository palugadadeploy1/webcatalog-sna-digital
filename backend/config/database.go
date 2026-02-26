package config

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/lib/pq"
)

func InitDB() *sql.DB {
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DATABASE_URL tidak ditemukan!")
	}

	log.Println("Connecting menggunakan DATABASE_URL...")

	db, err := sql.Open("postgres", dsn)
	if err != nil {
		log.Fatal("sql.Open error: ", err)
	}

	if err := db.Ping(); err != nil {
		log.Fatal("Gagal konek ke database: ", err)
	}

	log.Println("PostgreSQL connected!")
	return db
}