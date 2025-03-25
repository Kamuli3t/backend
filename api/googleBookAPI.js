import axios from "axios";

const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
// Function to fetch book data from Google Books API
// I'm moving this function to the frontend to populate the form with book data
// and pass the book data to the backend when creating a new book review
async function fetchBookData(bookId, apiKey) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/?q=${bookId}key=${apiKey}`
    );
    return response.data.volumeInfo;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return null;
  }
}
