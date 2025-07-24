import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";
import ThemedCard from "../components/ThemedCard";
import { account } from "../lib/appwrite"; // Make sure this is correctly imported

const Home = () => {
  const sendPing = async () => {
    try {
      const response = await account.get();
      console.log("Ping success:", response);
      Alert.alert("Ping successful!", JSON.stringify(response));
    } catch (error) {
      console.error("Ping failed:", error.message);
      Alert.alert("Ping failed", error.message);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={styles.title} title={true}>
        Abdullah Naveed
      </ThemedText>
      <Spacer height={10} />
      <ThemedText style={{ fontSize: 16 }}>Reading List App</ThemedText>
      <Spacer height={15} />

      <ThemedCard style={styles.card}>
        <ThemedText>This is my first Card</ThemedText>
      </ThemedCard>
      <Spacer height={20} />

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>

      <TouchableOpacity style={styles.button} onPress={sendPing}>
        <ThemedText style={styles.buttonText}>Ping Appwrite</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  card: {
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
  },
  link: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  button: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#4F46E5",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
