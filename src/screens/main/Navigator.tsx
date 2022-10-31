import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './Home'
import { Timeline } from './Timeline'
import { CustomHeader } from '../../widgets/Header'

const Stack = createBottomTabNavigator()
export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                header: () => <CustomHeader />,
            }}
        >
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'Timeline'} component={Timeline} />
        </Stack.Navigator>
    )
}
