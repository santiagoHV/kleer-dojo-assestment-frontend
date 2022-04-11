import Axios from "./config";

export const getFirstAssessment = async (email) => {
    const response = await Axios.get(`/single-assessment/first-assessment/${email}`);
    return response
};

export const getAllFirstAssessments = async (token) => {
    const response = await Axios.get(
        `/single-assessment/first-assessment`,
        {
            headers: {
                Authorization: `token ${token}`
            }
        }
        );
    return response
};