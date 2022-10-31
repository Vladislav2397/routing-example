import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigator as MainNavigator } from './main/Navigator'
import { Login } from './auth/Login'
import { Registration } from './auth/Registration'
// import { AuthContext, AuthProvider } from './auth/context'
import { CustomHeader } from '../widgets/Header'
import { useStore } from 'effector-react'
import { $isAuth } from '../entities/auth/model'
import { View } from 'react-native'

const RootStack = createNativeStackNavigator()
export const RootNavigator = () => {
    const isAuth = useStore($isAuth)

    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: !isAuth,
                // header: () => <CustomHeader />,
            }}
        >
            {isAuth ? (
                <RootStack.Screen name={'Main'} component={MainNavigator} />
            ) : (
                <RootStack.Group
                    navigationKey={'Auth'}
                    screenOptions={{
                        // headerShown: false,
                        headerTitle: () => <View />,
                    }}
                >
                    <RootStack.Screen name={'Login'} component={Login} />
                    <RootStack.Screen
                        name={'Registration'}
                        component={Registration}
                    />
                </RootStack.Group>
            )}
        </RootStack.Navigator>
    )
}
