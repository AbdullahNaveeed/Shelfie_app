import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log("Register button pressed ", name, email, password);
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
        keyboardType="email-address"
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
});
