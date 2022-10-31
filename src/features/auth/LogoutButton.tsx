import React from 'react'
import { Pressable, Text } from 'react-native'
import { authContextApi } from '../../entities/auth/model'

export const LogoutButton = () => {
    return (
        <Pressable
            onPress={() => {
                authContextApi.logOut()
            }}
        >
            <Text>LogOut</Text>
        </Pressable>
    )
}
