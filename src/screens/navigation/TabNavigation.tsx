import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "../auth/LoginScreen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./tabnavigation/Home";
import Market from "./tabnavigation/Market";
import Profile from "./tabnavigation/Profile";
import News from "./tabnavigation/News";
import { Ionicons } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import Search from "./tabnavigation/Search";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName = "";
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Market") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Search") {
            iconName = "search-outline";
          } else if (route.name === "News") {
            iconName = "newspaper-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={25}
              color={focused ? "#164b48" : "gray"}
            />
          );
        },
        tabBarActiveTintColor: "#164b48",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        ...TransitionPresets.DefaultTransition,
        animationEnabled: true,
        gestureDirection: "horizontal",
        gestureEnabled: true,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
