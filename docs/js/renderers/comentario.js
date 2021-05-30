"use strict";
import { parseHTML } from "/docs/js/utils/parseHTML.js";

const comentarioRenderer = {
    asComentario: function (com) {
        let cod = `
        <div class="row">
        <div class="col-2">
            <img id="p-com" src="${com.avatarUrl}"
            alt="" class="profile-ph-detail mr-3">
        </div>
        <div class="col-10 pl-md-0 pl-sm-3 mt-4">
            
            <p id="p-user" class="photo-title">@${com.username}</p>
            <p id="comentario" class="photo-description">${com.texto}</p>
        </div>
    </div>
        `;
        let newComent = parseHTML(cod);
        return newComent;
    }
};


export { comentarioRenderer };