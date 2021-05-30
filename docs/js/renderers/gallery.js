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