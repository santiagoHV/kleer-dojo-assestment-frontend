import React from "react";

const AuthContext = React.createContext({
    token: null,
    user: null,
    message: null
})

export default AuthContext