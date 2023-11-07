const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookId: String,
  title: String,
  author: String,
  summary: String,
});

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book;
