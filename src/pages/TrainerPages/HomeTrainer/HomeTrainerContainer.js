import React, { useEffect} from "react";
import PageLoading from "../../../components/PageLoading/PageLoading";
import HomeTrainer from "./HomeTrainer";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllFirstAssessmentsAction} from "../../../redux/actions/firstAssessmentActions";
import {setError, toggleLoader} from "../../../redux/actions/uiActions";
import {getAllFirstAssessments, deleteFirstAssessment} from "../../../api/firstAssessmentConnector";

const HomeTrainerContainer = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.ui.loading)
    const error = useSelector(state => state.ui.error)
    const isLogged = useSelector(state => state.auth.isLoggedIn);
    const token = useSelector(state => state.auth.token);
    const firstAssessmentList = useSelector(state => state.firstAssessment.allFirstAssessments);



    useEffect(() =>{
        getData()
    }, [])

    const getData = () => {
        dispatch(toggleLoader(true))
        getAllFirstAssessments(token).then(res => {
            if(res.error){
                console.log(res.error)
                dispatch(setError(res.error))
            }else{
                dispatch(getAllFirstAssessmentsAction(res.data))
                dispatch(toggleLoader(false))
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
            return <Redirect to={'/login'} />
        }
        return error
    }
    console.log(firstAssessmentList)
    return (

        <HomeTrainer
            data={firstAssessmentList}
            onDeleteAssessment={handleDeleteAssessment}
        />
    )
}

export default HomeTrainerContainer