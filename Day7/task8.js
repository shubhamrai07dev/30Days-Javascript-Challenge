const library = {
  name: "career corner library",
  bookArr: [
    {
      title: "Book 1",
      year: 2023,
    },
    {
      title: "Book 2",
      year: 2024,
    },
  ],
};

// Logging the library object
console.log(library);

// Using for...in to iterate over each book's properties
library.bookArr.forEach((book) => {
  for (let property in book) {
    console.log(`${property}: ${book[property]}`);
  }
});
