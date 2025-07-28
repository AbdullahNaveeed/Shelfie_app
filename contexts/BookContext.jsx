import { createContext, useEffect, useState } from "react";
import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
export const BookContext = createContext();
export const BookProvider = ({ children }) => {
  const DATABASE_ID = "6884a3590000c317632b";
  const COLLECTION_ID = "6884a4470027e048591e";
  const [books, setBooks] = useState([]);
  const { user } = useUser();
  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)]
      );
      setBooks(response.documents);
      console.log("Books fetched:", response.documents);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  }
  async function fetchBookById(id) {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );
      return response;
    } catch (err) {
      console.error("Error fetching book by ID:", err);
    }
  }
  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (err) {
      console.error("Error create books:", err);
    }
  }
  async function deleteBook(id) {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
    } catch (err) {
      console.error("Error delete book:", err);
    }
  }
  useEffect(() => {
    let unsubscribe;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;
    if (user) {
      fetchBooks();
      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;
        if (events[0].includes("create")) {
          setBooks((prevBooks) => [...prevBooks, payload]);
        }
        if (events[0].includes("delete")) {
          setBooks((prevBooks) =>
            prevBooks.filter((book) => book.$id !== payload.$id)
          );
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);
  return (
    <BookContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
