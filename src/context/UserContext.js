import React, {createContext, useEffect, useState} from "react";
import {URLS} from "../assets/urls";

export const UserContext = createContext(null);


function UserProvider({ children }) {


    const [token, setToken] = useState(() => {
        const local = localStorage.getItem('token')

        return local ? local : ''

    });
    const [error, setError] = useState(null)

    const [user, setUser] = useState(() => {
        try {
            const local = localStorage.getItem('user')
            return local ? JSON.parse(local) : null
        } catch (e) {
            return null
        }
    });



    async function login(data){

        const url = `${URLS.API}/login`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const loginData = await response.json()

        if(loginData.error){
            setError(loginData.error)
        }else{
            localStorage.setItem('user', JSON.stringify(loginData.user))
            localStorage.setItem('token', loginData.token)
            setUser(loginData.user)
            setToken(loginData.token)
        }

        return loginData
    }

    async function logout() {
        const url = `${URLS.API}/logout`

        const response = await fetch(`${url}?token=${token}`)
        const logoutData = await response.json()

        if(logoutData.error){
            setError(logoutData.error)
        }else {
            localStorage.setItem('token', null)
            localStorage.setItem('user', null)

            setToken('')
            setUser(null)
        }
    }

    async function refreshToken(){
        const url = `${URLS.API}/refresh-token`

        const response = await fetch(`${url}?username=${user.username}`)
        const fetchData = await response.json()

        if(fetchData.error){
            setError(fetchData.error)
        }else {
            localStorage.setItem('token', fetchData.token)
            setToken(localStorage.getItem('token'))
            setToken((token) => {
                console.log(token)
                return token
            })
        }

    }

    function deleteUserData(){
        console.log('borra el usuario')
        localStorage.setItem('user', '')
        localStorage.setItem('token', '')

        setUser(localStorage.getItem('user'))
        setToken(localStorage.getItem('token'))
    }

    return (
        <UserContext.Provider
            value={{
                userData: user,
                isAuth: token !== '' && token !== 'null',// && localStorage.getItem('token') !== 'null',
                error,
                token,
                login,
                logout,
                refreshToken,
                deleteUserData
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider };
