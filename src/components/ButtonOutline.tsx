import { View, Text, Pressable } from "react-native";
import React from "react";

interface ButtonOutlineProps {
  title: string;
  action?: () => void;
  children?: React.ReactNode;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  title,
  action,
  children,
}: ButtonOutlineProps) => {
  return (
    <Pressable
      className="border-2 border-neutral-400 rounded-lg justify-center items-center py-3 flex-row space-x-2"
      onPress={action}
    >
      {children && <View>{children}</View>}
      <Text className="text-neutral-500 text-lg">{title}</Text>
    </Pressable>
  );
};

export default ButtonOutline;
