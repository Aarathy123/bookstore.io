export default (books = [], titleFilter = "") => {
  return books.filter((book) =>
    book.name.toLowerCase().includes(titleFilter.toLowerCase())
  );
};
