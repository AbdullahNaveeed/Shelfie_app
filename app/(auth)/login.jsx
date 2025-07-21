import { Pressable, StyleSheet, Text } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";

const login = () => {
  const handleSubmit = () => {};
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      >
        <Text style={{ textAlign: "center", color: "#f2f2f2" }}>Login</Text>
      </Pressable>

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
  },
  title: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    width: "40%",
    alignSelf: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
