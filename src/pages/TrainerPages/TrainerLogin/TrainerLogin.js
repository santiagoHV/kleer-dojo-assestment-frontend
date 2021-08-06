import React, {useState} from "react";
import {URLS} from "../../../assets/urls";
import GenericLogin from "../../../components/GenericLogin/GenericLogin";
import './TrainerLogin.css'

const TrainerLogin = () => {
    const url = `${URLS.API}/login`

    const [data,setData] = useState({
        username:'',
        password: ''
    })

    const [status, setStatus] = useState({
        loading: false,
        error: null,
    })

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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendCredentials()
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

        console.log(data)
    }

    return (
        <section id={'trainer-login'}>
            <GenericLogin
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
        </section>
    )
}

export default TrainerLogin