import React, {createContext, useEffect, useState} from "react";
import {URLS} from "../assets/urls";

export const UserContext = createContext(null);


function UserProvider({ children }) {


    const [token, setToken] = useState(() => {
        const local = localStorage.getItem('token')

        console.log('en el hook tenemos el  ' + local)
        return local ? local : ''

    });
    const [error, setError] = useState(null)

    const [user, setUser] = useState(() => {
        const local = JSON.parse(localStorage.getItem('user'))
        return local ? local : null
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
            console.log(token + ' sera que si ome?')

            console.log('el que esta en el storage ' + localStorage.getItem('token'))
            console.log('token nuevo: ' + fetchData.token)
        }
        console.log('token nuevo en el metodo de refresh ' + token)

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
                refreshToken
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider };
