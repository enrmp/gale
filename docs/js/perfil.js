"use strict";
import { sessionManager } from "/docs/js/utils/session.js";
import { photosAPI } from "/docs/js/api/photos.js";
import { valoracionAPI } from "/docs/js/api/valoracion.js";
import { usersAPI } from "/docs/js/api/users.js";
import { profileRenderer } from "/docs/js/renderers/profile.js";
import { galleryRenderer } from "/docs/js/renderers/gallery.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";
import { parseHTML } from "/docs/js/utils/parseHTML.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

function main() {
    new CircleType(document.getElementById("git")).radius(0).forceWidth(true).forceHeight(true);;

    let infoContainer = document.querySelector("#info");
    usersAPI.getById(userId)
        .then(users => {
            let profile = profileRenderer.asProfileInfo(users[0]);
            infoContainer.appendChild(profile);
        })
        .catch(error => messageRenderer.showErrorMessage(error));

    

     photosAPI.getCountByUser(userId)
         .then(count => {
            let num=count.length;
            let img = document.getElementById("countimg");
            img.appendChild(parseHTML(`<strong>${num}</strong>`));
         })
         .catch(error =>{
            let img = document.getElementById("countimg");
            img.appendChild(parseHTML(`<strong>0</strong>`));
        });

    let galleryContainer = document.querySelector("#publicas");
    let tampub = document.querySelector("#perfil > li:nth-child(1) > a");
    photosAPI.getByUser(userId)
        .then(photos => {
            if (photos.length > 0) {
                tampub.textContent = `Públicas (${photos.length})`;
            }
            let gallery = galleryRenderer.asCardProfileGallery(photos);
            galleryContainer.appendChild(gallery);
        })
        .catch();


if(userId==sessionManager.getLoggedId()){
    let galleryContainerPriv = document.querySelector("#privadas");
    let tampriv = document.querySelector("#perfil > li:nth-child(2) > a");
    document.querySelector("#follow").style.display="none";
    document.querySelector("#unfollow").style.display="none";
    photosAPI.getPrivatesByUser(userId)
        .then(photos => {
            if (photos.length > 0) {
                tampriv.textContent = `Privadas (${photos.length})`;
            }
            let gallery = galleryRenderer.asCardProfileGallery(photos);
            galleryContainerPriv.appendChild(gallery);
        })
        .catch();

    }
if(userId!=sessionManager.getLoggedId()){
    let galleryContainerPriv = document.querySelector("#perfil > li:nth-child(2) > a");
        galleryContainerPriv.style.display="none";
        document.querySelector("#navbar-logout").style.display="none";
        document.querySelector("#unfollow").style.display="none";
    }

        let galleryContainerVal = document.querySelector("#valorado");
        let tamval = document.querySelector("#perfil > li:nth-child(3) > a");
    
        valoracionAPI.getByUser(userId)
            .then(val => {
                if (val.length > 0) {
                    tamval.textContent = `Valorado (${val.length})`;
                }
                let gallery = galleryRenderer.asCardValorationGallery(val);
                galleryContainerVal.appendChild(gallery);
            })
            .catch();

    addLogoutHandler();
}

function addLogoutHandler() {
    let logoutButton = document.getElementById("navbar-logout");
    logoutButton.addEventListener("click", function () {
        sessionManager.logout();
        window.location.href = "index.html";
    });


}


document.addEventListener("DOMContentLoaded", main);
