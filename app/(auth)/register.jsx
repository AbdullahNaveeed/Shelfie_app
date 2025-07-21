import { StyleSheet ,Text} from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";

const register = () => {
  const handleSubmit = () => {
    console.log("Register button pressed");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an Account
      </ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ textAlign: "center", color: "#f2f2f2" }}>Register</Text>
      </ThemedButton>
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
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
});
