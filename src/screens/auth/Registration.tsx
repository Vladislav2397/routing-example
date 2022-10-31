import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { LoginButton } from '../../features/auth'
import { useStore } from 'effector-react'
import { $registrationProgressBar } from './model/registration'
import { NameStep } from './Registration/NameStep'
import { DateStep } from './Registration/DateStep'

// const steps = ['name', 'date']

const enum Steps {
    name,
    date,
}

const Button = React.memo<{ onClick: () => void } & React.PropsWithChildren>(
    ({ children, onClick }) => {
        return (
            <Pressable onPress={onClick}>
                <Text>{children}</Text>
            </Pressable>
        )
    }
)

export const Registration = React.memo(() => {
    const progressBar = useStore($registrationProgressBar)
    const [step, setStep] = useState(Steps.name)

    const isStep = (stepValue: Steps) => {
        return step === stepValue
    }

    return (
        <View>
            <Text>{JSON.stringify(progressBar)}</Text>
            <Text>Registration</Text>
            {isStep(Steps.name) && <NameStep />}
            {isStep(Steps.date) && <DateStep />}
            {!isStep(Steps.date) ? (
                <Button onClick={() => setStep(step + 1)}>Next</Button>
            ) : (
                <LoginButton />
            )}
        </View>
    )
})
