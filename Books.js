class Book {
  constructor(title, pages, author, datepublished, cost, coverOpen) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.datepublished = datepublished;
    this.cost = cost;
    this.coverOpen = coverOpen;
  }

  isBookOpen(openStatus) {
    this.coverOpen = openStatus;
  }
}

export default Book;
