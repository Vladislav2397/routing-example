import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './Login'
import { Registration } from './Registration'

const Stack = createNativeStackNavigator()
export const Navigator = () => {
    return <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Registration'} component={Registration} />
    </Stack.Group>
}
