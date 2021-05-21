"use strict";
import { photosAPI } from "/docs/js/api/photos.js";
import { galleryRenderer } from "/docs/js/renderers/gallery.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

function main() {
    let galleryContainer = document.querySelector("#siguiendo > div") ;

    photosAPI.getAll ()
    .then(photos => {
    let gallery = galleryRenderer.asCardGallery(photos);
    galleryContainer.appendChild(gallery);
    })
    .catch(error => messageRenderer.showErrorMessage(error));
    
    }

document.addEventListener("DOMContentLoaded", main);
    