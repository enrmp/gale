"use strict";
import { seguidoresAPI } from "/docs/js/api/seguidores.js";
import { seguidoresRenderer } from "/docs/js/renderers/seguidores.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

function main() {
    seguidoresAPI.getSeguidos(userId)
    .then(count => {
       for(let i=0;i<count.length;i++){
        document.getElementById("content").appendChild(seguidoresRenderer.asSeguidores(count[i]));
       }
    })
    .catch(error =>{
   });
}

document.addEventListener("DOMContentLoaded", main);