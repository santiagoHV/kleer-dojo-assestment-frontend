import Axios from "./config";

export const getFirstAssessment = async (email) => {
    const response = await Axios.get(`/single-assessment/first-assessment/${email}`);
    const data = await response.data;
    return data
};