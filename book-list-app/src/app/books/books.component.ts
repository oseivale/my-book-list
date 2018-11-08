import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

	book: Book = {
		title: 'Homegoing',
		author: 'Yaa Gyasi',
		summary: 'Homegoing traces the history of two families: one that works in the slave trade and one that rises up out of slavery.'
	};

  constructor() { }



  ngOnInit() {
  }

}
