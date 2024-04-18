// const data = [
//   {
//     id: 1,
//     title: "The Lord of the Rings",
//     publicationDate: "1954-07-29",
//     author: "J. R. R. Tolkien",
//     genres: [
//       "fantasy",
//       "high-fantasy",
//       "adventure",
//       "fiction",
//       "novels",
//       "literature",
//     ],
//     hasMovieAdaptation: true,
//     pages: 1216,
//     translations: {
//       spanish: "El señor de los anillos",
//       chinese: "魔戒",
//       french: "Le Seigneur des anneaux",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.52,
//         ratingsCount: 630994,
//         reviewsCount: 13417,
//       },
//       librarything: {
//         rating: 4.53,
//         ratingsCount: 47166,
//         reviewsCount: 452,
//       },
//     },
//   },
//   {
//     id: 2,
//     title: "The Cyberiad",
//     publicationDate: "1965-01-01",
//     author: "Stanislaw Lem",
//     genres: [
//       "science fiction",
//       "humor",
//       "speculative fiction",
//       "short stories",
//       "fantasy",
//     ],
//     hasMovieAdaptation: false,
//     pages: 295,
//     translations: {},
//     reviews: {
//       goodreads: {
//         rating: 4.16,
//         ratingsCount: 11663,
//         reviewsCount: 812,
//       },
//       librarything: {
//         rating: 4.13,
//         ratingsCount: 2434,
//         reviewsCount: 0,
//       },
//     },
//   },
//   {
//     id: 3,
//     title: "Dune",
//     publicationDate: "1965-01-01",
//     author: "Frank Herbert",
//     genres: ["science fiction", "novel", "adventure"],
//     hasMovieAdaptation: true,
//     pages: 658,
//     translations: {
//       spanish: "",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.25,
//         ratingsCount: 1142893,
//         reviewsCount: 49701,
//       },
//     },
//   },
//   {
//     id: 4,
//     title: "Harry Potter and the Philosopher's Stone",
//     publicationDate: "1997-06-26",
//     author: "J. K. Rowling",
//     genres: ["fantasy", "adventure"],
//     hasMovieAdaptation: true,
//     pages: 223,
//     translations: {
//       spanish: "Harry Potter y la piedra filosofal",
//       korean: "해리 포터와 마법사의 돌",
//       bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
//       portuguese: "Harry Potter e a Pedra Filosofal",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.47,
//         ratingsCount: 8910059,
//         reviewsCount: 140625,
//       },
//       librarything: {
//         rating: 4.29,
//         ratingsCount: 120941,
//         reviewsCount: 1960,
//       },
//     },
//   },
//   {
//     id: 5,
//     title: "A Game of Thrones",
//     publicationDate: "1996-08-01",
//     author: "George R. R. Martin",
//     genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//     hasMovieAdaptation: true,
//     pages: 835,
//     translations: {
//       korean: "왕좌의 게임",
//       polish: "Gra o tron",
//       portuguese: "A Guerra dos Tronos",
//       spanish: "Juego de tronos",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 2295233,
//         reviewsCount: 59058,
//       },
//       librarything: {
//         rating: 4.36,
//         ratingsCount: 38358,
//         reviewsCount: 1095,
//       },
//     },
//   },
// ];

// function getBooks() {
//   return data;
// }

// function getBook(id) {
//   return data.find((d) => d.id === id);
// }

// const books = getBooks();
// books;

// const book = getBook(2);
// const title = book.title;
// title;

//destructuring objects - object name has to be same as property name
// const book = getBook(2);
// const { title, author } = book;
// console.log(title, author);

//destructuring using arrays
// const book = getBook(2);
// const { genres } = book;
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// console.log(primaryGenre, secondaryGenre);

//rest operator
// const book = getBook(2);
// const { genres } = book;
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

//spread operator in arrays
// const book = getBook(2);
// const { genres } = book;
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// const newGenres = [...genres, "epic"];
// console.log(newGenres);

//spread operator in objects
// const book = getBook(2);
// const { genres } = book;
// const { primaryGenre, secondaryGenre, ...otherGenre } = genres;
// console.log(primaryGenre, secondaryGenre, otherGenre);

//update an existing property
// const book = getBook(2);
// const updatedBookProperty = { ...book, publicationDate: "2024-01-01" };
// console.log(updatedBookProperty);

//add new property
// const book = getBook(2);
// const addedNewProperty = { ...book, addedDate: "2024-04-04" };
// addedNewProperty;

//template literals = ``
// const book = getBook(2);
// const tl = `${book.title} is a book`;
// tl;

//arrow functions - return without writing return keyword for 1 liner and specify return keyword if using {}
// const book = getBook(2);
// const { publicationDate } = book;
// publicationDate;

// function getYear1() {
//   return publicationDate.split("-")[0];
// }
// console.log(getYear1(publicationDate));

// const getYear2 = (str) => str.split("-")[0];
// console.log(getYear2(publicationDate));

//short circuting - return 1st value not look at 2nd value, works like an if statement
// const book = getBook(2);
// console.log(book || "book is present");
// console.log(!book || "book is present");
// console.log(book && "book is present");
// console.log(!book && "book is present");

//falsy value= '', null, 0

//nullish coalescing operator
//if count == 0 then it gives no data which is not true actual count = 0
//to fix this issue, a new operator ?? is introduced
// const book = getBook(2);
// console.log(book.reviews.librarything.reviewsCount);
// const count = book.reviews.librarything.reviewsCount || "no data";
// count;

// const count2 = book.reviews.librarything.reviewsCount ?? "no data";
// count2;

//optional chain = ? = if undefined then dont read
//get total reviews
// const book = getBook(3);
// function countReviews(book) {
//   const count1 = book.reviews.goodreads.reviewsCount; //some books might not have review count so undefined error
//   const count2 = book.reviews.librarything.reviewsCount;
//   count1;
//   count2;
//   return count1 + count2;
// }
// console.log(countReviews(book));

// const book = getBook(3);
// book;
// function countReviews1(book) {
//   const count1 = book.reviews?.goodreads.reviewsCount ?? 0; //some books might not have review count so undefined error
//   const count2 = book.reviews?.librarything?.reviewsCount ?? 0;
//   count1;
//   count2;
//   return count1 + count2;
// }
// console.log(countReviews1(book));

//map method
// const books = getBooks();
// books;
// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// essentialData;

//filter - array with some elements with condition filtered out
// const books = getBooks();
// const bookMovie = books.filter((book) => book.pages > 1000);
// bookMovie;

//filter + map
// const books = getBooks();
// const adventureBooks = books
//   .filter((books) => books.genres.includes("adventure"))
//   .map((x) => x.title);
// adventureBooks;

//reduce method
// const books = getBooks();
// const pgs = books.reduce((cntr, book) => cntr + book.pages, 0);
// pgs;

//sort - also sorts orginals array
// const arr = [3, 2, 1, 5, 6];
// const sorted = arr.sort((a, b) => b - a);
// sorted;
// arr;

//sort - sort without changing original array
// const arr = [3, 2, 1, 5, 6];
// const sorted = arr.slice().sort((a, b) => b - a);
// sorted;
// arr;

// const books = getBooks();
// const sortedByPages = books.slice().sort((x, y) => y.pages - x.pages);
// sortedByPages;

//add a book
// const books = getBooks();
// const newBook = {
//   id: -1,
//   title: "harry Potter 8",
//   pages: 1000,
// };
// const afterBooksAdded = [...books, newBook];
// afterBooksAdded;

//delete a book
// const books = getBooks();
// const afterBookDelete = books.filter((book) => book.id !== 3);
// afterBookDelete;

//update a book
// const books = getBooks();
// const updatedBooks = books.map((book) =>
//   book.id === 1 ? { ...book, pages: 1 } : book
// );
// updatedBooks;

//promise - js always moves on to next line
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("hello");

//async await - js always moves on to next line, make js wait by asyn await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
getTodos();
console.log("hello");
