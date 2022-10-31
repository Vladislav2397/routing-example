import React from 'react'
import { Text, View } from 'react-native'
import { LogoutButton } from '../../features/auth'

export const Timeline = React.memo(() => {
    return (
        <View>
            <Text>Timeline</Text>
            <LogoutButton />
        </View>
    )
})
