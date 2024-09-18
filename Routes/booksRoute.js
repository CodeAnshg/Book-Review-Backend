const express = require('express');
const router = express.Router();
const booksController = require('../Controllers/booksController');

// Route to get all books
router.get('/allbooks', booksController.getAllBooks);

// Route to get a book by number
router.get('/allbooks/:id', booksController.getBookById);

// Route to add a review to a book by number
router.post('/allbooks/:id/review', booksController.addReview);

// Route to get all reviews for a specific book by number
router.get('/allbooks/:id/reviews', booksController.getReviews);

module.exports = router;
