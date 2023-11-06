const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  summary: String,
});

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book;
