import Axios from "../../api/config";
import {LOG_IN_FAIL, LOG_IN_SUCCESS, LOG_OUT_FAIL, LOG_OUT_SUCCESS, SET_ERROR, SIGN_UP} from "./types";
import {logIn, logOut} from "../../api/authConnector";

export const logInAction = user =>{
    //cuidado con el async await
    return dispatch => {
        logIn(user)
            .then(logInResponse => {
                console.log(logInResponse)
                if(logInResponse.error){
                    return {
                        type: LOG_IN_FAIL,
                        payload: 'no hay login'
                    }
                }
                localStorage.setItem("token", logInResponse.token)

                dispatch({
                    type: LOG_IN_SUCCESS,
                    payload: logInResponse
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
                        type: LOG_OUT_FAIL,
                        payload: 'no hay logout'
                    }
                }
                localStorage.removeItem("tokenRedux")
                dispatch({
                    type: LOG_OUT_SUCCESS,
                    payload: logOutResponse
                })
            })
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