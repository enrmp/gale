"use strict";
import { photosAPI } from "/docs/js/api/photos.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

function main() {
    let registerForm = document.getElementById("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;
}

function handleSubmitPhoto(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    // Add the current user ID
    formData.append("userId", 1);
    photosAPI.create(formData)
        .then(data => window.location.href = "index.html")
        .catch(error => messageRenderer.showErrorMessage(error));
}

document.addEventListener("DOMContentLoaded", main);