"use strict";
import { parseHTML } from "/docs/js/utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";
import { } from "/js/libs/jquery.adaptive-backgrounds.js"

const photoRenderer = {
    asCard: function (photo, i) {
        let html = `       
                    
        <div class="card border-0 pb-2 mb-4 bg-white shadow">
        <div class="photo-header-block">
            <div class="row">
                <div class="col-7 text-left">
                    <img src="images/p11.jfif"
                        alt="" class="profile-ph-post">
                    <p class="user"></p>
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
                <div class="rating">
                <input type="radio" id="star5${photo.photoId}" name="rating${photo.photoId}" value="5" />
                <label class="star" for="star5${photo.photoId}" title="Awesome" aria-hidden="true"></label>
                <input type="radio" id="star4${photo.photoId}" name="rating${photo.photoId}" value="4" />
                <label class="star" for="star4${photo.photoId}" title="Great" aria-hidden="true"></label>
                <input type="radio" id="star3${photo.photoId}" name="rating${photo.photoId}" value="3" />
                <label class="star" for="star3${photo.photoId}" title="Very good" aria-hidden="true"></label>
                <input type="radio" id="star2${photo.photoId}" name="rating${photo.photoId}" value="2" />
                <label class="star" for="star2${photo.photoId}" title="Good" aria-hidden="true"></label>
                <input type="radio" id="star1${photo.photoId}" name="rating${photo.photoId}" value="1" />
                <label class="star" for="star1${photo.photoId}" title="Bad" aria-hidden="true"></label>
              </div>
                </div>
                <div class="col-3 text-right">
                    <p><i class="bi bi-chat"></i> 2</p>
                </div>
            </div>
            <div class="row mx-1">
            <p class="photo-title">${photo.title}</p>
            <p class="photo-description">${photo.description}</p>
        </div>
            <div class="row mx-1">
                <div class="p-2 mt-4 mb-0 px-3 text-center mr-1 bg-gray cat-post"><p class="m-0"><strong>naturaleza</strong></p></div>
                <div class="p-2 mt-4 mb-0 px-3 text-center mr-1 bg-gray cat-post"><p class="m-0"><strong>viaje</strong></p></div>
            </div>
        </div>
    </div>
    `;
        let newCard = parseHTML(html);
        loadUsernameCard(newCard, photo.userId);
        loadTimeCard(newCard,photo.date);
        return newCard;
    },

    asDetails: function (photo) {
        let html = `                    
        <div class="card border-0 mb-5 p-3 bg-white">
        <div class="row">
            <div class="col-sm-6">
                <div class="photo-header-block">
                    <div class="row">
                        <div class="col-7 text-left">
                            <img src="images/p11.jfif"
                                alt="" class="profile-ph-post">
                            <p class="user"></p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="time">Hace 2 mins</p>
                        </div>
                    </div>
                </div>
                
                    <img class="photo-image"
                        src="${photo.url}" id="photo-detalle" data-adaptive-background="1">
                
            </div>
            <div class="col-sm-6">
                <div class="photo-metadata-block text-left">
                    <div class="row">
                        <div class="col-9 text-left">
                        <div class="rating">
                        <input type="radio" id="star5${photo.photoId}" name="rating${photo.photoId}" value="5" />
                        <label class="star" for="star5${photo.photoId}" title="Awesome" aria-hidden="true"></label>
                        <input type="radio" id="star4${photo.photoId}" name="rating${photo.photoId}" value="4" />
                        <label class="star" for="star4${photo.photoId}" title="Great" aria-hidden="true"></label>
                        <input type="radio" id="star3${photo.photoId}" name="rating${photo.photoId}" value="3" />
                        <label class="star" for="star3${photo.photoId}" title="Very good" aria-hidden="true"></label>
                        <input type="radio" id="star2${photo.photoId}" name="rating${photo.photoId}" value="2" />
                        <label class="star" for="star2${photo.photoId}" title="Good" aria-hidden="true"></label>
                        <input type="radio" id="star1${photo.photoId}" name="rating${photo.photoId}" value="1" />
                        <label class="star" for="star1${photo.photoId}" title="Bad" aria-hidden="true"></label>
                      </div>
                        </div>
                        <div class="col-3 text-right">
                            <p><i class="bi bi-chat"></i> 2</p>
                        </div>
                    </div>
                    <div class="row mx-1">
                    <p class="photo-title">${photo.title}</p>
                    <p class="photo-description">${photo.description}</p>
                </div>
                    <div class="row mx-1">
                        <div class="p-2 mt-4 mb-0 px-3 text-center mr-1 bg-gray cat-post"><p class="m-0"><strong>naturaleza</strong></p></div>
                        <div class="p-2 mt-4 mb-0 px-3 text-center mr-1 bg-gray cat-post"><p class="m-0"><strong>viaje</strong></p></div>
                    </div>
                    <h5 class="my-4">Comentarios</h5>
                    <div class="row">
                        <div class="col-2">
                            <img src="images/p12.jfif"
                            alt="" class="profile-ph-detail">
                        </div>
                        <div class="col-10 pl-md-0 pl-sm-3 mt-4">
                            
                            <p class="photo-title">@user</p>
                            <p class="photo-description">Esto es un comentario!</p>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-2 d-block">
                        <img src="images/p14.jfif"
                        alt="" class="profile-ph-detail">
                    </div>
                    <div class="col-10 pl-md-0 pl-sm-3 mt-4">
                        
                        <p class="photo-title">@user</p>
                        <p class="photo-description">Esto es otro comentario!</p>
                    </div>
                    </div>
                    <hr>
                    <div class="row mt-4">
                        <div class="col-2 d-block">
                            <img src="images/p10.jfif"
                            alt="" class="profile-ph-detail">
                        </div>
                        <div class="col-10 pl-md-0 pl-sm-3 mt-3">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control rounded-pill border-0 bg-light px-4 mr-2 comentario" placeholder="Escribe un comentario" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                  <button class="btn rounded-pill btn-dark comentario" type="button">Enviar</button>
                                </div>
                              </div>
                        </div>
                        </div>


            </div>
            </div>
        </div>
        <section class="back" style="background-image: url(${photo.url})"></section>
    </div>
    `;
        let newCard = parseHTML(html);
        loadUsernameCard(newCard, photo.userId);
        loadTimeCard(newCard,photo.date);
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

function loadTimeCard(card,photo) {
    var fecha = new Date(photo);
    fecha.setHours(fecha.getHours()-2);
    fecha =  fecha.toISOString();
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

    if(s>0 && s<=60){
        time.textContent="Hace "+s+" segundos";
    }

    else if(m>0 && m<=60){
        if(m==1){
        time.textContent="Hace "+m+" minuto";
        }

        else{
            time.textContent="Hace "+m+" minutos";
        }
    }

    else if(h>0 && h<=24){
        if(h==1){
            time.textContent="Hace "+h+" hora";
            }
    
            else{
                time.textContent="Hace "+h+" horas";
            }
    }

    else if(d>0 && d<=7){
        if(d==1){
            time.textContent="Hace "+d+" día";
            }
    
            else{
                time.textContent="Hace "+d+" días";
            }
    }

    else if(w>0 && y<1){
        if(w==1){
            time.textContent="Hace "+w+" semana";
            }
    
            else{
                time.textContent="Hace "+w+" semanas";
            }
    }

    else{
        if(y==1){
            time.textContent="Hace "+y+" año";
            }
    
            else{
                time.textContent="Hace "+y+" años";
            }
    }
    
    return card;
}



export { photoRenderer };