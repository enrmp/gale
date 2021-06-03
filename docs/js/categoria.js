"use strict";
import { photoscategoriaAPI } from "/docs/js/api/photoscategoria.js";
import { categoriaAPI } from "/docs/js/api/categoria.js";
import { categoriaRenderer } from "./renderers/categoria.js";
import { galleryRenderer } from "/docs/js/renderers/gallery.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

let urlParams = new URLSearchParams(window.location.search);
let catId = urlParams.get("categoriaId");
function main() {
    let galleryContainer = document.querySelector("#post-cat") ;

    categoriaAPI.getById(catId)
    .then(name => {
        let nombre = categoriaRenderer.asDetails(name[0]);
        galleryContainer.appendChild(nombre);
            photoscategoriaAPI.getByCategoria (catId)
    .then(photos => {
    let gallery = galleryRenderer.asCardGallery(photos);
    galleryContainer.appendChild(gallery);
    })
    .catch(error => messageRenderer.showErrorMessage("No hay fotos con esta categoría"));
    })
    .catch(error => messageRenderer.showErrorMessage(error));





}

document.addEventListener("DOMContentLoaded", main);