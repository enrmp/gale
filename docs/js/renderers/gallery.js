"use strict";
import { photoRenderer } from "/docs/js/renderers/photos.js";
import { parseHTML } from "/docs/js/utils/parseHTML.js";


const galleryRenderer = {
    asCardGallery: function(photos){
    var grid = parseHTML('<div class="card-columns pb-5 h-fit"></div>');
        for (let photo of photos){
            let card = photoRenderer.asCard(photo);
            grid.appendChild(card);
        }
        return grid;
    }
};

export {galleryRenderer};