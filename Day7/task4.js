// Defining the book object
let book = {
  title: "Black Day of democracy",
  author: "indian writer",
  year: 1984,
  getBookInfo: function () {
    return `${this.title} written by ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

// Updating the year and logging the updated object
book.updateYear(2024);
console.log(book); // Logs the updated book object with the new year
