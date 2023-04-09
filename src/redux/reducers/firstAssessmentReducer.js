import {GET_ALL_FIRST_ASSESSMENTS, SEND_FIRST_ASSESSMENT, SET_ACTUAL_FIRST_ASSESSMENT} from "../actions/types";

const initialState = {
    actualFirstAssessment: {},
    allFirstAssessments: []
}

const firstAssessmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTUAL_FIRST_ASSESSMENT:
            return {
                ...state,
                assessment: action.payload
            }
        case GET_ALL_FIRST_ASSESSMENTS:
            return {
                ...state,
                allFirstAssessments: action.payload
            }
        case SEND_FIRST_ASSESSMENT:
            return {
                ...state,
                response: action.payload
            }
        default:
            return state
    }
}

export default firstAssessmentReducer;