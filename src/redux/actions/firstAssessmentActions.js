import {getAllFirstAssessments} from "../../api/firstAssessmentConnector";
import {toggleLoader} from "./uiActions";

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

export const getAllFirstAssessmentsAction = (payload) => {
  return {
    type: 'GET_ALL_FIRST_ASSESSMENTS',
    payload: payload
  }
}