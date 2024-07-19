const library = {
  name: "career corner library",
  bookArr: [
    {
      title: "Book1",
      year: 2023,
    },
    {
      title: "Book 2",
      year: 2024,
    },
  ],
};
// console.log(library);
// console.log(library.bookArr);
library.bookArr.forEach((book) => {
  console.log(`Title: ${book.title}, Year: ${book.year}`);
});
