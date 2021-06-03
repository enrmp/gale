"use strict";
import { sessionManager } from "/docs/js/utils/session.js";
import { photosAPI } from "/docs/js/api/photos.js";
import { seguidoresAPI } from "/docs/js/api/seguidores.js";
import { valoracionAPI } from "/docs/js/api/valoracion.js";
import { usersAPI } from "/docs/js/api/users.js";
import { profileRenderer } from "/docs/js/renderers/profile.js";
import { galleryRenderer } from "/docs/js/renderers/gallery.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";
import { parseHTML } from "/docs/js/utils/parseHTML.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");
let seSiguen;

function main() {
    new CircleType(document.getElementById("git")).radius(0).forceWidth(true).forceHeight(true);;


    var speedCanvas = document.getElementById("speedChart");
    
    valoracionAPI.getStatsByUser(userId)
    .then(count => {
        let valor=[];
        let num=[];
        for(let i=0;i<count.length;i++){
            valor.push(count[i].valor);
            num.push(count[i].NumValoraciones);
        }
       console.log(valor);
       console.log(num);
       graph(valor,num);
    })
    .catch(error =>{

   });
function graph(valor,num){


    var speedData = {
      labels: valor,
      datasets: [{
        label: "Valoraciones recibidas agrupadas por valor",
        data: num,
      }]
    };

    var chartOptions = {
    backgroundColor: "#111",
    animations: {
      radius: {
        duration: 400,
        easing: 'linear',
        loop: (context) => context.active
      }
    },
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      }
    };
    
    var lineChart = new Chart(speedCanvas, {
      type: 'bar',
      data: speedData,
      options: chartOptions
    });

}

    let infoContainer = document.querySelector("#info");
    usersAPI.getById(userId)
        .then(users => {
            let profile = profileRenderer.asProfileInfo(users[0]);
            infoContainer.appendChild(profile);
            

        })
        .catch(error => messageRenderer.showErrorMessage(error));

   
        seguidoresAPI.getSeguidores(userId)
            .then(data => {
                    for(let i=0; i<data.length;i++){
                        if(data[i].seguidorId===sessionManager.getLoggedId()){
                            seSiguen=true;
                        }
                        if(data[i].seguidorId!==sessionManager.getLoggedId()){
                            seSiguen=false;
                        }
                    }
                    botones();
                })
                .catch(error => {
                    seSiguen=false;
                    botones();
                }); 


     photosAPI.getCountByUser(userId)
         .then(count => {
            let num=count.length;
            let img = document.getElementById("countimg");
            img.appendChild(parseHTML(`<strong>${num}</strong>`));
         })
         .catch(error =>{
            let img = document.getElementById("countimg");
            img.appendChild(parseHTML(`<strong>0</strong>`));
        });

        seguidoresAPI.getSeguidores(userId)
        .then(count => {
           let num=count.length;
           let followers = document.getElementById("followers");
           followers.appendChild(parseHTML(`<a href="seguidores.html?userId=${userId}"><strong>${num}</strong></a>`));
        })
        .catch(error =>{
           let followers = document.getElementById("followers");
           followers.appendChild(parseHTML(`<strong>0</strong>`));
       });

       seguidoresAPI.getSeguidos(userId)
       .then(count => {
          let num=count.length;
          let following = document.getElementById("following");
          following.appendChild(parseHTML(`<a href="seguidos.html?userId=${userId}"><strong>${num}</strong></a>`));
       })
       .catch(error =>{
          let following = document.getElementById("following");
          following.appendChild(parseHTML(`<strong>0</strong>`));
      });

    let galleryContainer = document.querySelector("#publicas");
    let tampub = document.querySelector("#perfil > li:nth-child(1) > a");
    photosAPI.getByUser(userId)
        .then(photos => {
            if (photos.length > 0) {
                tampub.textContent = `Públicas (${photos.length})`;
            }
            let gallery = galleryRenderer.asCardProfileGallery(photos);
            galleryContainer.appendChild(gallery);
        })
        .catch();


        let galleryContainerVal = document.querySelector("#valorado");
        let tamval = document.querySelector("#perfil > li:nth-child(3) > a");
    
        valoracionAPI.getByUser(userId)
            .then(val => {
                if (val.length > 0) {
                    tamval.textContent = `Valorado (${val.length})`;
                }
                let gallery = galleryRenderer.asCardValorationGallery(val);
                galleryContainerVal.appendChild(gallery);
            })
            .catch();

    addLogoutHandler();

    document.querySelector("#follow").onclick = followHandler;
    document.querySelector("#unfollow").onclick = unfollowHandler;
}

function addLogoutHandler() {
    let logoutButton = document.getElementById("navbar-logout");
    logoutButton.addEventListener("click", function () {
        sessionManager.logout();
        window.location.href = "index.html";
    });


}


function botones(){
    if(userId==sessionManager.getLoggedId()){
        let galleryContainerPriv = document.querySelector("#privadas");
        let tampriv = document.querySelector("#perfil > li:nth-child(2) > a");
        document.querySelector("#follow").style.display="none";
        document.querySelector("#unfollow").style.display="none";
        photosAPI.getPrivatesByUser(userId)
            .then(photos => {
                if (photos.length > 0) {
                    tampriv.textContent = `Privadas (${photos.length})`;
                }
                let gallery = galleryRenderer.asCardProfileGallery(photos);
                galleryContainerPriv.appendChild(gallery);
            })
            .catch();
    
        }
    if(userId!=sessionManager.getLoggedId()){
        let galleryContainerPriv = document.querySelector("#perfil > li:nth-child(2) > a");
            galleryContainerPriv.style.display="none";
            document.querySelector("#navbar-logout").style.display="none";
    

            if(seSiguen==true){
                document.querySelector("#follow").style.display="none";
            }if(seSiguen==false){
                document.querySelector("#unfollow").style.display="none";
            }
        }
    }

function followHandler() {
    let follow = document.querySelector("#follow");
    follow.style.display="none";
    let unfollow = document.querySelector("#unfollow");
    unfollow.style.removeProperty("display");

    let followForm = new FormData();
    followForm.append("seguidorId", sessionManager.getLoggedId());
    followForm.append("seguidosId", userId);

    seguidoresAPI.create(followForm)
    .then()
    .catch();
    window.location.href = "javascript:location.reload()";
}

function unfollowHandler() {
    let follow = document.querySelector("#unfollow");
    follow.style.display="none";
    let unfollow = document.querySelector("#follow");
    unfollow.style.removeProperty("display");
    seguidoresAPI.delete(userId,sessionManager.getLoggedId())
    .then()
    .catch();
    window.location.href = "javascript:location.reload()";
}

document.addEventListener("DOMContentLoaded", main);
