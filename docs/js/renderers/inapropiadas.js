"use strict";
import { parseHTML } from "/docs/js/utils/parseHTML.js";

const inapropiadasRenderer = {
    asPill: function (inapropiadas) {
        let html = `     
        <div class="p-2 px-3 text-center bg-gray w-fit float-left m-1 text-uppercase rounded-pill"><p class="m-0 fs-3 cat"><strong>${inapropiadas.palabra}</strong></p></div>
    `;
        let newPill = parseHTML(html);
        return newPill;
    }

    // asDetails: function (inapropiadas) {
    //     let html = `                    
    //     <div class="card border-0 mb-5 p-3 bg-white">
    //     <div class="row">
    //         <div class="col-sm-6">
    //             <div class="inapropiadas-header-block">
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
                
    //                 <img class="inapropiadas-image"
    //                     src="${inapropiadas.url}" id="inapropiadas-detalle" data-adaptive-background="1">
                
    //         </div>
    //         <div class="col-sm-6">
    //             <div class="inapropiadas-metadata-block text-left">
    //                 <div class="row">
    //                     <div class="col-9 text-left">
    //                     <div class="rating">
    //                     <input type="radio" id="star5${inapropiadas.inapropiadasId}" name="rating${inapropiadas.inapropiadasId}" value="5" />
    //                     <label class="star" for="star5${inapropiadas.inapropiadasId}" title="Awesome" aria-hidden="true"></label>
    //                     <input type="radio" id="star4${inapropiadas.inapropiadasId}" name="rating${inapropiadas.inapropiadasId}" value="4" />
    //                     <label class="star" for="star4${inapropiadas.inapropiadasId}" title="Great" aria-hidden="true"></label>
    //                     <input type="radio" id="star3${inapropiadas.inapropiadasId}" name="rating${inapropiadas.inapropiadasId}" value="3" />
    //                     <label class="star" for="star3${inapropiadas.inapropiadasId}" title="Very good" aria-hidden="true"></label>
    //                     <input type="radio" id="star2${inapropiadas.inapropiadasId}" name="rating${inapropiadas.inapropiadasId}" value="2" />
    //                     <label class="star" for="star2${inapropiadas.inapropiadasId}" title="Good" aria-hidden="true"></label>
    //                     <input type="radio" id="star1${inapropiadas.inapropiadasId}" name="rating${inapropiadas.inapropiadasId}" value="1" />
    //                     <label class="star" for="star1${inapropiadas.inapropiadasId}" title="Bad" aria-hidden="true"></label>
    //                   </div>
    //                     </div>
    //                     <div class="col-3 text-right">
    //                         <p><i class="bi bi-chat"></i> 2</p>
    //                     </div>
    //                 </div>
    //                 <div class="row mx-1">
    //                 <p class="inapropiadas-title">${inapropiadas.title}</p>
    //                 <p class="inapropiadas-description">${inapropiadas.description}</p>
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
                            
    //                         <p class="inapropiadas-title">@user</p>
    //                         <p class="inapropiadas-description">Esto es un comentario!</p>
    //                     </div>
    //                 </div>
    //                 <div class="row">
    //                 <div class="col-2 d-block">
    //                     <img src="images/p14.jfif"
    //                     alt="" class="profile-ph-detail">
    //                 </div>
    //                 <div class="col-10 pl-md-0 pl-sm-3 mt-4">
                        
    //                     <p class="inapropiadas-title">@user</p>
    //                     <p class="inapropiadas-description">Esto es otro comentario!</p>
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
    //     <section class="back" style="background-image: url(${inapropiadas.url})"></section>
    // </div>
    // `;
    //     let newCard = parseHTML(html);
    //     loadUsernameCard(newCard, inapropiadas.userId);
    //     return newCard;
    // }

};



export { inapropiadasRenderer };