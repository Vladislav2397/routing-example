import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './src/screens/Navigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
      <SafeAreaProvider>
          <NavigationContainer>
              {RootNavigator()}
          </NavigationContainer>
      </SafeAreaProvider>
  )
}
