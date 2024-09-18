const Book = require('../Models/booksSchema');

// Function to get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to get a specific book by number
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ number: req.params.id });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to add a review to a book
exports.addReview = async (req, res) => {
  try {
    const { rating, review } = req.body;

    // Validate review inputs
    if (!rating || !review) {
      return res.status(400).json({ error: 'Rating and review are required' });
    }
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    // Find the book by number
    const book = await Book.findOne({ number: req.params.id });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    // Add the new review to the book's reviews array
    book.reviews.push({ rating, review });

    // Save the updated book
    await book.save();

    res.status(200).json({ message: 'Review added successfully', book });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to get all reviews for a specific book
exports.getReviews = async (req, res) => {
  try {
    // Find the book by its number
    const book = await Book.findOne({ number: req.params.id });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    // Return the reviews array
    res.status(200).json(book.reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
