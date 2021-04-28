"use strict";

function main () {
    let button = document.getElementById("test-button");
    button.onclick = clickHandler;

    let nom = document.document.getElementById("nombre");
    nom.onchange = changeHandler;
}

function clickHandler(event){
    let target = event.target;
    let text = target.textContent;
    alert(text);
}

function changeHandler(event){
    let targe = event.target;
    targe.value = "prueba";
}

document.addEventListener("DOMContentLoaded",main);
    