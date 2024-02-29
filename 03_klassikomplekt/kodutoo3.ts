class Book{
  constructor(
    public title: string
  ){
    this.title = title;
  }
}

class Library{
  books: Book[];
  constructor(
    private limit:number
  ){
    this.books = [];
    this.limit = 5;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  borrowBook(member: Member, book: Book) {
    if (this.books.includes(book) && member.borrowed.length < this.limit) {
      member.borrowed.push(book);
      console.log(`${member.name} borrowed ${book.title}`);
    } else {
      console.log(`${member.name} cannot borrow ${book.title}`);
    }
  }
}

class Member{
  borrowed: Book[];

  constructor(
    public name: string
  ){
    this.name = name;
     this.borrowed = [];
  }
}

const library = new Library(5);

const book1 = new Book("Sinine");
const book2 = new Book("Punane");
const book3 = new Book("Kollane");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const member1 = new Member("Aadam");
const member2 = new Member("Eeva");

library.borrowBook(member1, library.books[0]);
library.borrowBook(member1, library.books[1]);
library.borrowBook(member2, library.books[1]);

console.log(member1.borrowed);
console.log(member2.borrowed);

