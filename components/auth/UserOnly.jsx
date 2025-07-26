import { useEffect } from "react";
import {useUser} from "../../hooks/useUser";
import { Text,StyleSheet } from "react-native";
import { useRouter } from "expo-router";
const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login");
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    <Text>Loading...</Text>;
    
  }
  return children;
};

export default UserOnly;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
