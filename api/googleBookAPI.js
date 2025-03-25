import axios from "axios";

const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
// Function to fetch book data from Google Books API
async function fetchBookData(bookId, apiKey) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/<span class="math-inline">\{bookId\}?key\=</span>{apiKey}`
    );
    return response.data.volumeInfo;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return null;
  }
}
