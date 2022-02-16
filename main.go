package main

import (
	"net/http"
	"runtime"
)

func main() {
	homeRoute()
	http.ListenAndServe(":8080", nil)
}

func homeRoute() {
	os := runtime.GOOS
	switch os {
	case "linux":
		http.Handle("/", http.FileServer(http.Dir("/home/ubuntu/web/static")))
	default:
		http.Handle("/", http.FileServer(http.Dir("/Users/michaelmulderink/go/src/github.com/Mike_Personal_Site/web/static")))
	}
}
