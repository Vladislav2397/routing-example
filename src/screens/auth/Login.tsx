import React from 'react'
import { Text, View } from 'react-native'
import { Link } from '@react-navigation/native'
import { LoginButton } from '../../features/auth'

export const Login = React.memo(() => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login</Text>
            <Link to={'/Registration'}>#Registration</Link>
            <LoginButton />
        </View>
    )
})
