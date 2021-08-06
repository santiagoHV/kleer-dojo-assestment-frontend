import React, {useState} from "react";
import {data} from "../../assets/data";
import {URLS} from "../../assets/urls";
import TakeAssessment from "./TakeAssessment";
import PageLoading from "../../components/PageLoading/PageLoading";

const TakeAssessmentContainer = (props) => {

    const url = `${URLS.backAPIAssessment}/first-assessment-new`

    const [basicData, setBasicData] = useState({
        name: '',
        email: ''
    })

    const [competences, setCompetences] = useState([...data])

    const [petitionStatus, setPetitionStatus] = useState({
        loading: false,
        error: null
    })

    const handleChangeSlider = (value, index) => {
        const temporalCategories = competences
        temporalCategories[index].value = value
        setCompetences(temporalCategories)
        console.log(competences)
    }

    const handleChangeFormValue = (e) => {
        setBasicData({
            ...basicData,
            [e.target.name]: e.target.value
        })
    }

    const getSendObject = () => {
        const competencesNames = competences.map((competence) => competence.sendName)
        const competencesValues = competences.map((competence) => competence.value)
        let data = {...basicData}

        competencesNames.forEach((name, index) => {
            data = {
                ...data,
                [name]: competencesValues[index]
            }
        })
        return data
    }

    const sendData = async () => {

        try{
            const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(getSendObject())
            })

            setPetitionStatus({loading: false, error: null})

            await props.history.push(`/results-assessment/${basicData.email}`)

        }catch (error){
            setPetitionStatus({loading: false, error: error})
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setPetitionStatus({loading: true, error: null})
        //validate ? :
        await sendData()
    }

    if(petitionStatus.loading){
        return <PageLoading />
    }else{
        return (
            <TakeAssessment
                onChangeSlider={handleChangeSlider}
                onChangeFormValue={handleChangeFormValue}
                onSubmit={handleSubmit}
                basicData={basicData}
                categories={competences}
                // status={petitionStatus}
            />
        )
    }


}

export default TakeAssessmentContainer