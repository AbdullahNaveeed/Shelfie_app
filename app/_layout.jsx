import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack ScreenOptions={{
            headerStyle:{ backgroundColor: '#ddd' },
            headerTintColor:'#333'
    }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" ,headerShown:false}} />
    </Stack>
    // <View style={{ flex: 1 }}>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
  );
};

export default _layout;

const styles = StyleSheet.create({});
