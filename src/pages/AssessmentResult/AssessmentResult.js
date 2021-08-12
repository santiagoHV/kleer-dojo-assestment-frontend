import React, {useEffect, useState} from "react";
import {URLS} from '../../assets/urls'
import Results from "../../components/Results/Results";
import PageLoading from "../../components/PageLoading/PageLoading";

const AssessmentResult = (props) => {
    const [email, setEmail] = useState(props.match.params.email)
    const API = URLS.backAPIAssessment
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

        const response = await fetch(`${API}/first-assessment/${email}`)
        const responseData = await response.json()

        console.log(responseData)


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
        console.log(data)
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