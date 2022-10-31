import React from 'react'
import { Text, View } from 'react-native'
import { Link } from '@react-navigation/native'
import { useStore } from 'effector-react'
import { $user } from '../../entities/user/model'

export const Home = React.memo(() => {
    const userStore = useStore($user)

    return (
        <View>
            <Text>Home</Text>
            <Text>
                User: {userStore.name} and {userStore.date}
            </Text>
            <Link to={'/Timeline'}>#Timeline</Link>
        </View>
    )
})
