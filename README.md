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


## Author

- [Keshav Agrawal](https://github.com/KeshavAgrawal8)

  
