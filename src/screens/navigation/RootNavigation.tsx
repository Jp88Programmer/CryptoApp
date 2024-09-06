import { View, Text } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import TabNavigation from "./TabNavigation";
import { useUserStore } from "@/store/useUserStore";

const Stack = createStackNavigator();
const RootNavigation = () => {
  const { session } = useUserStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          gestureDirection: "horizontal",
          gestureEnabled: true,
        }}
      >
        {true ? (
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        ) : (
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
