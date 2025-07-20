import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      {/* <Image source={{uri: ""}}/> */}
      <ThemedLogo style={styles.img} />
      <Text style={styles.title}>Abdullah Naveed</Text>
      <Spacer height={20} />
      <Text>Reading List App</Text>
      <Spacer />
      <View style={styles.card}>
        <Text>This is my first Card</Text>
      </View>
      <Link href="/about" style={styles.link}>
        About page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact page
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    marginVertical: 20,
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
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: 20,
  },
  link: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});
