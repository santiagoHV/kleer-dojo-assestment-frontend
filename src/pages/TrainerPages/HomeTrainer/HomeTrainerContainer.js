import React, {useContext, useEffect} from "react";
import useFetchApi from "../../../hooks/useFetchAPI";
import PageLoading from "../../../components/PageLoading/PageLoading";
import HomeTrainer from "./HomeTrainer";
import {UserContext} from "../../../context/UserContext";
import {Redirect} from "react-router-dom";
import {URLS} from "../../../assets/urls";

const HomeTrainerContainer = () => {

    const [{data, loading, error}, getData] = useFetchApi('/single-assessment/first-assessment', true)
    const {isAuth} = useContext(UserContext)

    useEffect(() =>{
        getData()
    }, [])

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

    if(!isAuth){
        return <Redirect to={'/login'} />
    }

    if(loading){
        return <PageLoading/>
    }

    if(error){
        return error
    }

    return (
        <HomeTrainer
            data={data}
            onDeleteAssessment={handleDeleteAssessment}
        />
    )
}

export default HomeTrainerContainer