import React, { createContext, useContext, useState } from 'react';

const authContext = createContext()

export function AuthProvider({ children }) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth () {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const signIn = (data) => {
        setIsLoading(true)
        new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    name: 'Vlad',
                    age: '16'
                })
            }, 1000)
        }).then((res) => {
            setUser(res)
            setIsLoading(false)
        })
        // fetch('login', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // }).then((res) => {
        //     if(res.ok) {
        //         res.json().then(user => setUser(user));
        //     } else {
        //         res.json().then(() => setError('Не правильный логин или пароль'))
        //     }
        //     setIsLoading(false)
        // })
    }
    const signUp = (data) => {
        setIsLoading(true)
        fetch('registration', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(res.ok) {
                res.json().then(user => setUser(user));
                setIsLoading(false)
            } else {
                res.json().then(err => setError(err))
            }
            setIsLoading(false)
        })
    }
    const signOut = () => {
        setIsLoading(true)
        new Promise((res, rej) => {
            setTimeout(() => {
                res(null)
            }, 1000)
        }).then((res) => {
            setUser(res)
            setIsLoading(false)
        })
    }

    return {
        user,
        signIn,
        signOut,
        signUp,
        error,
        isLoading
    }
}

export default authContext