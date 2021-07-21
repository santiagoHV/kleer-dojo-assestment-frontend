import React, {useState} from "react";
import {Container} from "react-bootstrap";

import FormAssesstment from "../../components/FormAssesstment/FormAssesstment";
import data from '../../assets/data'
import './TakeAssesstment.css'
import Results from "../../components/Results/Results";

const TakeAssesstment = (props) => {
    const [basicData, setBasicData] = useState({
        name: '',
        email: ''
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [categories, setCategories] = useState(data)

    //temporal
    const [isDone, setIsDone] = useState(false)

    const handleChangeFormValue = (value, index) => {
        const temporalCategories = categories
        temporalCategories[index].value = value
        setCategories(temporalCategories)
    }

    const handleChange = (e) => {
        setBasicData({
            ...basicData,
            [e.target.name]: e.target.value
        })

        console.log(basicData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsDone(true)
    }

    const goBack = () => {
        setIsDone(false)
        data.forEach((item) => {
            item.value = 1
        })
        setCategories(data)

    }


    const results = (
        <Results
            results={categories}
            name={basicData.name}
            email={basicData.email}
            goBack={goBack}
        />
    )


    return (
        <section>
            {isDone ?
                <div >
                    <div>
                        {results}
                    </div>


                </div> :
                <Container className={'form-container'}>
                    <FormAssesstment
                        categories={categories}
                        name={basicData.name}
                        email={basicData.email}
                        onChangeFormValue={handleChangeFormValue}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </Container>
            }
        </section>
    )
}

export default TakeAssesstment