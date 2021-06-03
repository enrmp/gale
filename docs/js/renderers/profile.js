"use strict";
import { parseHTML } from "/docs/js/utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";
import { sessionManager } from "/docs/js/utils/session.js";

const profileRenderer = {
    asProfileInfo: function (user) {
        let html = `       
        <div class="row"><div class="col-md-3 col-4">
        <img src="${user.avatarUrl}" alt="foto de perfil" class="img-perfil rounded-circle">
    </div>

    <div class="col-md-5 col-8 mt-5">
<h2 class="mb-4 nombre-perfil">${user.firstName} ${user.lastName}</h2>
        <p><i class="bi bi-envelope"></i> ${user.email}</p>
        <p><i class="bi bi-hand-index-thumb"></i> @${user.username}</p>
        <i class="float-left bi bi-star"></i><p id="media" class="float-left ml-1 m-0"> ${user.media}</p>
    </div>

    
        `;
        let newCard = parseHTML(html);
        if(user.avatarUrl===""){
            newCard.querySelector(".img-perfil").src="images/profile.jpg";
        }
        if(user.media===null){
            newCard.querySelector("#media").textContent=" 0";
        }
        return newCard;
    }
};



export { profileRenderer };