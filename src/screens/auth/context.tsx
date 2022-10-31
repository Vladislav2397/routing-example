import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext<{
    isAuth: boolean
    setIsAuth: (isAuth: boolean) => void
}>({
    isAuth: false,
    setIsAuth: () => 0,
})

export const AuthProvider = React.memo<React.PropsWithChildren>(({ children }) => {
    const [isAuth, setIsAuth] = useState(false)

    return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
})

export const useAuthContext = () => useContext(AuthContext)
