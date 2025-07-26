import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a UserProvider");
  }
  return context;
}
