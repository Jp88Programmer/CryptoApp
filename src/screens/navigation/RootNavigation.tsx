import { View, Text } from "react-native";
import React, { useState } from "react";

const RootNavigation = () => {
  const [session, setSession] = useState<boolean>(true);

  return (
    <View>
      <Text>RootNavigation</Text>
    </View>
  );
};

export default RootNavigation;
