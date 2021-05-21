"use strict";
import { inapropiadasAPI } from "/docs/js/api/inapropiadas.js";
import { inapropiadasRenderer } from "/docs/js/renderers/inapropiadas.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

function main() {
    let inapropiadasContainer = document.querySelector("#inapropiadas") ;

    inapropiadasAPI.getAll ()
    .then(inapropiadas => {
        for (let cat of inapropiadas){
    let inapropiadas = inapropiadasRenderer.asPill(cat);
    inapropiadasContainer.appendChild(inapropiadas);
        }
    })
    .catch(error => messageRenderer.showErrorMessage(error));

    let registerForm = document.getElementById("form-inapropiadas");
    registerForm.onsubmit = handleSubmitInapropiadas;
}

function handleSubmitInapropiadas(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    // Add the current user ID
    inapropiadasAPI.create(formData)
        .then(data => window.location.href = "inapropiadas.html")
        .catch(error => messageRenderer.showErrorMessage(error));
}

document.addEventListener("DOMContentLoaded", main);