import { StyleSheet } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";

const register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an Account
      </ThemedText>
      <Spacer height={100} />
      <ThemedText style={{ textAlign: "center" }}>
        Back to{" "}
        <Link href="/login">
          <ThemedText
            style={{ color: "blue", fontWeight: "bold", textAlign: "center" }}
          >
            Login
          </ThemedText>
        </Link>
      </ThemedText>
    </ThemedView>
  );
};

export default register;

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
});
