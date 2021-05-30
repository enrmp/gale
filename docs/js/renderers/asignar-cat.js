"use strict";
import { categoriaRenderer } from "/docs/js/renderers/categoria.js";
import { parseHTML } from "/docs/js/utils/parseHTML.js";


const asignarRenderer = {
    asForm: function (categoria) {
        var grid = parseHTML(`                <form id="form-categoria">
        <div class="row p-4" id="cats"> 

        </div> 

    </div>
    <div class="text-center mb-2">
    <button type="submit" class="btn btn-dark rounded-pill w-50 mt-5 p-2 bg-black text-uppercase"><strong>Compartir imagen</strong></button>
    </div></form>`);
        let categoriaContainer = grid.querySelector("#cats");
        for (let cat of categoria) {
            let categoria = categoriaRenderer.asForm(cat);
            categoriaContainer.appendChild(categoria);
        }

        return grid;
    }
};

export { asignarRenderer };