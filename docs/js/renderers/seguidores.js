"use strict";
import { parseHTML } from "/docs/js/utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";
import { sessionManager } from "/docs/js/utils/session.js";

const seguidoresRenderer = {
    asSeguidores: function (user) {
        let html = `       
    <div>
    <div class="row mt-4 mx-4">
    
        <div class="col-lg-1 col-3">
            <a href="perfil.html?userId=${user.userId}"><img src="${user.avatarUrl}" class="rounded-circle" height="55px" alt=""></a>
        </div>
        <div class="col-lg-11 col-9"><a href="perfil.html?userId=${user.userId}">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>@${user.username}</p></a>
        </div>
        <hr>
    </div>
    <hr></div>
    
        `;
        let newCard = parseHTML(html);
        if(user.avatarUrl===""){
            newCard.querySelector(".rounded-circle").src="images/profile.jpg";
        }
        return newCard;
    }
};



export { seguidoresRenderer };