require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const Book = require("./bookmodel");
const bodyParser = require("body-parser");
let num = 1;

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

app.get("/books/:bookId", (req, res) => {
  Book.find({ bookId: req.params.bookId })
    .then((book) => {
      if (book.length == 0) {
        res.render("message",{ 
          message: "notexist"
      });
      } else {
        res.render("book", {
          book: book[0],
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/confirm/:bookId", (req, res) => {
  Book.find({ bookId: req.params.bookId })
    .then((book) => {
      if (book.length == 0) {
        res.render("message",{ 
          message: "notexist"
      });
      } else {
        res.render("confirm", {
          book: book[0],
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/update/:bookId", (req, res) => {
  Book.find({ bookId: req.params.bookId })
    .then((book) => {
      if (book.length == 0) {
        res.render("message",{ 
          message: "notexist"
      });
      } else {
        res.render("update", {
          book: book[0],
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/search", (req, res) => {
  Book.find()
    .then((books) => {
      let results = [];
      for (let i = 0; i < books.length; i++) {
        if (books[i].title.includes(req.body.query)) {
          results.push(books[i]);
        }
      }
      console.log(results);
      res.render("index", {
        books: results,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/add", (req, res) => {

  Book.find({ bookId: req.body.bookId })
    .then((book) => {
      if (book.length == 0) {
        const book = new Book({
          bookId: req.body.bookId,
          title: req.body.title,
          author: req.body.author,
          summary: req.body.summary,
        });
      
        book.save();
        num++;
        console.log("num: " + num);
        res.redirect("/");
      } else {
        res.render("message", {
          message: "exist"
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });

 
});

app.post("/delete/:bookId", (req, res) => {
  Book.find({ bookId: req.params.bookId })
    .then((book) => {
      if (book.length == 0) {
        res.render("message",{ 
          message: "notexist"
      });
      } else {
        Book.deleteOne({ bookId: req.params.bookId })
          .then(() => {
            res.redirect("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/update/:bookId", async (req, res) => {
  const { bookId } = req.params;
  const updateData = req.body;
  try {
    const result = await Book.findOneAndUpdate(
      { bookId: bookId },
      { $set: updateData },
      { new: true }
    );
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Update failed" });
  }
});

app.listen(PORT, (req, res) => {
  console.log("App is listening on port " + PORT);
});
