import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";

const _AuthLayout = () => {
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      ></Stack>
    </>
    // <View style={{ flex: 1 }}>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
  );
};

export default _AuthLayout;
