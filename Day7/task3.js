let book = {
  title: "My Journey",
  author: "jon",
  getBookInfo: function () {
    return `${this.title} written by ${this.author}`;
  },
//   logThis: function () {
//     console.log(this);
//   },
};

console.log(book.getBookInfo()); // Outputs: To Kill a Mockingbird by Harper Lee

// book.logThis(); // Logs the book object itself