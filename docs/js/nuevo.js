"use strict";
import { photosAPI } from "/docs/js/api/photos.js";
import { inapropiadasAPI } from "/docs/js/api/inapropiadas.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function main() {
    let registerForm = document.getElementById("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;

    let urlInput = document.getElementById("input-url");
    urlInput.onchange=changePhoto;
}

function changePhoto(event) {
    event.preventDefault();
    let urlInput = document.getElementById("input-url");
    let img=document.getElementById("img");
    img.src=urlInput.value;
}

function handleSubmitPhoto(event) {
    event.preventDefault();
    let bol=false;
    let form = event.target;
    let formData = new FormData(form);
    // Add the current user ID
    formData.append("userId", sessionManager.getLoggedId());
    inapropiadasAPI.getAll()
    .then(data => {
        for(let i=0; i<data.length;i++){
            if(formData.get("title").toLowerCase().includes(data[i].palabra) || formData.get("description").toLowerCase().includes(data[i].palabra)){
                messageRenderer.showErrorMessage("Lo que escribe es inapropiado ☹");
                bol=true;
            }
        }
    if(!bol){
        photosAPI.create(formData)
        .then(data => {
            window.location.href = `asignar-cat.html?photoId=${data.lastId}`;
        })
        .catch(error => messageRenderer.showErrorMessage(error));
        }

        
    })
    .catch(error => messageRenderer.showErrorMessage(error));

    

}

document.addEventListener("DOMContentLoaded", main);