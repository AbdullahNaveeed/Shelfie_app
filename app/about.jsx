import { StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={[styles.container]}>
      {/* <Image source={{uri: ""}}/> */}

      <ThemedText style={[styles.title]} title={true}>About Page</ThemedText>
      <Link href="/" style={styles.link}>
        Back to Home Page
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#29ae51ff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
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
