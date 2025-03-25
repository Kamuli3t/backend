import express from "express";
const router = express.Router();
import BookReview from "../models/BookReview.js";
import { authenticateAdmin } from "../middleware/auth.js";

router.get("/", async (req, res) => {
  try {
    const bookReviews = await BookReview.find().sort({ createdAt: -1 });
    res.json(bookReviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bookReview = await BookReview.findById(req.params.id);
    if (!bookReview) {
      return res.status(404).json({ message: "Book review not found" });
    }
    res.json(bookReview);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", authenticateAdmin, async (req, res) => {
  try {
    // I decided to move the fetchBookData function to the frontend and pass the book data to the backend.
    // const bookData = await fetchBookData(req.body.bookId, apiKey); // move to frontend
    const bookData = req.body.bookData;

    if (!bookData) {
      return res.status(400).json({ message: "Failed to fetch book data" });
    }

    const bookReview = new BookReview({
      bookId: req.body.bookId,
      title: bookData.title,
      authors: bookData.authors || "N/A",
      thumbnail: bookData.imageLinks?.thumbnail,
      genres: bookData.categories || "N/A",
      descriptionShort: req.body.descriptionShort,
      howChangedMe: req.body.howChangedMe,
      whoShouldRead: req.body.whoShouldRead,
      impressions: req.body.impressions,
      rating: req.body.rating,
    });

    const newBookReview = await bookReview.save();
    res.status(201).json(newBookReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", authenticateAdmin, async (req, res) => {
  try {
    const deletedBookReview = await BookReview.findByIdAndDelete(req.params.id);
    if (!deletedBookReview) {
      return res.status(404).json({ message: "Book review not found" });
    }
    res.json({ message: "Book review deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
