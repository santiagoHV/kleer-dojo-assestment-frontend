import axios from "axios";

const URL_API = process.env.REACT_APP_API || process.env.API || 'http://localhost:8000';
console.log(URL_API)

const Axios = axios.create({
    baseURL: URL_API,
})

export default Axios;
