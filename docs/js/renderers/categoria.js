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
    }

    // asDetails: function (categoria) {
    //     let html = `                    
    //     <div class="card border-0 mb-5 p-3 bg-white">
    //     <div class="row">
    //         <div class="col-sm-6">
    //             <div class="categoria-header-block">
    //                 <div class="row">
    //                     <div class="col-7 text-left">
    //                         <img src="images/p11.jfif"
    //                             alt="" class="profile-ph-post">
    //                         <p class="user"></p>
    //                     </div>
    //                     <div class="col-5 text-right">
    //                         <p class="time">Hace 2 mins</p>
    //                     </div>
    //                 </div>
    //             </div>
                
    //                 <img class="categoria-image"
    //                     src="${categoria.url}" id="categoria-detalle" data-adaptive-background="1">
                
    //         </div>
    //         <div class="col-sm-6">
    //             <div class="categoria-metadata-block text-left">
    //                 <div class="row">
    //                     <div class="col-9 text-left">
    //                     <div class="rating">
    //                     <input type="radio" id="star5${categoria.categoriaId}" name="rating${categoria.categoriaId}" value="5" />
    //                     <label class="star" for="star5${categoria.categoriaId}" title="Awesome" aria-hidden="true"></label>
    //                     <input type="radio" id="star4${categoria.categoriaId}" name="rating${categoria.categoriaId}" value="4" />
    //                     <label class="star" for="star4${categoria.categoriaId}" title="Great" aria-hidden="true"></label>
    //                     <input type="radio" id="star3${categoria.categoriaId}" name="rating${categoria.categoriaId}" value="3" />
    //                     <label class="star" for="star3${categoria.categoriaId}" title="Very good" aria-hidden="true"></label>
    //                     <input type="radio" id="star2${categoria.categoriaId}" name="rating${categoria.categoriaId}" value="2" />
    //                     <label class="star" for="star2${categoria.categoriaId}" title="Good" aria-hidden="true"></label>
    //                     <input type="radio" id="star1${categoria.categoriaId}" name="rating${categoria.categoriaId}" value="1" />
    //                     <label class="star" for="star1${categoria.categoriaId}" title="Bad" aria-hidden="true"></label>
    //                   </div>
    //                     </div>
    //                     <div class="col-3 text-right">
    //                         <p><i class="bi bi-chat"></i> 2</p>
    //                     </div>
    //                 </div>
    //                 <div class="row mx-1">
    //                 <p class="categoria-title">${categoria.title}</p>
    //                 <p class="categoria-description">${categoria.description}</p>
    //             </div>
    //                 <div class="row mx-1">
    //                     <div class="p-2 mt-4 mb-0 px-3 text-center mr-1 bg-gray cat-post"><p class="m-0"><strong>naturaleza</strong></p></div>
    //                     <div class="p-2 mt-4 mb-0 px-3 text-center mr-1 bg-gray cat-post"><p class="m-0"><strong>viaje</strong></p></div>
    //                 </div>
    //                 <h5 class="my-4">Comentarios</h5>
    //                 <div class="row">
    //                     <div class="col-2">
    //                         <img src="images/p12.jfif"
    //                         alt="" class="profile-ph-detail">
    //                     </div>
    //                     <div class="col-10 pl-md-0 pl-sm-3 mt-4">
                            
    //                         <p class="categoria-title">@user</p>
    //                         <p class="categoria-description">Esto es un comentario!</p>
    //                     </div>
    //                 </div>
    //                 <div class="row">
    //                 <div class="col-2 d-block">
    //                     <img src="images/p14.jfif"
    //                     alt="" class="profile-ph-detail">
    //                 </div>
    //                 <div class="col-10 pl-md-0 pl-sm-3 mt-4">
                        
    //                     <p class="categoria-title">@user</p>
    //                     <p class="categoria-description">Esto es otro comentario!</p>
    //                 </div>
    //                 </div>
    //                 <hr>
    //                 <div class="row mt-4">
    //                     <div class="col-2 d-block">
    //                         <img src="images/p10.jfif"
    //                         alt="" class="profile-ph-detail">
    //                     </div>
    //                     <div class="col-10 pl-md-0 pl-sm-3 mt-3">
    //                         <div class="input-group mb-3">
    //                             <input type="text" class="form-control rounded-pill border-0 bg-light px-4 mr-2 comentario" placeholder="Escribe un comentario" aria-label="Recipient's username" aria-describedby="basic-addon2">
    //                             <div class="input-group-append">
    //                               <button class="btn rounded-pill btn-dark comentario" type="button">Enviar</button>
    //                             </div>
    //                           </div>
    //                     </div>
    //                     </div>


    //         </div>
    //         </div>
    //     </div>
    //     <section class="back" style="background-image: url(${categoria.url})"></section>
    // </div>
    // `;
    //     let newCard = parseHTML(html);
    //     loadUsernameCard(newCard, categoria.userId);
    //     return newCard;
    // }

};



export { categoriaRenderer };