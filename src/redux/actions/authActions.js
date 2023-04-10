import Axios from "../../api/config";
import {
    LOG_IN_FAIL,
    LOG_IN_SUCCESS,
    LOG_OUT,
    REFRESH_TOKEN, RESTART_CREDENTIALS,
    SET_ERROR,
} from "./types";
import {logIn, logOut, refreshToken} from "../../api/authConnector";
import {toast} from "react-toastify";

export const logInAction = user =>{
    return dispatch => {
        logIn(user)
            .then(logInResponse => {
                if(logInResponse.error){
                    toast.error(logInResponse.error,{
                        position: toast.POSITION.BOTTOM_CENTER
                    })
                    return {
                        type: LOG_IN_FAIL,
                        payload: 'no hay login'
                    }
                }

                localStorage.setItem("token", logInResponse.data.token)
                localStorage.setItem("user", JSON.stringify(logInResponse.data.user))

                dispatch({
                    type: LOG_IN_SUCCESS,
                    payload: logInResponse.data
                })
            }).catch(error => {
                toast.error(error.response.data.error,{
                    position: toast.POSITION.BOTTOM_CENTER
                })
                dispatch({
                    type: SET_ERROR,
                    payload: error.response.data.error
                })

            })
    }
}

export const logOutAction = (token) => {
    return dispatch => {
        logOut(token)
            .then(logOutResponse => {
                if(logOutResponse.error){
                    return {
                        type: SET_ERROR,
                        payload: 'no hay logout'
                    }
                }
                localStorage.removeItem("token")
                localStorage.removeItem("user")

                dispatch({
                    type: LOG_OUT,
                    payload: logOutResponse
                })
            })
    }
}

export const refreshTokenAction = token => {
    localStorage.setItem("token", token)
    return {
        type: REFRESH_TOKEN,
        payload: token
    }
}

export const restartCredentialsAction = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
        type: RESTART_CREDENTIALS,
        payload: ''
    }
}

// export const signUp = user => {
//     return dispatch => {
//         Axios.post("", user)
//             .then(res => {
//
//                 localStorage.setItem("token", res.data.token);
//
//                 dispatch({
//                     type: SIGN_UP,
//                     payload: res.data
//                 });
//             })
//             .catch(err => {
//                 console.log(err);
//                 //dispatch error or show toast
//             });
//     }
// }