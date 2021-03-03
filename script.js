import Books from "./Books.js";

const book1 = new Books(
  "To kill a mockingbird",
  281,
  "Harper Lee",
  "11 July 1960",
  4.99,
  false
);

console.log(book1);

const book2 = new Books(
  "The Great Gatsby",
  218,
  "F. Scott Fitzgerald",
  "10 April 1925",
  3.99,
  true
);

const book3 = new Books(
  "Ulysses",
  730,
  "James Joyce",
  "2 February 1922",
  5.99,
  false
);
console.log(book3);

const book4 = new Books(
  "Pride and Prejudice",
  408,
  "Jane Austen",
  "28 January 1813",
  6.99,
  true
);
console.log(book4);

const book5 = new Books(
  "The Lion, the Witch and the Wardrobe",
  208,
  "C.S Lewis",
  "16 October 1950",
  7.99,
  false
);

console.log(book5);

console.log("The Book object:", book2.coverOpen);

book2.isBookOpen(false);

console.log("The Book object:", book2.coverOpen);
