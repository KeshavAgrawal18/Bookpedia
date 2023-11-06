require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const Book = require("./bookmodel");

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB...");
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, (req, res) => {
    console.log("App is listening on port " + PORT);
});