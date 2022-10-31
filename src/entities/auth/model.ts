import { createApi, createStore, forward } from 'effector'
import { resetUser } from '../user/model'

export const $isAuth = createStore(false)

export const authContextApi = createApi($isAuth, {
    logIn: () => true,
    logOut: () => false,
})

forward({
    from: authContextApi.logOut,
    to: resetUser,
})
