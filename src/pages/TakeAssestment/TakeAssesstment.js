import React, {useState} from "react";
import {Container} from "react-bootstrap";
import FormAssesstment from "../../components/FormAssesstment/FormAssesstment";
import data from '../../assets/data'
import './TakeAssesstment.css'
import Results from "../../components/Results/Results";

const TakeAssesstment = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [categories, setCategories] = useState(data)

    //temporal
    const [isDone,setIsDone] = useState(false)

    const handleChangeFormValue = (value, index) => {
        const temporalCategories = categories
        temporalCategories[index].value = value
        setCategories(temporalCategories)
    }

    const handleChange = (e,data) => {
        console.log(data.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsDone(true)
    }

    const goBack = () => {
        setIsDone(false)
        data.forEach((item) =>{
            item.value = 1
        })
        setCategories(data)

    }

    return (
        <section>
            <Container className={'form-container'}>
                {isDone ?
                    <div>
                        <Results results={categories}/>
                        <button
                            onClick={goBack}
                            className={'btn btn-primary'}
                        >
                            Volver a presentar
                        </button>
                    </div> :
                    <FormAssesstment
                        categories={categories}
                        name={name}
                        email={email}
                        onChangeFormValue={handleChangeFormValue}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                }
            </Container>
        </section>
    )
}

export default TakeAssesstment