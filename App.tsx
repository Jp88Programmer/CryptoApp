import { View, Text } from "react-native";
import React from "react";
import RootNavigation from "./src/screens/navigation/RootNavigation";
import useCachedResources from "./hooks/useCachedResources";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const queryClient = new QueryClient();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <View className="flex-1">
      <StatusBar style={colorScheme} />
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </View>
  );
};

export default App;
