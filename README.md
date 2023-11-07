# Bookpedia

A RESTful API for managing books, built with Node.js and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Author](#author)

## Introduction

This project is a Node.js-based RESTful API for managing books, with CRUD operations to create, read, update, and delete book records. It utilizes MongoDB for data storage.

## Features

- Create a new book with title, author, and summary.
- View a list of all books.
- View details of a specific book by its ID.
- Update a book's details.
- Delete a book.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download here](https://nodejs.org/)
- MongoDB: [Download here](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone this repository:

```bash
git clone ttps://github.com/KeshavAgrawal18/Bookpedia.git
cd Bookpedia
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the project root directory with the following content:
   
```makefile
PORT=your-port
MONGODB_URI=your-mongodb-connection-url
```

4. Set up your MongoDB connection:
- Make sure to replace your-mongodb-connection-url with your actual MongoDB connection URL in the .env file.
- You can use a local MongoDB instance or a cloud solution like MongoDB Atlas.

5. Run the application:

```bash
npm start
```


## API Endpoints

1. Get All Books
- URL: GET /
- Description: Retrieve a list of all books.
- Response: Returns a list of all books in the database.

2. Add a New Book
- URL: GET /add
- Description: Render a form to add a new book.
- Response: Renders an HTML form for adding a new book.

3. Get Book Details by ID
- URL: GET /books/:bookId
- Description: Retrieve details of a specific book by its ID.
- Response: Returns the book details if found, or a "notexist" message if the book does not exist.

4. Confirm Book Deletion
- URL: GET /confirm/:bookId
- Description: Confirm the deletion of a specific book by its ID.
- Response: Renders a confirmation page for deleting a book or a "notexist" message if the book does not exist.

5. Update Book
- URL: GET /update/:bookId
- Description: Render a form to update a specific book's details by its ID.
- Response: Renders an HTML form for updating a book's details or a "notexist" message if the book does not exist.

6. Search for Books
- URL: POST /search
- Description: Search for books by title.
- Request: Accepts a query in the request body.
- Response: Returns a list of books matching the search query.

7. Add a New Book (Post Method)
- URL: POST /add
- Description: Add a new book to the database.
- Request: Accepts book details in the request body.
- Response: Adds a new book to the database if it doesn't already exist. If the book exists, it returns an "exist" message.
D
8. elete Book by ID
- URL: POST /delete/:bookId
- Description: Delete a book by its ID.
- Request: Accepts the book ID as a parameter.
- Response: Deletes the book if it exists or returns a "notexist" message if the book does not exist.

9. Update Book (Post Method)
- URL: POST /update/:bookId
- Description: Update a book's details by its ID.
- Request: Accepts the book ID as a parameter and updated data in the request body.
- Response: Updates the book's details if it exists or returns an error message if the update fails.


## Assumptions
We used Express.js as the web framework for building the API.


## Video Demonstration
You can view a video demonstration of the API with all CRUD operations and test cases on [YouTube](https://youtu.be/bOm970QVFt8).

## Author

- [Keshav Agrawal](https://github.com/KeshavAgrawal18)

  
