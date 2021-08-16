import React, {useState, useContext} from "react";
import {UserContext} from "../../../context/UserContext";
import GenericLogin from "../../../components/GenericLogin/GenericLogin";
import './TrainerLogin.css'
import {Redirect} from "react-router-dom";

const TrainerLogin = (props) => {

    const { login, userData, isAuth} = useContext(UserContext)
    const [loginData, setLoginData] = useState({});

    const [data,setData] = useState({
        username:'',
        password: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoginData(await login(data))
        // sendCredentials()
        console.log(loginData)
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
                {loginData.error ? loginData.error : ''}
            </section>
        )
    }


}

export default TrainerLogin