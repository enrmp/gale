"use strict";
import { photosAPI } from "/docs/js/api/photos.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";
import { inapropiadasAPI } from "/docs/js/api/inapropiadas.js";
import { comentarioAPI } from "/docs/js/api/comentario.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
let currentPhoto = null;


function main() {
    if (photoId !== null) {
        loadCurrentPhoto();
    }
    let registerForm = document.getElementById("edit-form");
    registerForm.onsubmit = handleSubmitPhoto;

    let urlInput = document.getElementById("input-url");
    urlInput.onchange=changePhoto;
}

function loadCurrentPhoto() {
    let urlInput = document.getElementById("input-url");
    let titleInput = document.getElementById("input-title");
    let descriptionInput = document.getElementById("input-description");
    let visibilityInput = document.getElementById("input-visibility1");
    let privada=document.querySelector("#input-visibility2");
    let img=document.getElementById("img");
    photosAPI.getById(photoId)
        .then(photos => {
            currentPhoto = photos[0];
            img.src=currentPhoto.url;
            urlInput.value = currentPhoto.url;
            titleInput.value = currentPhoto.title;
            descriptionInput.value = currentPhoto.description;
            visibilityInput.checked = currentPhoto.visibility;
            if(currentPhoto.visibility==="Private"){
                privada.checked=true;
            }

        })
        .catch(error => messageRenderer.showErrorMessage(error));
}

function handleSubmitPhoto(event) {
    event.preventDefault();
    let form = event.target;
    let bol=false;
    let formData = new FormData(form);
    if (currentPhoto === null) { // Creating a new photo
        // Add the current user 's ID
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
    } else {
        // Updating an existing photo
        formData.append("userId", currentPhoto.userId);
        formData.append("date", currentPhoto.date);

        comentarioAPI.getByPhoto(photoId)
        .then(comentario => {
            let ncom = comentario.length;
            if(ncom>0 && formData.get("visibility")==="Private"){
                bol=true;
                messageRenderer.showErrorMessage("No puedes hacer privada una foto con comentarios ☹");
            }
        });


        inapropiadasAPI.getAll()
        .then(data => {
            for(let i=0; i<data.length;i++){
                if(formData.get("title").toLowerCase().includes(data[i].palabra) || formData.get("description").toLowerCase().includes(data[i].palabra)){
                    messageRenderer.showErrorMessage("Lo que escribe es inapropiado ☹");
                    bol=true;
                }
            }
        if(!bol){
            photosAPI.update(photoId, formData)
            .then(data => window.location.href = `editar-cats.html?photoId=${photoId}`)
            .catch(error => messageRenderer.showErrorAsAlert(error));
    }
    
            
        })
        .catch(error => messageRenderer.showErrorMessage(error));

    }
}

function changePhoto(event) {
    event.preventDefault();
    let urlInput = document.getElementById("input-url");
    let img=document.getElementById("img");
    img.src=urlInput.value;
}

document.addEventListener("DOMContentLoaded", main);