import React from 'react'
import { Pressable, Text } from 'react-native'
import { authContextApi } from '../../entities/auth/model'

export const LoginButton = () => {
    return (
        <Pressable
            onPress={() => {
                authContextApi.logIn()
            }}
        >
            <Text>LogIn</Text>
        </Pressable>
    )
}
