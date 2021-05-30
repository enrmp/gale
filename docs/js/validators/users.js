"use strict";

const userValidator= {
    validateRegister : function (formData){
        let firstName= formData.get("firstName");
        let username= formData.get("username");
        let lastName= formData.get("lastName");
        let password= formData.get("password");

        let errors= [];

        if(password.length === "")
            errors.push("Debe introducir una contraseña");

        if(username.length <2)
            errors.push("El nombre de usuario debe tener al menos 2 carácteres");

        if(firstName.length <2)
            errors.push("El nombre debe tener al menos 2 carácteres");
        

        if(lastName.length <2)
            errors.push("El apellido debe tener al menos 2 carácteres");

        return errors;
        },
        validateLogin : function (formData){
            let username= formData.get("username");
            let password= formData.get("password");
    
            let errors= [];
    
            if(password.length === "")
                errors.push("Debe introducir una contraseña");
    
            if(username.length <2)
                errors.push("El nombre de usuario debe tener al menos 2 carácteres");

    
            return errors;
            }
};

export {userValidator};
