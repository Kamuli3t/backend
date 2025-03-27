import mongoose from "mongoose";

const bookReviewSchema = new mongoose.Schema({
  bookId: {
    type: String, // Google Books API book ID
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  authors: [{ type: String, required: true }],
  thumbnail: {
    type: String,
  },
  genres: [{ type: String }], // Array for book genres
  descriptionShort: {
    type: String,
    required: true,
  },
  howChangedMe: {
    type: String,
    required: true,
  },
  whoShouldRead: {
    type: String,
    required: true,
  },
  impressions: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  readAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const BookReview = mongoose.model("BookReview", bookReviewSchema);

export default BookReview;
