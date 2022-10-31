import React from 'react'
import { Link } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LogoutButton } from '../features/auth'

const TabLink = React.memo<{ to: string } & React.PropsWithChildren>(
    ({ to, children }) => {
        return (
            <Link to={to}>
                <View
                    style={{
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                        borderRadius: 12,
                    }}
                >
                    <Text>{children}</Text>
                </View>
            </Link>
        )
    }
)

export const CustomHeader = () => {
    const insets = useSafeAreaInsets()

    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                paddingTop: insets.top,
                height: 40 + insets.top,
            }}
        >
            <TabLink to={'/Main/Home'}>#Home</TabLink>
            <TabLink to={'/Main/Timeline'}>#Timeline</TabLink>
            <LogoutButton />
        </View>
    )
}
