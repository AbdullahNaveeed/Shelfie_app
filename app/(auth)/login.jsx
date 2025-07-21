import { Pressable, StyleSheet, Text } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";

const login = () => {
  const handleSubmit = () => {
    console.log("Login button pressed");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <ThemedButton onPress={handleSubmit} >
        <Text style={{ textAlign: "center", color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>

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
});
