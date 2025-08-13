class Book{
    id:number;
    title:string;
    author:string;
    year:number;
    constructor(id:number,title:string,author:string,year:number){
        this.id=id;
        this.title=title;
        this.author=author;
        this.year=year;
    }
} 
class Library<T>{
    private books:T[] = [];
    addBook(book:T):void {
        this.books.push(book);
    }
    getBookById(id:number):T|undefined {
        return this.books.find(book => (book as any).id === id);
    }
    removeBook(id:number):void {
        this.books = this.books.filter(book => (book as any).id !== id);
    }
    updateBook(id:number, updatedBook:T):void {
        const index = this.books.findIndex(book => (book as any).id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
        }
    }
    listBooks():T[] {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm:string):T[] {
        return this.books.filter(book =>
            (book as any).title.includes(searchTerm) || (book as any).author.includes(searchTerm)
        );
    }
    getTotalBooks(): number {
        return this.books.length;
    }
    findBooksByYear(year:number):T[] {
        return this.books.filter(book => (book as any).year === year);
    }
}
const library = new Library<Book>();
library.addBook(new Book(1, "To Kill a Mockingbird", "Harper Lee", 1960));
library.addBook(new Book(2, "1984", "George Orwell", 1949));
library.addBook(new Book(3, "The Great Gatsby", "F. Scott Fitzgerald", 1925));
