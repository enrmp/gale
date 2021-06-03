"use strict";
import { photoRenderer } from "/docs/js/renderers/photos.js";
import { parseHTML } from "/docs/js/utils/parseHTML.js";


const galleryRenderer = {
    asCardGallery: function (photos) {
        var grid = parseHTML('<div class="card-columns pb-5 h-fit"></div>');
        for (let photo of photos) {
            let card = photoRenderer.asCard(photo);
            grid.appendChild(card);
        }
        return grid;
    },

    asCardProfileGallery: function (photos) {
        var grid = parseHTML('<div class="container"></div>');
        var row = parseHTML('<div class="row"></div>');
        grid.appendChild(row);
        let counter = 0;
        for (let v of photos) {
            let card = photoRenderer.asProfileCard(v);
            row.appendChild(card);
            counter += 1;

            if (counter % 4 === 0) {
                row = parseHTML('<div class="row"></div>');
                grid.appendChild(row);
            }
        }
        return grid;
    },

    asExploraGallery: function (photos) {
            var grid = parseHTML(`<div class="row my-4"><h3 class="w-100 mb-3">${photos[0].nombre}</h3></div>`);
            var row = parseHTML('<div uk-slider="finite: true" class="w-100"><ul id="slider-cat" class="uk-slider-items"></ul></div>');
            grid.appendChild(row);
            let i=0;
            while(i<5){
                if(photos[i]===undefined){break;}
            let card = photoRenderer.asExplora(photos[i]);
            row.firstChild.appendChild(card);
        i++

        }
        row.firstChild.appendChild(parseHTML(`<li><a href="categoria.html?categoriaId=${photos[0].categoriaId}"<div class="img-6 b-gray p-2 px-3 ver-mas text-center">
        <p class="text-dark">Ver más</p>
    </div></a></li>`))
        return grid;
    },

    asCardValorationGallery: function (val) {
        var grid = parseHTML('<div class="container"></div>');
        var row = parseHTML('<div class="row"></div>');
        grid.appendChild(row);
        let counter = 0;
        for (let v of val) {
            let card = photoRenderer.asProfileValoration(v);
            row.appendChild(card);
            counter += 1;

            if (counter % 2 === 0) {
                row = parseHTML('<div class="row"></div>');
                grid.appendChild(row);
            }


        }
        return grid;
    }
};

export { galleryRenderer };