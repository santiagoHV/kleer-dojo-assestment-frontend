import Axios from "./config";

export const singUp = (user) => {
    return Axios.post("/auth/signup", user)
}