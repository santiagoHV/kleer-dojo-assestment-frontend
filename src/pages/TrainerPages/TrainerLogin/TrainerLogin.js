import React, {useState, useContext, useEffect} from "react";
import {UserContext} from "../../../context/UserContext";
import GenericLogin from "../../../components/GenericLogin/GenericLogin";
import './TrainerLogin.css'
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logInAction} from "../../../redux/actions/authActions";
import {cleanError, toggleLoader} from "../../../redux/actions/uiActions";

const TrainerLogin = (props) => {
    ////redux implementation
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.auth.isLoggedIn)
    const error = useSelector(state => state.ui.error)

    ////////////////

    const { login, userData, isAuth} = useContext(UserContext)
    const [loginData, setLoginData] = useState({});

    const [data,setData] = useState({
        username:'',
        password: ''
    })

    useEffect(() => {
        dispatch(cleanError())
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(cleanError())
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
        dispatch(toggleLoader(false))
        return <Redirect to={'/trainer-home'}/>
    }else {
        return (
            <section id={'trainer-login'}>
                <GenericLogin
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    error={error}
                />
            </section>
        )
    }


}

export default TrainerLogin