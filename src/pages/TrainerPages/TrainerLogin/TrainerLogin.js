import React, {useState, useContext} from "react";
import {UserContext} from "../../../context/UserContext";
import GenericLogin from "../../../components/GenericLogin/GenericLogin";
import './TrainerLogin.css'
import {Redirect} from "react-router-dom";

const TrainerLogin = (props) => {

    const { login, userData, isAuth} = useContext(UserContext)
    console.log(userData)

    const [data,setData] = useState({
        username:'',
        password: ''
    })

    // const url = `${URLS.API}/login`

    // const sendCredentials = async () => {
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //
    //     const loginData = await response.json()
    //     console.log(loginData)
    //
    //     localStorage.setItem('token', loginData.token)
    //     props.history.push('/trainer-home')
    // }

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
        return <Redirect to={'/trainer-home'}/>
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