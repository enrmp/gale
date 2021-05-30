"use strict";
import { sessionManager } from "/docs/js/utils/session.js";

function main() {
    showUser();
}
function showUser() {
    if (sessionManager.isLogged()) {
        let link = document.querySelector("body > div.d-xl-flex.flex-column.bg-white.h-100.m-0.d-none.fixed-top > ul > li:nth-child(4) > a");
        let linkMovil = document.querySelector("body > ul > li:nth-child(4) > a");
        linkMovil.href = `perfil.html?userId=${sessionManager.getLoggedId()}`;
        link.href = `perfil.html?userId=${sessionManager.getLoggedId()}`;
    }
    else {
        document.querySelector("body > div.container > div.container.sticky-top.bg-light > ul > li:nth-child(1) > a").style.display = "none";

    }
}


document.addEventListener("DOMContentLoaded", main);
