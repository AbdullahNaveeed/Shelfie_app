import { StyleSheet, Text, View, Image } from "react-native";
import {Link} from 'expo-router';
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      {/* <Image source={{uri: ""}}/> */}

      <ThemedText style={styles.title} title={true}>Contact Page</ThemedText>
      <Link href="/" style={styles.link}>
        Back to Home Page
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});
