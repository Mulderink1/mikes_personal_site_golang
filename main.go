package main
import "net/http"

func main() {
	upTripRoute()
	homeRoute()

	http.ListenAndServe(":8081", nil)
}

func upTripRoute() {
	//  File Path must be exact when running the executable
	http.Handle("/melissa-mike/assets/", http.StripPrefix("/melissa-mike/assets", http.FileServer(http.Dir("/GoLang/src/github.com/mikes_personal_site_golang/Up-Trip/assets"))))
	http.HandleFunc("/melissa-mike/", func(w http.ResponseWriter, r *http.Request) {
		//  File Path must be exact when running the executable
		http.ServeFile(w, r, "/GoLang/src/github.com/mikes_personal_site_golang/Up-Trip/index.html")
	})
}

func homeRoute() {
	//  File Path must be exact when running the executable
	http.Handle("/assets/", http.StripPrefix("/assets", http.FileServer(http.Dir("/GoLang/src/github.com/mikes_personal_site_golang/Home/assets"))))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		//  File Path must be exact when running the executable
		http.ServeFile(w, r, "/GoLang/src/github.com/mikes_personal_site_golang/Home/index.html")
	})
}
