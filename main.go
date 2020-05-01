package main
import "net/http"

func main() {
	upTripRoute()
	homeRoute()

	http.ListenAndServe(":8081", nil)
}

func upTripRoute() {
	http.Handle("/melissa-mike/assets/", http.StripPrefix("/melissa-mike/assets", http.FileServer(http.Dir("./Up-Trip/assets"))))
	http.HandleFunc("/melissa-mike/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./Up-Trip/index.html")
	})
}

func homeRoute() {
	http.Handle("/assets/", http.StripPrefix("/assets", http.FileServer(http.Dir("./Home/assets"))))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./Home/index.html")
	})
}
