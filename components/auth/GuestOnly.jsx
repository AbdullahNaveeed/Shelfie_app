import { useEffect } from "react";
import {useUser} from "../../hooks/useUser";
import { Text } from "react-native";
import { useRouter } from "expo-router";
const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile");
    }
  }, [user, authChecked]);

  if (!authChecked || user) {
    <Text>Loading...</Text>;
    
  }
  return children;
};

export default GuestOnly;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
