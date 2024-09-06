import { View, Text } from "react-native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import CoinDetails from "../../stacks/CoinDetails";
import React from "react";
import HomeLayout from "../../tabs/home/HomeLayout";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureEnabled: true,
        ...TransitionPresets.DefaultTransition,
      }}
    >
      <Stack.Screen name="HomeS" component={HomeLayout} />
      <Stack.Screen name="CoinDetails" component={CoinDetails} />
    </Stack.Navigator>
  );
};

export default Home;
