"use strict";
import { parseHTML } from "/docs/js/utils/parseHTML.js";

const trendingRenderer = {
    asCategorias: function (categoria) {
        let html = `     
        <li class="float-left">
        <a href="categoria.html?categoriaId=${categoria.categoriaId}">  
        <div class="p-2 px-3 w-fit float-left text-center bg-gray mx-1 rounded-pill">
        <p class="m-0 fs-3 cat w-fit"><strong>${categoria.nombre}</strong> (${categoria.num})</p></div>
        </a></li>
    `;
        let newPill = parseHTML(html);
        return newPill;
    },
    

    asMasPunt: function (photo) {
        let html = `      
        <li>
        <a href="detalle.html?photoId=${photo.photoId}">
        <div class="trending-b col p-2 position-relative px-3 img-2"
        style="background-image: url(${photo.url});">
        <div class="row position-absolute bottom-0 info-img2">
            <div class="col-12">
                <p class="m-0"><strong>@${photo.username}</strong></p>
            </div>
            <div class="col-6">
                <p><strong><i class="bi bi-star"></i> ${photo.media}</strong></p>
            </div>
        </div>
    </div></a></li>           `;
        
        let newTitle = parseHTML(html);
        return newTitle;},

    asMasComents: function (photo) {
        let html = `      
        <li>
        <a href="detalle.html?photoId=${photo.photoId}">
        <div class="trending-b col p-2 position-relative px-3 img-2"
        style="background-image: url(${photo.url});">
        <div class="row position-absolute bottom-0 info-img2">
            <div class="col-12">
                <p class="m-0"><strong>@${photo.username}</strong></p>
            </div>
            <div class="col-6 text-left comment-img2">
                <p><strong><i class="bi bi-chat"></i> ${photo.num}</strong></p>
            </div>
        </div>
    </div></a></li>           `;
        
        let newTitle = parseHTML(html);
        return newTitle;},

        asSeg: function (photo) {
            let html = `      
            <li>
            <a href="perfil.html?userId=${photo.userId}">
            <div class="col p-2 px-3 img-4 text-center">
            <img src="${photo.avatarUrl}" class="rounded-circle col" alt="">
            <p class="mt-3 mb-0 mb-0"><strong>@${photo.username}</strong></p>
            <p class="m-0">${photo.num}</p>
        </div>
        </a></li>           `;
            
            let newTitle = parseHTML(html);
            return newTitle;},

            asPerfV: function (photo) {
                let html = `      
                <li>
                <a href="perfil.html?userId=${photo.userId}">
                <div class="col p-2 px-3 img-4 text-center">
                <img src="${photo.avatarUrl}" class="rounded-circle col" alt="">
                <p class="mt-3 mb-0 mb-0"><strong>@${photo.username}</strong></p>
                <p class="m-0"><i class="bi bi-star"></i> ${photo.media}</p>
            </div>
            </a></li>           `;
                
                let newTitle = parseHTML(html);
                return newTitle;}
    }


export { trendingRenderer };