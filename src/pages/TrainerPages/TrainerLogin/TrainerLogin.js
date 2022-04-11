import React, {useState, useContext} from "react";
import {UserContext} from "../../../context/UserContext";
import GenericLogin from "../../../components/GenericLogin/GenericLogin";
import './TrainerLogin.css'
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logInAction} from "../../../redux/actions/authActions";

const TrainerLogin = (props) => {
    ////redux implementation
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.auth.isLoggedIn)

    ////////////////

    const { login, userData, isAuth} = useContext(UserContext)
    const [loginData, setLoginData] = useState({});

    const [data,setData] = useState({
        username:'',
        password: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(logInAction(data))

        // setLoginData(await login(data))
        // // sendCredentials()
        // console.log(loginData)
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    if(isLogged){
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