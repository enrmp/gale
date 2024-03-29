"use strict";

import { messageRenderer } from "/docs/js/renderers/messages.js";
import { userValidator } from "/docs/js/validators/users.js";

import { sessionManager } from "/docs/js/utils/session.js";
import { authAPI } from "/docs/js/api/auth.js";

function main() {

    let registerForm = document.getElementById("register");

    registerForm.onsubmit = handleSubmitRegister;

}

function handleSubmitRegister(event) {
    //alert("The form has been sent.")

    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    let errors = userValidator.validateRegister(formData);


    if (errors.length > 0) {
        let errorDiv = document.getElementById("errors");
        errorDiv.innerHTML = "";
        for (let error of errors)
            messageRenderer.showErrorMessage(error);

    }
    else sendRegister(formData);

}

function sendRegister(formData) {
    authAPI.register(formData)
        .then(loginData => loginWithTokenAndUser(loginData))
        .catch(error => messageRenderer.showErrorMessage(error));
}

function loginWithTokenAndUser(loginData) {
    console.log(loginData);
    let sessionToken = loginData.sessionToken;
    let user = loginData.user;
    sessionManager.login(sessionToken, user);
    window.location.href="index.html";
}

document.addEventListener("DOMContentLoaded", main);