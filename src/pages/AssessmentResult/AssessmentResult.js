import React, {useEffect, useState} from "react";
import {URLS} from '../../assets/urls'
import Results from "../../components/Results/Results";
import PageLoading from "../../components/PageLoading/PageLoading";

const AssessmentResult = (props) => {
    const [email, setEmail] = useState(props.match.params.email)
    const API = URLS
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    })
    const [data, setData] = useState({})

    useEffect(() => {
        getAssessment()
    }, [])

    const getAssessment = async () => {
        console.log(`${URLS.API}/single-assessment/first-assessment/${email}`)
        const response = await fetch(`${URLS.API}/single-assessment/first-assessment/${email}`)
        const responseData = await response.json()




        if (responseData.error) {
            setState({error: responseData.error, loading: false, data: null})
        } else {
            setState({error: null, loading: false, data: responseData})
        }
    }


    if (state.loading) {
        return <PageLoading/>
    }
    if (state.error) {
        return state.error
    }

    if (!state.loading) {
        return (
            <section>
                <Results
                    results={state.data}
                    email={email}
                    goBack={() => {
                    }}
                />
            </section>
        )
    }

}

export default AssessmentResult