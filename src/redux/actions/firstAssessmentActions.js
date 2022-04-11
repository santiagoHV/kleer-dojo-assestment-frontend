import {getAllFirstAssessments} from "../../api/firstAssessmentConnector";
import {useSelector} from "react-redux";

const token = useSelector(state => state.auth.token);

export const setActualFirstAssessmentAction = payload => {
  return {
    type: 'SET_ACTUAL_FIRST_ASSESSMENT',
    payload
  }
}

export const getFirstAssessmentAction = payload => {
  return {
    type: 'GET_FIRST_ASSESSMENT',
    payload
  }
}

export const getAllFirstAssessmentsAction = () => {
  return dispatch => {
    getAllFirstAssessments(token)
      .then(res => {
        if(res.error){
          dispatch({
            type: 'SET_ERROR',
            payload: res.error
          })
        }
        dispatch({
          type: 'GET_ALL_FIRST_ASSESSMENTS',
          payload: res.data
        })
      })
  }
}