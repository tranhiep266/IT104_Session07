"use strict";
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find(book => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
    updateBook(id, updatedBook) {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
        }
    }
    listBooks() {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm) {
        return this.books.filter(book => book.title.includes(searchTerm) || book.author.includes(searchTerm));
    }
    getTotalBooks() {
        return this.books.length;
    }
    findBooksByYear(year) {
        return this.books.filter(book => book.year === year);
    }
}
const library = new Library();
library.addBook(new Book(1, "To Kill a Mockingbird", "Harper Lee", 1960));
library.addBook(new Book(2, "1984", "George Orwell", 1949));
library.addBook(new Book(3, "The Great Gatsby", "F. Scott Fitzgerald", 1925));
