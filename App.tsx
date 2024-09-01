import { View, Text } from 'react-native'
import React from 'react'
import RootNavigation from './src/screens/navigation/RootNavigation'

const App = () => {
  return (
    <View className='flex-1'>
      <RootNavigation />
    </View>
  )
}

export default App