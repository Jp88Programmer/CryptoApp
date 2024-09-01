import { View, Text } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import TabNavigation from "./TabNavigation";

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const [session, setSession] = useState<boolean>(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {session ? (
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        ) : (
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
