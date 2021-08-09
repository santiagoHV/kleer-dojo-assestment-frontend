import React, {useContext, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {URLS} from "../../../assets/urls";
import CardAssessment from "../../../components/CardAssesssment/CardAssessment";
import PageLoading from "../../../components/PageLoading/PageLoading";
import './HomeTrainer.css'
import STORE from '../../../assets/store'
import {UserContext} from "../../../context/UserContext";
import {Redirect} from "react-router-dom";

const HomeTrainer = (props) => {
    const url = `${URLS.backAPIAssessment}/first-assessment`

    const { userData, error, isAuth, token} = useContext(UserContext)
    // const isAuth = true

    // const token = localStorage.getItem('token')

    const [data, setData] = useState([])
    const [status, setStatus] = useState({
        loading: true,
        error: null
    })

    useEffect(() => {
        fetchData()
    },[])

    console.log(userData)

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

    console.log(token)

    if(status.loading){
        return <PageLoading />
    }else if(status.error || data.error){
        console.log('else if')
        if(!isAuth){
           return <Redirect to={'/login'} />
        }
        // props.history.push('/login')
        return `${status.error || data.error}`
    }else {
        console.log('else')
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