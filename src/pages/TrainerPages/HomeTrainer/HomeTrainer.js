import React, {useContext, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {URLS} from "../../../assets/urls";
import CardAssessment from "../../../components/CardAssesssment/CardAssessment";
import PageLoading from "../../../components/PageLoading/PageLoading";
import './HomeTrainer.css'
import STORE from '../../../assets/store'
import {UserContext} from "../../../context/UserContext";
import {Redirect} from "react-router-dom";
import useFetchApi from "../../../hooks/useFetchAPI";

const HomeTrainer = (props) => {

    const [{data, loading, error}, getData] = useFetchApi('/single-assessment/first-assessment', true)

    const url = `${URLS.backAPIAssessment}/first-assessment`


    const { userData, error, isAuth, token, refreshToken, loadingUserProcess} = useContext(UserContext)

    const [data, setData] = useState([])
    const [status, setStatus] = useState({
        loading: true,
        error: null
    })

    useEffect(() => {
        fetchData()
    },[])


    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            const responseData = await response.json()

            setData(responseData)
            setStatus({loading: false, error: null})

        }catch (error){
            setStatus({loading: false, error: error})
        }

        console.log('token ' + token)
    }

    const renderCards = () => {
        return (
            <Row>
                {data.map((assessment) => {
                    return (
                        <Col
                            sm={4}
                            className={'assessment-card'}
                            key={assessment.email}
                        >
                            <CardAssessment
                                name={assessment.name}
                                date={assessment.date}
                                email={assessment.email}
                            />
                        </Col>
                    )
                })}
            </Row>
        )
    }

    if(status.loading ){
        return <PageLoading />
    }else if(status.error || data.error){
        if(!isAuth){
           return <Redirect to={'/login'} />
        }else if(data.expired){
            refreshToken()
            fetchData()
        }

        return `${status.error || data.error}`
    }else {
        return (
            <section>
                <Container className={'assessment-group'}>
                    {renderCards()}
                </Container>
            </section>
        )
    }

}

export default HomeTrainer