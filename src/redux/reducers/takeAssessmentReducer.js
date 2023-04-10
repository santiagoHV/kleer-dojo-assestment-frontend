import {SEND_FIRST_ASSESSMENT} from "../actions/types";
import {data} from "../../assets/data";


const initialState = {
    actualQuestion: -1,
    name: '',
    email: '',
    skills: data.reduce((ac,e) => {
        return {
            ...ac,
            [e.sendName]: e.value
        }
    }, {})
}

const takeAssessmentReducer = (state = initialState, action) => {
    switch (action.type){
        case 'UPDATE_SKILL':
            return {
                ...state,
                skills: {
                    ...state.skills,
                    [action.payload.name]: action.payload.value
                }
            }
        case 'UPDATE_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'UPDATE_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'INCREMENT_ACTUAL_QUESTION':
            return {
                ...state,
                actualQuestion: state.actualQuestion + 1
            }
        default:
            return {...state}

    }
}

export default takeAssessmentReducer