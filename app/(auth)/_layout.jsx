import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";
import { useUser } from "../../hooks/useUser";

const _AuthLayout = () => {
  const { user } = useUser();
  console.log("User: ", user);
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
