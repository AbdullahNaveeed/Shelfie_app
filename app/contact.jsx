import { StyleSheet, Text, View, Image } from "react-native";
import {Link} from 'expo-router';
const Contact = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={{uri: ""}}/> */}

      <Text style={styles.title}>Contact Page</Text>
      <Link href="/" style={styles.link}>
        Back to Home Page
      </Link>
    </View>
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
