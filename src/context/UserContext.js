import React, {createContext, useState} from "react";
import {URLS} from "../assets/urls";

export const UserContext = createContext(null);

function UserProvider({ children }) {
    const [token, setToken] = useState(() => {
        const local = localStorage.getItem('token')
        return local ? local : ''

    });
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState(() => {
        const local = JSON.parse(localStorage.getItem('user'))
        return local ? local : null
    });



    async function login(data){

        const url = `${URLS.API}/login`
        setLoading(true)

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const loginData = await response.json()

        console.log('login data')
        console.log(loginData)

        if(loginData.error){
            setError(loginData.error)
        }else{
            localStorage.setItem('user', JSON.stringify(loginData.user))
            localStorage.setItem('token', loginData.token)
            setUser(loginData.user)
            setToken(loginData.token)
        }
        setLoading(false)


    }

    async function logout() {
        const url = `${URLS.API}/logout`
        setLoading(true)

        const response = await fetch(`${url}?token=${token}`)
        const logoutData = await response.json()

        if(logoutData.error){
            setError(logoutData.error)
        }else {
            localStorage.setItem('user', null)
            localStorage.setItem('token', null)
            setUser(null)
            setToken('')
        }
        setLoading(false)
    }

    async function refreshToken(){
        const url = `${URLS.API}/refresh-token`
        setLoading(true)

        const response = await fetch(`${url}?username=${user.username}`)
        const fetchData = await response.json()

        if(fetchData.error){
            setError(fetchData.error)
        }else {
            localStorage.setItem('token', fetchData.token)
            setToken(fetchData.token)
        }
        setLoading(false)

    }

    return (
        <UserContext.Provider
            value={{
                userData: user,
                loadingUserProcess: loading,
                isAuth: token !== '',
                error,
                token,
                login,
                logout,
                refreshToken
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider };
