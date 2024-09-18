const mongoose = require('mongoose');

// Define the book schema with reviews
const bookSchema = new mongoose.Schema({
  number: Number,
  title: String,
  author: String,
  description: String,
  cover_image: String,
  reviews: [
    {
      rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1-5
      review: { type: String, required: true } // Review comment
    }
  ]
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

