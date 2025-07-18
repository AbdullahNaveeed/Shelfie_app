import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/logo_light.png";
import {Link} from 'expo-router'
const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={{uri: ""}}/> */}
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>Abdullah Naveed</Text>
      <Text style={{ marginTop: 10, marginBottom: 10 }}>Reading List App</Text>
      <View style={styles.card}>
        <Text>This is my first Card</Text>
      </View>
      <Link href="/about" style={styles.link}>About page</Link>
      <Link href="/contact" style={styles.link}>Contact page</Link>
    </View>
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
  link:{
    marginBottom:20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  }
});
