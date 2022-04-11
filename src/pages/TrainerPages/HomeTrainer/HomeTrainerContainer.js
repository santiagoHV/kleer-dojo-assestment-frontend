import React, {useContext, useEffect} from "react";
import useFetchApi from "../../../hooks/useFetchAPI";
import PageLoading from "../../../components/PageLoading/PageLoading";
import HomeTrainer from "./HomeTrainer";
import {UserContext} from "../../../context/UserContext";
import {Redirect} from "react-router-dom";
import {URLS} from "../../../assets/urls";
import {useDispatch, useSelector} from "react-redux";
import {getAllFirstAssessmentsAction} from "../../../redux/actions/firstAssessmentActions";

const HomeTrainerContainer = () => {
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.auth.isLoggedIn);
    const firstAssessmentList = useSelector(state => state.assessment.allFirstAssessments);

    const [{data, loading, error}, getData] = useFetchApi('/single-assessment/first-assessment', true)
    const {isAuth} = useContext(UserContext)

    useEffect(() =>{
        dispatch(getAllFirstAssessmentsAction())
        getData()
    }, [])
    console.log(firstAssessmentList)
    const handleDeleteAssessment = async (email) => {
        const response = await fetch(`${URLS.API}/single-assessment/first-assessment?email=${email}`,{
            method: 'DELETE',
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
        const fetchData = await response.json()
        //poner confirmacion
        getData()
    }

    if(!isLogged){
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
    console.log(data)
    return (

        <HomeTrainer
            data={data}
            onDeleteAssessment={handleDeleteAssessment}
        />
    )
}

export default HomeTrainerContainer