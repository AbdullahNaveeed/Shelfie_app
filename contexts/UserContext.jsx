import { createContext, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";
export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log("Appwrite Endpoint:", process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT);
  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function register(email, password, name) {
    try {
      await account.create(ID.unique(), email, passwor, name);
      await login(email, password);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async function logout() {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  }
  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
