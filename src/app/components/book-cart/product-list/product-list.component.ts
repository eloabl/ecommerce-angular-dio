import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.service';
import { Book } from './model/book.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    // this.booksService = new BooksService();
  }

  ngOnInit(): void {

    // this.livros = this.bookService.getBooks().subscribe((data => {
    //   this.livros = data;
    //   console.log(this.livros);
    // }))

    this.livros = this.bookService.getBooks();
    // .map((data => {this.livros = data;
      console.log(this.livros);
    // }))

  }

}
