import React, {useState} from "react";
import {data} from "../../assets/data";
import {URLS} from "../../assets/urls";
import TakeAssessment from "./TakeAssessment";
import PageLoading from "../../components/PageLoading/PageLoading";
import validators from "../../models/validators";

const TakeAssessmentContainer = (props) => {

    const url = `${URLS.API}/single-assessment/first-assessment-new`

    const [basicData, setBasicData] = useState({
        name: '',
        email: ''
    })

    const [competences, setCompetences] = useState([...data])

    const [petitionStatus, setPetitionStatus] = useState({
        loading: false,
        error: null
    })


    const [isValid, setIsValid] = useState({
        name: false,
        email: false
    })

    const handleChangeSlider = (value, index) => {
        const temporalCategories = competences
        temporalCategories[index].value = value
        setCompetences(temporalCategories)
    }

    const handleChangeFormValue = (e) => {
        setBasicData({
            ...basicData,
            [e.target.name]: e.target.value
        })
        if(e.target.type === 'text'){
            setIsValid({...isValid, name: validators.validateText(e.target.value)})
            console.log(`validando texto ${e.target.value} ${validators.validateText(e.target.value)}`)
        }else if(e.target.type === 'email'){
            setIsValid({...isValid, email: validators.validateEmail(e.target.value)})
        }
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
        if(isValid.name && isValid.email){
            setPetitionStatus({loading: true, error: null})
            await sendData()
        }
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
                isValid={isValid}
            />
        )
    }


}

export default TakeAssessmentContainer