require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const Book = require("./bookmodel");
const bodyParser = require("body-parser");
let num = 0;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB...");
});

app.get("/", (req, res) => {
  Book.find()
    .then((books) => {
      res.render("index", {
        books: books,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/books/:id", (req, res) => {

    Book.find({id: req.params.id})
    .then((book) => {
        res.render("book", {
            book: book[0],
        })
    })
    .catch((error) => {
        console.log(error);
    });
});

app.get("/confirm/:id", (req, res) => {
  Book.find({id: req.params.id})
  .then((book) => {
    res.render("confirm", {
        book: book[0],
    })
})
.catch((error) => {
    console.log(error);
});
});

app.post("/add", (req, res) => {
  const book = new Book({
    id: "" + (num % 100) + (num % 10) + num,
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
  });

  book.save();
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    Book.deleteOne({id: req.params.id}) 
    .then(() => {
        res.redirect("/");
})
    .catch((err) => {
            console.log(err);
        });

    });

app.listen(PORT, (req, res) => {
  console.log("App is listening on port " + PORT);
});
