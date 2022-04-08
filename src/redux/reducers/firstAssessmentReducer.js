import {SET_ACTUAL_FIRST_ASSESSMENT} from "../actions/types";

const initialState = {
    assessment: {}
}

const firstAssessmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTUAL_FIRST_ASSESSMENT:
            return {
                ...state,
                assessment: action.payload
            }
        default:
            return state
    }
}

export default firstAssessmentReducer;