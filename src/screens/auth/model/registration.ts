import { createStore, sample } from 'effector'
import { $user, setField } from '../../../entities/user/model'

const fields = {
    name: /.+/,
    date: /.+/,
}

export const $registrationSteps = createStore({ name: 0, date: 0 })
export const $registrationProgressBar = $user.map((fields) => {
    return ['name', 'date'].map((key) => (fields[key] ? 1 : 0.2))
})

sample({
    source: $user,
    clock: setField,
    fn: (userState) => {
        return Object.fromEntries(
            Object.entries(userState).map(([key, value]) => [
                key,
                value ? 1 : 0.2,
            ])
        )
    },
    target: $registrationSteps,
})
