import React, {useState} from "react";
import {Container} from "react-bootstrap";
import FormAssesstment from "../../components/FormAssesstment/FormAssesstment";
import data from '../../assets/data'
import './TakeAssesstment.css'

const TakeAssesstment = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [categories, setCategories] = useState(data.map((item) => {
        return {[item.name]: item.value}
    }))

    const onChangeFormValue = (e,data) => {

    }

    console.log(categories)

    return (
        <section>
            <Container className={'form-container'}>
                <FormAssesstment categories={categories} name={name} email={email} />
            </Container>
        </section>
    )
}

export default TakeAssesstment