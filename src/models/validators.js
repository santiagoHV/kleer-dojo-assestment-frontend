export default {
    validateEmail: (email) => {
        if(email === '' || email === null || email === undefined){
            return false
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
    },
    validateText: (text) => {
        if(text === '' || text === null || text === undefined){
            return false
        }
        //validar tamaño en texto
        return true
    }
}