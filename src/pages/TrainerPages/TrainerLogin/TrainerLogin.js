import React, {useState, useContext} from "react";
import {UserContext} from "../../../context/UserContext";
import GenericLogin from "../../../components/GenericLogin/GenericLogin";
import './TrainerLogin.css'
import STORE from '../../../assets/store'
import {URLS} from "../../../assets/urls";

const TrainerLogin = (props) => {

    const { login, userData, isAuth} = useContext(UserContext)
    // const [isAuth, setIsAuth] = useState(false)

    const [data,setData] = useState({
        username:'',
        password: ''
    })

    const url = `${URLS.API}/login`

    const sendCredentials = async () => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const loginData = await response.json()
        console.log(loginData)
        // setIsAuth(true)
        localStorage.setItem('prueba', loginData.user)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(data)
        // sendCredentials()
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    if(isAuth){
        props.history.push('/trainer-home')
    }else {
        return (
            <section id={'trainer-login'}>
                <GenericLogin
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </section>
        )
    }


}

export default TrainerLogin