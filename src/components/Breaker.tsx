import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { FadeInRight } from 'react-native-reanimated'

const Breaker = () => {
  return (
    <Animated.View entering={FadeInRight.duration(100).delay(300).springify()}
    className="flex-row w-full justify-center items-center"

    >

      <View className='h-10 w-[40%] justify-center items-center'>
        <View className='border-t-2 border-gray-400 w-full'></View>
      </View>

      <View className='h-10 w-[20%] justify-center items-center'>
        <Text className='text-base text-neutral-500'> OR </Text>
      </View>
      <View className='h-10 w-[40%] justify-center items-center'>
        <View className='border-t-2 border-gray-400 w-full'></View>
      </View>
    </Animated.View>
  );
}

export default Breaker