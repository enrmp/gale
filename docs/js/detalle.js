"use strict";
import { photoRenderer } from "./renderers/photos.js";
import { photosAPI } from "/docs/js/api/photos.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";
$.getScript("/js/libs/jquery.adaptive-backgrounds.js");


let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
    let photoContainer = document.querySelector("#contenido");


    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetails(photos[0]);
            photoContainer.appendChild(photoDetails);
        })
        .catch(error => messageRenderer.showErrorMessage(error));

        $(document).ready(function(){
            jQuery.adaptiveBackground.run()
        });

}

document.addEventListener("DOMContentLoaded", main);