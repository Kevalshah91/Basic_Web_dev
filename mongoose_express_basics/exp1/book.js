const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: String,
  published: {
    type: Date,
    default: Date.now
  },
  ISBN: String,
  // Additional fields can be added as needed
});

module.exports = mongoose.model('Book', bookSchema);
