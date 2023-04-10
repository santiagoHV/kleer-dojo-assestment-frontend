import React, {useState} from "react";
import {data} from "../../assets/data";
import {URLS} from "../../assets/urls";
import TakeAssessment from "./TakeAssessment";
import PageLoading from "../../components/PageLoading/PageLoading";
import validators from "../../models/validators";
import {useDispatch, useSelector} from "react-redux";
import {sendFirstAssessmentAction} from "../../redux/actions/firstAssessmentActions";
import dreyfusQuestions from "../../assets/static_data/questions.json"
import {incrementActualQuestion, setEmail, setName, setSkill} from "../../redux/actions/takeAssessmentActions";
import {toast} from "react-toastify";


const TakeAssessmentContainer = (props) => {
    //redux implementation

    const dispatch = useDispatch()
    const error = useSelector(state => state.ui.error)
    const loading = useSelector(state => state.ui.loading)

    const skills = useSelector(state => state.takeAssessment.skills)
    const name = useSelector(state => state.takeAssessment.name)
    const email = useSelector(state => state.takeAssessment.email)
    const actualQuestion = useSelector(state => state.takeAssessment.actualQuestion)

    //////////// independent
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



    const handleChangeSlider = (value, name, index) => {
        const temporalCategories = competences
        temporalCategories[index].value = value
        setCompetences(temporalCategories)

        dispatch(setSkill({name: name, value: value}))
    }

    const handleChangeFormValue = (e) => {
        setBasicData({
            ...basicData,
            [e.target.name]: e.target.value
        })
        if(e.target.type === 'text'){
            setIsValid({...isValid, name: validators.validateText(e.target.value)})
            dispatch(setName(e.target.value))
        }else if(e.target.type === 'email'){
            setIsValid({...isValid, email: validators.validateEmail(e.target.value)})
            dispatch(setEmail(e.target.value))
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
        // try{
        //     const response = await fetch(url, {
        //         method: 'POST',
        //         headers:{
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(getSendObject())
        //     })
        //
        //     setPetitionStatus({loading: false, error: null})
        //
        //     await props.history.push(`/results-assessment/${basicData.email}`)
        //
        // }catch (error){
        //     setPetitionStatus({loading: false, error: error})
        // }

        dispatch(sendFirstAssessmentAction({
            ...skills,
            name: name,
            email: email
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(actualQuestion)
        if(actualQuestion < (dreyfusQuestions.length - 1) && actualQuestion >= 0){
            console.log('entra por aca')
            dispatch(incrementActualQuestion())
            console.log(actualQuestion)

        }else if(actualQuestion < 0){
            if(isValid.name && isValid.email){
                dispatch(incrementActualQuestion())
            }else{
                toast('Complete los campos correctamente por favor',
                    {
                        type: 'info',
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
            }
        }else if(actualQuestion >= (dreyfusQuestions.length - 1)){
            setPetitionStatus({loading: true, error: null})
            sendData()
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