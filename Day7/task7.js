const library = {
  name: "career corner library",
  bookArr: [
    {
      title: "Book 1",
      year: 2023,
      getBookInfo: function () {
        return `${this.title} (${this.year})`;
      },
    },
    {
      title: "Book 2",
      year: 2024,
      getBookInfo: function () {
        return `${this.title} (${this.year})`;
      },
    },
  ],
};

console.log(library);

// Accessing and logging the result of calling the getBookInfo method for each book
library.bookArr.forEach((book) => {
  console.log(book.getBookInfo());
});
