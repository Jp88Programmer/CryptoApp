import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          PlusJakartaSans: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
          PlusJakartaSansBold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
          PlusJakartaSansSemiBold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
          PlusJakartaSansExtraBold: require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
          PlusJakartaSansMedium: require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
          PlusJakartaBoldItalic: require("../assets/fonts/PlusJakartaSans-BoldItalic.ttf"),
          PlusJakartaSansExtraBoldItalic: require("../assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf"),
          PlusJakartaSansMediumItalic: require("../assets/fonts/PlusJakartaSans-MediumItalic.ttf"),
          ...FontAwesome.font,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  return isLoadingComplete;
}
