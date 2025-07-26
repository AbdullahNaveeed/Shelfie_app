import { createContext, useState } from "react";
export const BookContext = createContext();
export const BookProvider = ({ children }) => {
  const DATABASE_ID = "6884a3590000c317632b"; 
  const COLLECTION_ID = "6884a4470027e048591e"; 
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchBooks() {
    try {
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  }
  async function fetchBookById(id) {
    try {
    } catch (err) {
      console.error("Error fetching book by ID:", err);
    }
  }
  async function createBook(data) {
    try {
    } catch (err) {
      console.error("Error create books:", err);
    }
  }
  async function deleteBook(id) {
    try {
    } catch (err) {
      console.error("Error delete book:", err);
    }
  }
  return (
    <BookContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
