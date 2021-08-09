import React, {createContext, useState} from "react";
import {URLS} from "../assets/urls";

export const UserContext = createContext(null);

function UserProvider({ children }) {
    const [token, setToken] = useState('');
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null);

    const url = `${URLS.API}/login`

    async function login(data){

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const loginData = await response.json()

        console.log('login data')
        await console.log(loginData.token)

        if(loginData.error){
            setError(await loginData.error)
        }else{
            setToken(await loginData.token)
            setUser(await loginData.user)
        }

        console.log('after possible error')
        console.log(loginData.message)
        console.log('token desde context' + token)
    }

    function logout() {
        // Fetch to logout
        // then delete Data
        setUser(null);
        setToken('');
    }

    return (
        <UserContext.Provider
            value={{
                userData: user,
                isAuth: token !== '',
                error,
                token,
                login,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider };
