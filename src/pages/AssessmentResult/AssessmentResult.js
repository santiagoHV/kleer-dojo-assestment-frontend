import React, {useEffect, useState} from "react";
import Results from "../../components/Results/Results";
import PageLoading from "../../components/PageLoading/PageLoading";
import {useDispatch, useSelector} from "react-redux";
import {toggleLoader} from "../../redux/actions/uiActions";
import {getFirstAssessment} from "../../api/firstAssessmentConnector";
import {setActualFirstAssessmentAction} from "../../redux/actions/firstAssessmentActions";

const AssessmentResult = (props) => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.ui.loading)
    const data = useSelector(state => state.firstAssessment.assessment)
    const token = useSelector(state => state.auth.token);

    const [email, setEmail] = useState(props.match.params.email)


    useEffect(() => {
        dispatch(toggleLoader(token))
        getFirstAssessment(email)
            .then(res => {
                dispatch(setActualFirstAssessmentAction(res.data))
                dispatch(toggleLoader())
            })

        // getAssessment()
    }, [])


    if (loading) {
        return <PageLoading/>
    }

    // TODO: manejo de errores
    if (false) {
        return 'state.error'
    }

    if (!loading) {
        console.log('data',data)
        return (
            <section>
                <Results
                    results={data}
                    email={email}
                    goBack={() => {}}/>
            </section>
        )
    }

}

export default AssessmentResult