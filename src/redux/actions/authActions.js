import Axios from "../../api/config";

export const signUp = user => {
    return dispatch => {
        Axios
            .post("", user)
            .then(res => {

                localStorage.setItem("token", res.data.token);

                dispatch({
                    type: "SIGNUP_SUCCESS",
                    payload: res.data
                });
            })
            .catch(err => {
                console.log(err);
                //dispatch error or show toast
            });
    }
}