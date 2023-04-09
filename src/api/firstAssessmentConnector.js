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

export const deleteFirstAssessment = async (email, token) => {
    const response = await Axios.delete(
        `/single-assessment/first-assessment?email=${email}`,
        {
                headers: {
                    Authorization: `token ${token}`
                }
            }
        );
    return response
};

export const sendFirstAssessment = async (data) => {
    const response = await Axios.post(
        '/single-assessment/first-assessment-new',
        data,
        {
            headers:{
                "Content-Type": 'application/json'
            },
        }
    )
    return response
}