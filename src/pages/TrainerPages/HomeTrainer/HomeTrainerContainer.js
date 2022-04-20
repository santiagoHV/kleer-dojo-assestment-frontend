import React, { useEffect} from "react";
import PageLoading from "../../../components/PageLoading/PageLoading";
import HomeTrainer from "./HomeTrainer";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllFirstAssessmentsAction} from "../../../redux/actions/firstAssessmentActions";
import {cleanError, setError, toggleLoader} from "../../../redux/actions/uiActions";
import {getAllFirstAssessments, deleteFirstAssessment} from "../../../api/firstAssessmentConnector";
import { toast } from "react-toastify";
import {errorTranslator} from "../../../utils/errorTranslator";
import { refreshTokenAction, restartCredentialsAction} from "../../../redux/actions/authActions";
import {refreshToken} from "../../../api/authConnector";

const HomeTrainerContainer = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.ui.loading)
    const error = useSelector(state => state.ui.error)
    const isLogged = useSelector(state => state.auth.isLoggedIn);
    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user)
    const firstAssessmentList = useSelector(state => state.firstAssessment.allFirstAssessments);



    useEffect(() =>{
        console.log(token)
        console.log('se vuelve a correr use effect')
        getData()
    }, [token])

    const getData = () => {
        dispatch(toggleLoader(true))
        getAllFirstAssessments(token)
            .then(res => {
                dispatch(getAllFirstAssessmentsAction(res.data))
                dispatch(toggleLoader(false))

            }).catch(error => {
                dispatch(setError(error.response.data.error))
                dispatch(toggleLoader(false))
                if(error.response.status === 401){
                    toast(error.response.data.error,
                        {
                            type: 'info',
                            position: toast.POSITION.BOTTOM_RIGHT,
                        })
                }else{
                    toast(error.response.data.error,
                        {type: "error" ,
                            position: toast.POSITION.TOP_CENTER
                        })
                }

            })
    }

    const handleDeleteAssessment = async (email) => {
        //poner confirmacion
        dispatch(toggleLoader(true))
        deleteFirstAssessment(email, token).then(res => {
            if(res.error){
                dispatch(setError(res.error))
                dispatch(toggleLoader(false))

            }else{
                dispatch(toggleLoader(false))
            }
        })
        getData()
    }

    if(!isLogged){
        dispatch(toggleLoader(false))
        return <Redirect to={'/login'} />
    }

    if(loading){
        return <PageLoading/>
    }

    if(error){
        if(error === 'no credentials'){
            dispatch(restartCredentialsAction())
            return <Redirect to={'/login'} />
        }else if(error === 'expired token'){
            refreshToken(user).then((res) => {
                dispatch(refreshTokenAction(res.data.token))
                dispatch(cleanError())
                return <PageLoading/>
            })

        }else{
            return <PageLoading/>
        }
    }
    return (

        <HomeTrainer
            data={firstAssessmentList}
            onDeleteAssessment={handleDeleteAssessment}
        />
    )
}

export default HomeTrainerContainer