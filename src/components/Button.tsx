import { View, Text, Pressable } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, action }: ButtonProps) => {
  return (
    <Pressable
      className="bg-[#2ab087] rounded-lg justify-center items-center py-3"
      onPress={action}
    >
      <Text className="text-white font-bold text-lg">{title}</Text>
    </Pressable>
  );
};

export default Button;
