import React, {useState} from "react";
import {data} from "../../assets/data";
import TakeAssessment from "./TakeAssessment";

const TakeAssessmentContainer = (props) => {

    const [basicData, setBasicData] = useState({
        name: '',
        email: ''
    })

    const [categories, setCategories] = useState(data)

    const handleChangeFormValue = (value, index) => {
        const temporalCategories = categories
        temporalCategories[index].value = value
        setCategories(temporalCategories)
    }

    const handleChangeSlider = (e) => {
        setBasicData({
            ...basicData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //validate ? :
        //send
        props.history.push('/results-assessment/santiago@gmail')

    }

    const handleGoBack = () => {
        data.forEach((item) => {
            item.value = 1
        })
        setCategories(data)
    }

    return (
        <TakeAssessment
            onChangeSlider={handleChangeSlider}
            onChangeFormValue={handleChangeFormValue}
            onSubmit={handleSubmit}
            onGoBack={handleGoBack}
            basicData={basicData}
            categories={categories}
        />
    )
}

export default TakeAssessmentContainer