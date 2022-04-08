import axios from "axios";

const URL_API = process.env.API || 'http://localhost:8000';

const Axios = axios.create({
    baseURL: URL_API,
})

export default Axios;