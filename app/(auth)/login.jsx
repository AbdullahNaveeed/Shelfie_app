// At the start, we have three options: Login, Signup, and Profile pages.
// If the user is not logged in and clicks on the Profile page, they are 
// redirected to the Login page by default. This handles authentication.
// I use Appwrite as the backend to manage login sessions with a valid email 
// and a password of at least 8 characters.
// Appwrite is also used to store books, delete them, and fetch a book by its
// ID.

import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constants/Colors";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user, login } = useUser();

  const handleSubmit = async () => {
    setError(null);
    try {
      await login(email, password);
      console.log("Current user:", user);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Login to Your Account
        </ThemedText>
        <ThemedTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20 }}
          onChangeText={setEmail}
          value={email}
        />
        <ThemedTextInput
          placeholder="Password"
          style={{ width: "80%", marginBottom: 20 }}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <ThemedButton onPress={handleSubmit}>
          <Text style={{ textAlign: "center", color: "#f2f2f2" }}>Login</Text>
        </ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <ThemedText style={{ textAlign: "center" }}>
          If you don't have an account{" "}
          <Link href="/register">
            <ThemedText
              style={{ color: "blue", fontWeight: "bold", textAlign: "center" }}
            >
              Register
            </ThemedText>
          </Link>
        </ThemedText>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
    textAlign: "center",
  },
});
