"use strict";
import { parseHTML } from "/docs/js/utils/parseHTML.js";

const categoriaRenderer = {
    asPill: function (categoria) {
        let html = `     
        <li>
        <a href="categoria.html?categoriaId=${categoria.categoriaId}">  
        <div class="p-2 px-3 text-center bg-gray mx-1 rounded-pill"><p class="m-0 fs-3 cat"><strong>${categoria.nombre}</strong></p></div>
        </a></li>
    `;
        let newPill = parseHTML(html);
        return newPill;
    },


    asDetails: function (categoria) {
        let html = `                 
        <h3 class="text-center my-5">${categoria.nombre}</h3> `;
        
        let newTitle = parseHTML(html);
        return newTitle;},
    

    asForm: function (categoria) {
        let html = `      
        <div>
        <input class="form-check-input d-block m-0 mt-1 float-left" type="checkbox" value="${categoria.categoriaId}" name="categoriaId" id="cat${categoria.categoriaId}">
        <label class="form-check-label d-block m-0 pb-4 pl-2 mr-4 float-left" for="${categoria.categoriaId}">
                    ${categoria.nombre}
                    </label></div>            `;
        
        let newTitle = parseHTML(html);
        return newTitle;}
    }



export { categoriaRenderer };