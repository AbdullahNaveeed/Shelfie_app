import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import GuestOnly from "../../components/auth/GuestOnly";

const _AuthLayout = () => {
  
  return (
    <GuestOnly>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      ></Stack>
    </GuestOnly>
    // <View style={{ flex: 1 }}>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
  );
};

export default _AuthLayout;
