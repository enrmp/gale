"use strict";
import { sessionManager } from "/docs/js/utils/session.js";
import { photoRenderer } from "./renderers/photos.js";
import { photosAPI } from "/docs/js/api/photos.js";
import { inapropiadasAPI } from "/docs/js/api/inapropiadas.js";
import { valoracionAPI } from "/docs/js/api/valoracion.js";
import { comentarioAPI } from "/docs/js/api/comentario.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";
import { usersAPI } from "/js/api/users.js";
import { parseHTML } from "/docs/js/utils/parseHTML.js";


let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
    let photoContainer = document.querySelector("#contenido");
    let botones = document.querySelector("#form-coment");
    loadUsername(sessionManager.getLoggedId());
    function loadUsername(userId) {
        usersAPI.getById(userId)
            .then(users => {
                let photo = users[0].avatarUrl;
                let ph = botones.querySelector("img.profile-ph-detail");
                ph.src = photo;
            });
    }



    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetails(photos[0]);
            photoContainer.insertBefore(photoDetails, botones);
                        let stars = photoContainer.querySelector("form#valor");
                        stars.onsubmit=handleSubmitRating;
            valoracionAPI.getByPhoto(photoId)
            .then(photos => {
                for(let i=0;i<photos.length;i++){

                    if(photos[i].userId===sessionManager.getLoggedId()){
                        let form=photoContainer.querySelector("form#valor");
                        form.style.display="none";
                        photosAPI.getMediaPhoto(photoId)
                        .then(photos => {
                            var v=photos[0].media;
                            let code=`<div><i class="float-left bi bi-star"></i><p class="w-fit ml-2 float-left" id="nrat"> ${v}</p><div>`;
                            let html=parseHTML(code);
                            form.parentNode.appendChild(html);
                        })
                        .catch();
                    }
                }
            })
            .catch();
        })
        .catch(error => messageRenderer.showErrorMessage(error));

    let registerForm = document.getElementById("form-coment");
    registerForm.onsubmit = handleSubmitPhoto;

    let borrar = document.getElementById("borrar-foto");
    borrar.onclick = handleDeletePhoto;

    let editar = document.getElementById("editar-foto");
    editar.onclick = handleEditPhoto;

}

function handleSubmitPhoto(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let bol=false;
    let texto=formData.get("texto");

    if(formData.get("texto")===""){
        messageRenderer.showErrorMessage("El comentario está vacio ☹");
        bol=true;
    }
    inapropiadasAPI.getAll()
    .then(data => {

        for(let i=0; i<data.length;i++){
            if(texto.toLowerCase().includes(data[i].palabra)){
                messageRenderer.showErrorMessage("Lo que escribe es inapropiado ☹");
                bol=true;
            }
        }

    if(!bol){
    // Add the current user ID
    formData.append("userId", sessionManager.getLoggedId());
    formData.append("photoId", photoId);
    comentarioAPI.create(formData)
        .then(data => {
            window.location.href = "javascript:location.reload()";
        })
        .catch(error => messageRenderer.showErrorMessage(error));
    }

    })
    .catch(error => messageRenderer.showErrorMessage(error));





}

function handleSubmitRating(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    formData.append("userId", sessionManager.getLoggedId());
    formData.append("photoId", photoId);
    valoracionAPI.create(formData)
        .then(data => {
            form.style.display="none";
            photosAPI.getMediaPhoto(photoId)
            .then(photos => {
                var v=photos[0].media;
                let code=`<div><i class="float-left bi bi-star"></i><p class="w-fit ml-2 float-left" id="nrat"> ${v}</p><div>`;
                let html=parseHTML(code);
                form.parentNode.appendChild(html);
            })
            .catch();
        })
        .catch(error => messageRenderer.showErrorMessage(error));
}

function handleDeletePhoto(event) {
    event.preventDefault();
    let answer = confirm("¿Quiere borrar la foto?");
    if (answer) {
        photosAPI.delete(photoId)
            .then(data => {
                window.location.href = "index.html";
            })
            .catch(error => messageRenderer.showErrorMessage(error));
    }
}

function handleEditPhoto(event) {
    event.preventDefault();
    window.location.href = "editar.html?photoId=" + photoId;
}

document.addEventListener("DOMContentLoaded", main);