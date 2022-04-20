import {CLEAN_ERROR, SET_ERROR, TOGGLE_LOADER} from "./types";

export const setError = payload => ({
    type: SET_ERROR,
    payload
})

export const cleanError = () => ({
    type: CLEAN_ERROR,
    error: null
})

export const toggleLoader = payload => ({
    type: TOGGLE_LOADER,
    payload
})