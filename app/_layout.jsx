import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Slot, Stack } from "expo-router";
import {Colors} from '../constants/Colors'

const _RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ??Colors.light
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen
        name="contact"
        options={{ title: "Contact", headerShown: false }}
      />
    </Stack>
    // <View style={{ flex: 1 }}>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
  );
};

export default _RootLayout;

const styles = StyleSheet.create({});
