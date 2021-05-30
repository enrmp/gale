"use strict";
import { parseHTML } from "/docs/js/utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";
import { comentarioAPI } from "/js/api/comentario.js";
import { photoscategoriaAPI } from "/js/api/photoscategoria.js";
import { sessionManager } from "/docs/js/utils/session.js";
import { comentarioRenderer } from "./comentario.js";

const photoRenderer = {
    asCard: function (photo) {
        let html = `       
                    
        <div class="card border-0 pb-2 mb-4 bg-white shadow">
        <div class="photo-header-block">
            <div class="row">
                <div class="col-7 text-left">
                    <img src="images/p11.jfif"
                        alt="" class="profile-ph-post">
                    <a href="perfil.html?userId=${photo.userId}"><p class="user"></p></a>
                </div>
                <div class="col-5 text-right">
                    <p class="time">Hace 2 mins</p>
                </div>
            </div>
        </div>
        <div class="photo-image-block">
        <a href="detalle.html?photoId=${photo.photoId}"> 
            <img class="photo-image"
                src="${photo.url}">
        </a>
        </div>
        <div class="photo-metadata-block text-left">
            <div class="row">
                <div class="col-9 text-left">
                <i class="float-left bi bi-star"></i><p class="w-fit ml-2 float-left" id="nrat"> 5</p>
                </div>
                <div class="col-3 text-right">
                <i class="bi bi-chat "></i><p class="w-fit ml-2 float-right" id="ncom"> 0</p>
                </div>
            </div>
            <div class="row mx-1">
            <p class="photo-title">${photo.title}</p>
            <p class="photo-description">${photo.description}</p>
        </div>
            <div class="row mx-1" id="categorias">
                
            </div>
        </div>
    </div>
    `;
        let newCard = parseHTML(html);
        loadUsernameCard(newCard, photo.userId);
        loadCatCard(newCard, photo.photoId);
        loadNCom(newCard, photo.photoId);
        loadTimeCard(newCard, photo.date);
        return newCard;
    },

    asProfileCard: function (photo) {
        let html = `    
        <a class="col-md-3 col-5 mb-3 p-2 px-3 img-5" style="background-image: url(${photo.url});" href="detalle.html?photoId=${photo.photoId}">
            <div class="row position-absolute bottom-0 w-100">

            <div class="col-12">
                <p class="m-0 user text-white"><strong></strong></p>
            </div>
            <div class="col-6 pr-0">
                
                <p class="text-white"><i class=" text-white bi bi-star"></i> 5</p>
            </div>
            <div class="col-6 text-right pl-0 pr-3 ">
            <i class="bi bi-chat text-white"></i><p class="text-white w-fit ml-2 float-right" id="ncom"> 0</p>
                
            </div>
    </div></a>
    `;
        let newCard = parseHTML(html);
        loadUsernameCard(newCard, photo.userId);
        loadNCom(newCard, photo.photoId);
        return newCard;
    },

    asProfileValoration: function (photo) {
        let html = `    
        
        <div class="col-md col-11 border-radius m-3 bg-white">
        <div class="row">
        <div class="col-4 float-left align-middle">
        <a href="detalle.html?photoId=${photo.photoId}">
        
        <div class="img-6 border-radius my-3" style="background-image: url(${photo.url});"></div></a>
        </div>
        <div class="col-8 text-center my-5">
            <p class="my-3"><i class="bi bi-star"></i> ${photo.valor}</p>
        </div> </div>
    </div>
    `;
        let newCard = parseHTML(html);
        return newCard;
    },

    asDetails: function (photo) {
        let html = `                    
        <div>
        <div class="row">
            <div class="col-sm-6">
                <div class="photo-header-block">
                    <div class="row">
                        <div class="col-7 text-left">
                            <img src="images/p11.jfif"
                                alt="" class="profile-ph-post">
                                <a href="perfil.html?userId=${photo.userId}"><p class="user"></p></a>
                        </div>
                        <div class="col-5 text-right">
                            <p class="time">Hace 2 mins</p>
                        </div>
                    </div>
                </div>
                    <img class="photo-image"
                        src="${photo.url}" id="photo-detalle">
                
            </div>
            <div class="col-sm-6">
                <div class="photo-metadata-block text-left">
                    <div class="row">
                        <div class="col-9 text-left" id="resultados">
                        <form id="valor">
                        <div class="rating">
                        <input type="radio" id="star5${photo.photoId}" name="valor" value="5" />
                        <label class="star" for="star5${photo.photoId}" title="Awesome" aria-hidden="true"></label>
                        <input type="radio" id="star4${photo.photoId}" name="valor" value="4" />
                        <label class="star" for="star4${photo.photoId}" title="Great" aria-hidden="true"></label>
                        <input type="radio" id="star3${photo.photoId}" name="valor" value="3" />
                        <label class="star" for="star3${photo.photoId}" title="Very good" aria-hidden="true"></label>
                        <input type="radio" id="star2${photo.photoId}" name="valor" value="2" />
                        <label class="star" for="star2${photo.photoId}" title="Good" aria-hidden="true"></label>
                        <input type="radio" id="star1${photo.photoId}" name="valor" value="1" />
                        <label class="star" for="star1${photo.photoId}" title="Bad" aria-hidden="true"></label>
                        </div>
                        <button class="btn rounded-pill mt-n1 ml-2 btn-dark comentario" type="submit">Votar!</button>
                        </form>
                        
                        </div>
                        <div class="col-3 text-right">
                        <i class="bi bi-chat "></i><p class="w-fit ml-2 float-right" id="ncom"> 0</p>
                        </div>
                    </div>
                    <div class="row mt-3 mx-1">
                    <p class="photo-title">${photo.title}</p>
                    <p class="photo-description">${photo.description}</p>
                </div>
                <div class="row mx-1" id="categorias">
                
                </div>
                    <h5 class="my-4">Comentarios</h5>
                    <div id="com">
                    </div>
                    <hr>



            </div>
            </div>
        </div>
        <section class="back" style="background-image: url(${photo.url})"></section>
        </div>
    `;
        let newCard = parseHTML(html);
        loadUsernameCard(newCard, photo.userId);
        loadCatCard(newCard, photo.photoId);
        loadTimeCard(newCard, photo.date);
        loadEdit(photo.userId);
        loadNCom(newCard, photo.photoId);
        loadComent(newCard, photo.photoId);
        return newCard;
    }

};

function loadUsernameCard(card, userId) {
    usersAPI.getById(userId)
        .then(users => {
            let username = users[0].username;
            let photo = users[0].avatarUrl;
            let p = card.querySelector("p.user");
            let ph = card.querySelector("img.profile-ph-post");
            p.textContent = username;
            ph.src = photo;
        });
}

function loadEdit(userId) {
            if(userId!=sessionManager.getLoggedId()){
            let p = document.querySelector("#botones");
            p.style.display = "none";
        }
}

function loadCatCard(card, photoId) {
    photoscategoriaAPI.getByPhoto(photoId)
        .then(categorias => {
            for(let i = 0; i < categorias.length; i++){
            let nombre = categorias[i].nombre;
            let id=categorias[i].categoriaId;
            let p = card.querySelector("#categorias");
            var grid = parseHTML(`<a href="categoria.html?categoriaId=${id}"><div class="p-2 mt-4 mb-0 px-3 text-center mr-1 bg-gray cat-post"><p class="m-0"><strong>${nombre}</strong></p></div></a>`);
            p.appendChild(grid);}
        });
}

function loadNCom(card, photoId) {
    comentarioAPI.getByPhoto(photoId)
        .then(comentario => {
            let p = card.querySelector("#ncom");
            p.textContent = comentario.length;
        });
}

function loadComent(card, photoId) {
    comentarioAPI.getByPhoto(photoId)
        .then(comentario => {
            var grid = parseHTML('<div class="container-fluid"></div>');
            for (let com of comentario){
            let code=comentarioRenderer.asComentario(com);
            grid.appendChild(code);
        }
        let div=card.querySelector("#com");
        div.appendChild(grid);

        });
}

function loadTimeCard(card, photo) {
    var fecha = new Date(photo);
    fecha.setHours(fecha.getHours() - 2);
    fecha = fecha.toISOString();
    var fecha = new Date(fecha);
    var fechaActual = new Date();

    var diff = fechaActual - fecha;
    let time = card.querySelector("p.time");
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var weeks = days * 7;
    var years = days * 365;

    var s = Math.round(diff / seconds);
    var m = Math.round(diff / minutes);
    var h = Math.round(diff / hours);
    var d = Math.round(diff / days);
    var w = Math.round(diff / weeks);
    var y = Math.round(diff / years);

    if (s >= 0 && s <= 60) {
        if (s == 1) {
            time.textContent = "Hace " + s + " segundo";
        }
        else {
            time.textContent = "Hace " + s + " segundos";
        }
    }

    else if (m > 0 && m <= 60) {
        if (m == 1) {
            time.textContent = "Hace " + m + " minuto";
        }

        else {
            time.textContent = "Hace " + m + " minutos";
        }
    }

    else if (h > 0 && h <= 24) {
        if (h == 1) {
            time.textContent = "Hace " + h + " hora";
        }

        else {
            time.textContent = "Hace " + h + " horas";
        }
    }

    else if (d > 0 && d <= 7) {
        if (d == 1) {
            time.textContent = "Hace " + d + " día";
        }

        else {
            time.textContent = "Hace " + d + " días";
        }
    }

    else if (w > 0 && y < 1) {
        if (w == 1) {
            time.textContent = "Hace " + w + " semana";
        }

        else {
            time.textContent = "Hace " + w + " semanas";
        }
    }

    else {
        if (y == 1) {
            time.textContent = "Hace " + y + " año";
        }

        else {
            time.textContent = "Hace " + y + " años";
        }
    }

    return card;
}



export { photoRenderer };