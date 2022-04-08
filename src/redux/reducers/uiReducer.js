import {CLEAN_ERROR, SET_ERROR, TOGGLE_LOADER} from "../actions/types";

const initialState = {
    error: null,
    loading: false,
}

const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CLEAN_ERROR:
            return {
                ...state,
                error: null
            }
        case TOGGLE_LOADER:
            return {
                ...state,
                loading: !state.loading
            }
        default:
            return {...state}
    }
}

export default uiReducer;