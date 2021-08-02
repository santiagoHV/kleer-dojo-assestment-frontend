import React, {useEffect, useState} from "react";
import {URLS} from '../../assets/urls'
import Results from "../../components/Results/Results";

const AssessmentResult = (props) => {
    const [email, setEmail] = useState(props.match.params.email)
    const API = URLS.backAPIAssessment
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // setLoading(true)
        console.log(loading)
        // debugger
        getAssessment()
    },[])

    const getAssessment = async () => {


        try {
            const response = await fetch(`${API}/first-assessment/${email}`)
            const data = await response.json()

            setData(data)
            setLoading(false)
            console.log('dentro del bicho')
            console.log(data)
        }catch (error){
            setError(error)
            console.log(error)
        }

        console.log(loading)
    }


    if(loading){
        return 'loading'
    }else if(!loading){
        return (
            <section>
                <Results
                    results={data}
                    name={'name'}
                    email={email}
                    goBack={() => {}}
                />
            </section>
        )
    }

}

export default AssessmentResult