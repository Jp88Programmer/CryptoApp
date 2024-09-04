import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Animated, { FadeInRight } from "react-native-reanimated";
import Button from "@/src/components/Button";
import Breaker from "@/src/components/Breaker";
import ButtonOutline from "@/src/components/ButtonOutline";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { signUpWithEmail } from "@/supabaseHelper";

const { width, height } = Dimensions.get("window");
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { navigate: navigateAuth }: NavigationProp<AuthNavigationType> =
    useNavigation();

  const handleSignUp = async () => {
    setIsLoading(true);
    console.log("🚀 ~ handleSignUp ~ email:", email,password)

    const {
      data: { session },
      error,
    } = await signUpWithEmail(email, password);

    if (!session) {
      Alert.alert(
        "Registered successfully. Please check your inbox for verfication"
      );
      navigateAuth("Login");
    }

    if (error) {
      Alert.alert("something went wrong!");
    }

    setIsLoading(false);
  };
  return (
    <View className="flex-1">
      {isLoading && (
        <View className="absolute z-50 h-full w-full justify-center items-center">
          <View className="h-full w-full justify-center items-center bg-black opacity-[0.45]"></View>
          <View className="absolute">
            <ActivityIndicator size="large" color="white" />
          </View>
        </View>
      )}

      <View className="justify-center items-center relative flex-1">
        <View
          className="justify-center w-full px-4 space-y-4"
          style={{
            height: height * 0.75,
          }}
        >
          {/* Welcome Text */}

          <Animated.View
            className="justify-center items-center"
            entering={FadeInRight.duration(100).delay(200).springify()}
          >
            <Text
              className="text-2xl text-neutral-800 leading-[60px]"
              style={{
                fontFamily: "PlusJakartaSansBold",
              }}
            >
              Register to join us.
            </Text>
            <Text className="text-neutral-500 text-sm font-medium">
              Welcome! Please enter your details.
            </Text>
          </Animated.View>

          {/* Email and Password Text Input */}
          <Animated.View
            className="py-8 space-y-8"
            entering={FadeInRight.duration(100).delay(200).springify()}
          >
            {/* Email */}
            <View className="border-2 border-gray-400 rounded-lg">
              <TextInput
                className="p-4"
                onChangeText={(text: string) => setEmail(text)}
                value={email}
                placeholder="Email"
                autoCapitalize="none"
              />
            </View>
            {/* Password */}
            <View className="border-2 border-gray-400 rounded-lg">
              <TextInput
                className="p-4"
                onChangeText={(text: string) => setPassword(text)}
                value={password}
                placeholder="Password"
                autoCapitalize="none"
              />
            </View>
          </Animated.View>

          {/* Login Button */}

          <Animated.View
            className="w-full justify-start"
            entering={FadeInRight.duration(100).delay(200).springify()}
          >
            <View className="pb-6">
              <Button title="Register" action={handleSignUp} />
            </View>
          </Animated.View>

          {/* Breaker Line */}
          <View>
            <Breaker />
          </View>

          {/* 3rd party login */}
          <View className="w-full justify-normal pt-6">
            <Animated.View
              entering={FadeInRight.duration(100).delay(300).springify()}
              className="border border-white pb-4"
            >
              <ButtonOutline title="Continue With Google">
                <AntDesign name="google" size={20} color="gray" />
              </ButtonOutline>
            </Animated.View>
          </View>

          {/* Don't have an account? */}
          <Animated.View
            className="flex-row justify-center items-center"
            entering={FadeInRight.duration(100).delay(200).springify()}
          >
            <Text
              className="text-neutral-500 text-lg font-medium leading-[38px] text-center"
              style={{
                fontFamily: "PlusJakartaSansMedium",
              }}
            >
              Have an account?{" "}
            </Text>
            <Pressable
              onPress={() => {
                navigateAuth("Login");
              }}
            >
              <Text
                className="text-neutral-800 text-lg font-medium leading-[38px] text-center"
                style={{
                  fontFamily: "PlusJakartaSansMedium",
                }}
              >
                Login{" "}
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
