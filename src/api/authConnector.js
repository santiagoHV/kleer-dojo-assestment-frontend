import Axios from "./config";

const AUTH_URL = ""//"/auth";

export const singUp = (user) => {
    return Axios.post(`${AUTH_URL}/signup`, user)
}

export const logIn = async (user) => {
    const response = await Axios.post(`${AUTH_URL}/login`, user)
    return response
}

export const logOut = async (token) => {
    const response = await Axios.get(`${AUTH_URL}/logout?token=${token}`)
    return response
}

export const refreshToken = async (user) => {
    const response = await Axios.get(`${AUTH_URL}/refresh-token?username=${user.username}`)
    return response
}