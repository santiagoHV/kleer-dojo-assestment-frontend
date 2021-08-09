import React, {useContext, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {URLS} from "../../../assets/urls";
import CardAssessment from "../../../components/CardAssesssment/CardAssessment";
import PageLoading from "../../../components/PageLoading/PageLoading";
import './HomeTrainer.css'
import STORE from '../../../assets/store'
import {UserContext} from "../../../context/UserContext";

const HomeTrainer = (props) => {
    const url = `${URLS.backAPIAssessment}/first-assessment`

    const {token, userData,isAuth, error} = useContext(UserContext)
    // const isAuth = true

    const prueba = localStorage.getItem('prueba')
    console.log({...prueba})

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
                    Authorization: `Token ${STORE.token}`
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

    console.log('antes de los ifs')

    if(status.loading){
        return <PageLoading />
    }else if(status.error || data.error){
        console.log('else if')
        if(!isAuth){
           // props.history.push('/login')
            return 'no esta en nada pa'
        }
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