"use strict";
import { asignarRenderer } from "./renderers/asignar-cat.js";
import { categoriaAPI } from "/docs/js/api/categoria.js";
import { photoscategoriaAPI } from "/docs/js/api/photoscategoria.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
    let parent = document.getElementById("child");

//


    categoriaAPI.getAll()
        .then(categoria => {
                let formulario = asignarRenderer.asForm(categoria);
                parent.appendChild(formulario);
            photoscategoriaAPI.getByPhoto(photoId).then(categorias => {

                for(let i=0; i<categorias.length; i++){
                let selector=categorias[i].categoriaId;
                let input=formulario.querySelector(`#cat${categorias[i].categoriaId}`);
                input.checked=true;
                }
            }
        
            ).catch(
                error => messageRenderer.showErrorMessage(error)
            );
            formulario.onsubmit = handleSubmitcategoria;
        })
        .catch(error => messageRenderer.showErrorMessage(error));

    let registerForm = document.querySelector("#add-categoria");
    registerForm.onsubmit = handleAddcategoria;
}





    function handleSubmitcategoria(event) {
        event.preventDefault();
        let form = event.target;

        for (let i = 0; i < form.length; i++) {
            if (form[i].checked===false) {
                photoscategoriaAPI.delete(form[i].value,photoId)
                    .then(data => window.location.href = "index.html")
                    .catch(error => messageRenderer.showErrorMessage(error));
            }

            if (form[i].checked===true){
                let formData = new FormData();
                formData.append("categoriaId", form[i].value)
                formData.append("photoId", photoId);
                photoscategoriaAPI.create(formData)
                    .then(data => window.location.href = "index.html")
                    .catch(error => messageRenderer.showErrorMessage(error));
            }
        }
    }

    function handleAddcategoria(event) {
        event.preventDefault();
        let formulario = event.target;
        let formcat = new FormData(formulario);
        categoriaAPI.create(formcat)
            .then(data => window.location.href = "javascript:location.reload()")
            .catch(error => messageRenderer.showErrorMessage(error));
    }


document.addEventListener("DOMContentLoaded", main);