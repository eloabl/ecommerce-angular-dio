// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Book } from './model/book.model';

export const books: Book[] = [
    { id: "1", name: "O Sol é para Todos", price: 41.93, quantity: 12, category: "Romance", img: "img1" },
    { id: "2", name: "E o Vento Levou", price: 79.02, quantity: 8, category: "Romance histórico", img: "img2" },
    { id: "3", name: "Orgulho e Preconceito", price: 69.90, quantity: 3, category: "Ficção", img: "img3" },
    { id: "4", name: "O Retrato de Dorian Grey", price: 14.72, quantity: 10, category: "Ficção gótica", img: "img4" },
    { id: "5", name: "O Grande Gatsby", price: 30.95, quantity: 8, category: "Tragédia", img: "img5" },
    { id: "6", name: "Uma Janela para o Amor", price: 45.98, quantity: 5, category: "Romance psicológico", img: "img6" },
];

@Injectable()
export class BookService {

    // private url = 'https://localhost:44382/api/bookstore';  // URL to web api

    // httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // }

    // constructor(private http: HttpClient) { }

    getBooks() {
        return books;
    }

    // getBooks() {
    //     return this.http.get(this.url)
    // }

}