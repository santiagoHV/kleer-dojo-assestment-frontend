import { useContext, useState } from "react";
import {UserContext} from "../context/UserContext";
import {URLS} from "../assets/urls";

const BASE_URL = URLS.API

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
                    //lo ideal es usar el token del contexto pero set token no esta funcionando automatico
                    authorization: isPrivate ? `token ${localStorage.getItem('token')}` : '',
                }
            });

            if(isPrivate && response.status === 401) {
                await refreshToken()
                return getData();
            }

            const data = await response.json()

            if(data.error){
                setState({
                    data:null,
                    loading: false,
                    error: data.error
                })
            }else{
                setState({
                    data,
                    loading: false,
                    error: null
                })
            }

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