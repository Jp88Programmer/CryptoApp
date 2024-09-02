import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useColorScheme } from "nativewind";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInRight } from "react-native-reanimated";
import { Image } from "expo-image";
const SplachScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const { navigate }: NavigationProp<SpleshNavigationType> = useNavigation();
  const blurhash =
    "L1N50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

  useEffect(() => {
    setTimeout(() => {
      navigate("Welcome");
    }, 2000);
  }, []);

  
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      {/* <StatusBar style={colorScheme} /> */}
      <View className="w-full px-4 items-center">
        <Animated.View
          className="flex-row justify-center items-center"
          entering={FadeInRight.duration(100).delay(200).springify()}
        >
          <View className="pr-2">
            <View className="w-20 h-20 overflow-hidden">
              <Image
                source={require("../../../assets/images/logo.png")}
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
                className="w-full h-full flex-1"
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          className="flex-row justify-center items-center"
          entering={FadeInRight.duration(100).delay(200).springify()}
        >
          <Text
            className="text-[#31aca3] text-xl leading-[60px] pl-1"
            style={{
              fontFamily: "PlusJakartaBoldItalic",
            }}
          >
            CRYPTO
          </Text>
          <Text
            className="text-neutral-600 text-xl leading-[60px] pl-1"
            style={{
              fontFamily: "PlusJakartaSans",
            }}
          >
            STACKS
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplachScreen;
