package main

import (
	"net/http"
)

func main() {
	homeRoute()

	http.ListenAndServe(":8080", nil)
}

func homeRoute() {
	http.Handle("/", http.FileServer(http.Dir("/home/ubuntu/web/static")))
}
