import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInRight } from "react-native-reanimated";
import Button from "@/src/components/Button";
import ButtonOutline from "@/src/components/ButtonOutline";
import Breaker from "@/src/components/Breaker";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  // const { navigate: navigateTab }: NavigationProp<TabNavigationType> =
  //   useNavigation();
  const { navigate: navigateAuth }: NavigationProp<AuthNavigationType> =
    useNavigation();

  const blurhash =
    "L1N50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
  return (
    <SafeAreaView className="flexx-1 items-center justify-between bg-white">
      {/* <StatusBar style="auto" /> */}
      <View className="w-full px-4 items-center justify-center space-y-6 h-full">
        {/* Logo */}
        <View className="w-full px-4 items-center">
          <Animated.View
            entering={FadeInRight.duration(100).delay(200).springify()}
            className="flex-row justify-center items-center"
          >
            <View>
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
        </View>

        {/* Welcome */}
        <View className="justify-center items-center">
          <Animated.Text
            className="text-neutral-800 text-3xl font-medium leading-[60px]"
            entering={FadeInRight.duration(100).delay(200).springify()}
          >
            Welcome
          </Animated.Text>
        </View>

        <View className="w-full justify-start">
          {/* Login */}
          <Animated.View
            className="pb-6"
            entering={FadeInRight.duration(100).delay(300).springify()}
          >
            <Button title="Login" action={() => navigateAuth("Login")} />
          </Animated.View>
          {/* Sign Up */}
          <Animated.View
            className="pb-6"
            entering={FadeInRight.duration(100).delay(300).springify()}
          >
            <ButtonOutline
              title="Sign Up"
              action={() => navigateAuth("Register")}
            />
          </Animated.View>

          <View>
            <Breaker />
          </View>

          {/* 3rd party Auth */}

          <View className="w-full justify-normal pt-6">
            <Animated.View
              entering={FadeInRight.duration(100).delay(300).springify()}
              className="border border-white pb-4"
            >
              <ButtonOutline title="Continue With Google">
                <AntDesign name="google" size={20} color="gray" />
              </ButtonOutline>
            </Animated.View>
            <Animated.View
              entering={FadeInRight.duration(100).delay(300).springify()}
              className="border border-white pb-4"
            >
              <ButtonOutline title="Continue With Apple">
                <AntDesign name="apple1" size={20} color="gray" />
              </ButtonOutline>
            </Animated.View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
