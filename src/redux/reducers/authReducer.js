import {LOG_IN_FAIL, LOG_IN_SUCCESS, LOG_OUT, REFRESH_TOKEN} from "../actions/types";

const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

const initialState = {
    isLoggedIn: user ? true : false,
    user: user ? (user) : null,
    token: token ? token : null
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
            console.log('action.payload')
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                token: null
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                token: null
            }
        case REFRESH_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return {...state}
    }
}

export default authReducer