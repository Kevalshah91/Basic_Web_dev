const mongoose = require('mongoose');
const Book = require('./book'); 

const dbURI = 'mongodb://localhost:27017/apple';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);

  // Call the function to perform operations on the database
  performDatabaseOperations();
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

// Function to perform operations on the database
async function performDatabaseOperations() {
  try {
    const books = await Book.find({});
    console.log('All books in the database:', books);

    const newBook = new Book({
      title: 'New Book',
      author: 'Author Name',
      genre: 'Fiction',
      published: new Date(),
      ISBN: '1234567890'
    });

    const savedBook = await newBook.save();
    console.log('Book saved to the database:', savedBook);

  } catch (err) {
    console.error(err);
  }
}
