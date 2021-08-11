import { useContext, useState } from "react";
import {UserContext} from "../context/UserContext";

const BASE_URL = 'http://localhost:8000'

function useFetchApi(endpoint='', isPrivate=false){
    const { token, refreshToken } = useContext(UserContext);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    async function getData(){
        try {
            const response = await fetch(BASE_URL + endpoint, {
                method: 'GET',
                headers: {
                    authorization: isPrivate ? `token ${token}` : '',
                }
            });

            if(isPrivate && response.status === 401) {
                await refreshToken()
                return getData();
            }

            const data = await response.json()
            setState({
                data,
                loading: false,
                error: null
            })
        } catch (error) {
            setState({
                data: null,
                loading: false,
            })
        }
    }

    return [state, getData]
}

export default useFetchApi;