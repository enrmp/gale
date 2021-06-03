"use strict";
import { categoriaAPI } from "/docs/js/api/categoria.js";
import { photoscategoriaAPI } from "/docs/js/api/photoscategoria.js";
import { trendingAPI } from "/docs/js/api/trending.js";
import { categoriaRenderer } from "/docs/js/renderers/categoria.js";
import { galleryRenderer } from "/docs/js/renderers/gallery.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

let galleryContainer = document.querySelector("#post-cat") ;

function main() {
    let categoriaContainer = document.querySelector("#slider-cat") ;

    let buscador = document.getElementById("buscador");
    buscador.onsubmit = handleSearchcategoria;

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


    trendingAPI.getCategorias()
    .then(categoria => {
        for (let cat of categoria){
            cargarFotos(cat.categoriaId);
        }
    })
    .catch(error => messageRenderer.showErrorMessage(error));

}

function cargarNombre(catId){
    categoriaAPI.getById(catId)
    .then(name => {
        let nombre = galleryRenderer.asExploraGallery(name);
        galleryContainer.appendChild(nombre);

        
    })
    .catch(error => messageRenderer.showErrorMessage(error));
}

function cargarFotos(catId){
    photoscategoriaAPI.getByCategoria(catId)
    .then(photos => {
        let nombre = galleryRenderer.asExploraGallery(photos);
        galleryContainer.appendChild(nombre);
    })
    .catch(error => messageRenderer.showErrorMessage("No hay fotos con esta categoría"));
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

function handleSearchcategoria(event) {
    event.preventDefault();
    let nombreInput = document.getElementById("buscar");

    categoriaAPI.getByNombre(nombreInput.value)
        .then(data => window.location.href = `categoria.html?categoriaId=${data[0].categoriaId}`)
        .catch(error => messageRenderer.showErrorMessage(error));
}

document.addEventListener("DOMContentLoaded", main);
    