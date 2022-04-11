import {LOG_IN_FAIL, LOG_IN_SUCCESS} from "../actions/types";

const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
    isLoggedIn: user ? true : false,
    user: null,
    token: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case LOG_IN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                token: null
            }
        default:
            return {...state}
    }
}

export default authReducer