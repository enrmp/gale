"use strict";
import { categoriaAPI } from "/docs/js/api/categoria.js";
import { categoriaRenderer } from "/docs/js/renderers/categoria.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

function main() {
    let categoriaContainer = document.querySelector("#slider-cat") ;

    categoriaAPI.getAll ()
    .then(categoria => {
        for (let cat of categoria){
    let categoria = categoriaRenderer.asPill(cat);
    categoriaContainer.appendChild(categoria);
        }
    })
    .catch(error => messageRenderer.showErrorMessage(error));
    
    let registerForm = document.getElementById("form-categoria");
    registerForm.onsubmit = handleSubmitcategoria;
}

function handleSubmitcategoria(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    // Add the current user ID
    categoriaAPI.create(formData)
        .then(data => window.location.href = "explora.html")
        .catch(error => messageRenderer.showErrorMessage(error));
}

document.addEventListener("DOMContentLoaded", main);
    