import React, {useState} from "react";
import {data} from "../../assets/data";
import {URLS} from "../../assets/urls";
import TakeAssessment from "./TakeAssessment";
import PageLoading from "../../components/PageLoading/PageLoading";
import validators from "../../models/validators";
import {useDispatch, useSelector} from "react-redux";
import {sendFirstAssessmentAction} from "../../redux/actions/firstAssessmentActions";
import dreyfusQuestions from "../../assets/static_data/questions.json"


const TakeAssessmentContainer = (props) => {
    //redux implementation

    const dispatch = useDispatch()
    const error = useSelector(state => state.ui.error)
    //////////// independent
    const [actualQuestion, setActualQuestion] = useState(0)
    const [basicData, setBasicData] = useState({
        name: '',
        email: ''
    })
    const [competences, setCompetences] = useState([...data])
    const [isValid, setIsValid] = useState({
        name: false,
        email: false
    })
    /////

    const url = `${URLS.API}/single-assessment/first-assessment-new`


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
        if(e.target.type === 'text'){
            setIsValid({...isValid, name: validators.validateText(e.target.value)})
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

    const sendData = async (e) => {
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

        //dispatch(sendFirstAssessmentAction(getSendObject()))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(actualQuestion < dreyfusQuestions.length - 1){
            setActualQuestion(actualQuestion + 1)
        }else{
            if(isValid.name && isValid.email){
                setPetitionStatus({loading: true, error: null})
                await sendData()
            }
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
                actualQuestion={actualQuestion}
                isValid={isValid}
            />
        )
    }


}

export default TakeAssessmentContainer