import { createEvent, createStore } from 'effector'

type SetFieldEventPayload = {
    fieldName: string
    value: string
}

const setField = createEvent<SetFieldEventPayload>()
const resetUser = createEvent()

const $user = createStore({
    name: '',
    date: '',
})
    .on(setField, (state, { fieldName, value }) => ({
        ...state,
        [fieldName]: value,
    }))
    .reset(resetUser)

export { $user, setField, resetUser }
