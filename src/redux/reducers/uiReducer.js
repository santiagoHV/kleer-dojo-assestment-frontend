import { CLEAN_ERROR, SET_ERROR, TOGGLE_LOADER } from "../actions/types";

const initialState = {
    error: null,
    loading: false,
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            console.log('reducer', action)
            return {
                ...state,
                error: action.payload
            }
        case CLEAN_ERROR:
            return {
                ...state,
                error: null
            }
        case TOGGLE_LOADER:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return {...state }
    }
}

export default uiReducer;