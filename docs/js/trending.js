"use strict";
import { trendingAPI } from "/docs/js/api/trending.js";
import { trendingRenderer } from "/docs/js/renderers/trending.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

function main() {
    let categoriaContainer = document.querySelector("#slider-cat") ;
    let photosValueContainer = document.querySelector("#slider-pv") ;
    let comContainer = document.querySelector("#slider-com") ;
    let segContainer = document.querySelector("#slider-seg") ;
    let uvContainer = document.querySelector("#slider-uv") ;

    trendingAPI.getCategorias ()
    .then(categoria => {
        for (let cat of categoria){
    let categoria = trendingRenderer.asCategorias(cat);
    categoriaContainer.appendChild(categoria);
        }
    })
    .catch(error => messageRenderer.showErrorMessage(error));

    trendingAPI.getPhotosValor ()
    .then(photo => {
        for (let ph of photo){
    let photos = trendingRenderer.asMasPunt(ph);
    photosValueContainer.appendChild(photos);
        }
    })
    .catch(error => messageRenderer.showErrorMessage(error));

    trendingAPI.getComentarios ()
    .then(photo => {
        for (let ph of photo){
    let photos = trendingRenderer.asMasComents(ph);
    comContainer.appendChild(photos);
        }
    })
    .catch(error => messageRenderer.showErrorMessage(error));

    trendingAPI.getSeguidos ()
    .then(photo => {
        for (let ph of photo){
    let photos = trendingRenderer.asSeg(ph);
    segContainer.appendChild(photos);
        }
    })
    .catch(error => messageRenderer.showErrorMessage(error));

    trendingAPI.getUsersValor ()
    .then(photo => {
        for (let ph of photo){
    let photos = trendingRenderer.asPerfV(ph);
    uvContainer.appendChild(photos);
        }
    })
    .catch(error => messageRenderer.showErrorMessage(error));
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

document.addEventListener("DOMContentLoaded", main);
    