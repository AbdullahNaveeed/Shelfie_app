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

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { register } = useUser();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    setError(null);
    try {
      await register(email, password, name);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register for an Account
        </ThemedText>
        <ThemedTextInput
          placeholder="Name"
          style={{ width: "80%", marginBottom: 20 }}
          onChangeText={setName}
          value={name}
        />
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
          <Text style={{ textAlign: "center", color: "#f2f2f2" }}>
            Register
          </Text>
        </ThemedButton>
        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}
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
    </TouchableWithoutFeedback>
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
