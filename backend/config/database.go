package config

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

func InitDB() *sql.DB {
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USER")
	dbname := os.Getenv("DB_NAME")
	sslmode := os.Getenv("DB_SSLMODE")

	log.Printf("Connecting to DB: host=%s port=%s user=%s dbname=%s sslmode=%s", host, port, user, dbname, sslmode)

	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		host, port, user, os.Getenv("DB_PASSWORD"), dbname, sslmode,
	)

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