"use strict";
import { photosAPI } from "/docs/js/api/photos.js";
import { sessionManager } from "/docs/js/utils/session.js";
import { galleryRenderer } from "/docs/js/renderers/gallery.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

function main() {
    let galleryContainer = document.querySelector("#general > div") ;
    let seguidosContainer = document.querySelector("#siguiendo > div") ;

    photosAPI.getAll ()
    .then(photos => {
    let gallery = galleryRenderer.asCardGallery(photos);
    galleryContainer.appendChild(gallery);
    })
    .catch(error => messageRenderer.showErrorMessage(error));
    

    photosAPI.getSiguiendo(sessionManager.getLoggedId())
    .then(photos => {
    let gallery = galleryRenderer.asCardGallery(photos);
    seguidosContainer.appendChild(gallery);
    })
    .catch();
    
    }

document.addEventListener("DOMContentLoaded", main);
    