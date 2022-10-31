import React from 'react'
import { Text, TextInput } from 'react-native'
import { useStore } from 'effector-react'
import { $user, setField } from '../../../entities/user/model'

export const DateStep = () => {
    const userStore = useStore($user)

    return (
        <>
            <Text>Title</Text>
            <Text>Description</Text>
            <TextInput
                value={userStore.date}
                onChangeText={(value: string) => {
                    setField({ fieldName: 'date', value })
                }}
                placeholder={'Date'}
            />
        </>
    )
}
