import {getAllFirstAssessments, sendFirstAssessment} from "../../api/firstAssessmentConnector";
import {toggleLoader} from "./uiActions";
import {
  SEND_FIRST_ASSESSMENT,
  SET_ACTUAL_FIRST_ASSESSMENT,
  GET_FIRST_ASSESSMENT,
  GET_ALL_FIRST_ASSESSMENTS, SET_ERROR, TOGGLE_LOADER
} from "./types";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

export const setActualFirstAssessmentAction = payload => {
  return {
    type: SET_ACTUAL_FIRST_ASSESSMENT,
    payload
  }
}

export const getFirstAssessmentAction = payload => {
  return {
    type: GET_FIRST_ASSESSMENT,
    payload
  }
}

export const getAllFirstAssessmentsAction = (payload) => {
  return {
    type: GET_ALL_FIRST_ASSESSMENTS,
    payload: payload
  }
}

export const sendFirstAssessmentAction = payload => {
  return dispatch => {
    sendFirstAssessment(payload)
      .then(response => {
        console.log(response)
        if(typeof(response.data.email) === 'string'){
          dispatch({
            type: 'REGISTER_SUCCESS'
          })
          console.log('exito enviado a' + response.data.email)
        }else{
          toast.error(response.data.email[0], {
            position: toast.POSITION.BOTTOM_CENTER,
            duration: 4000,
          })
          dispatch({
            type: TOGGLE_LOADER
          })
          dispatch({
            type: 'RESTART_ACTUAL_QUESTION'
          })
        }

      }).catch(error => {
        console.log(error)
        toast.error(error.response.data.error,{
          position: toast.POSITION.BOTTOM_CENTER
        })
        dispatch({
          type: SET_ERROR,
          payload: error.response.data.error
        })
        dispatch({
          type: 'RESTART_ACTUAL_QUESTION'
        })
      })

  }
}