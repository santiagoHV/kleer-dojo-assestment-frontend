import React, {useEffect, useState} from "react";
import {URLS} from '../../assets/urls'
import Results from "../../components/Results/Results";
import PageLoading from "../../components/PageLoading/PageLoading";

const AssessmentResult = (props) => {
    const [email, setEmail] = useState(props.match.params.email)
    const API = URLS.backAPIAssessment
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getAssessment()
    },[])

    const getAssessment = async () => {

        try {
            const response = await fetch(`${API}/first-assessment/${email}`)
            const data = await response.json()

            setData(data)
            setLoading(false)
        }catch (error){
            setError(error)
        }
    }


    if(loading){
        return (<PageLoading />)

    }else if(!loading){
        return (
            <section>
                <Results
                    results={data}
                    email={email}
                    goBack={() => {}}
                />
            </section>
        )
    }

}

export default AssessmentResult