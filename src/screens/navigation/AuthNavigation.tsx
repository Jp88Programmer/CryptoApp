import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../auth/LoginScreen";
import RegisterScreen from "../auth/RegisterScreen";
import SplachScreen from "../auth/SplachScreen";
import WelcomeScreen from "../auth/WelcomeScreen";
const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureDirection: "horizontal",
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Splach" component={SplachScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
