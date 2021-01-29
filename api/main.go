package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Message struct {
	Value string
}

func main() {
	http.HandleFunc("/", HandleMessage)

	log.Fatal(http.ListenAndServe(":5000", nil))
}

func HandleMessage(w http.ResponseWriter, r *http.Request) {
	body := Message{"API Online!"}

	data, err := json.Marshal(body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	log.Println(r.Method, r.RequestURI)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	w.Write(data)
}
