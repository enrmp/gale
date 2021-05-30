"use strict";
import { parseHTML } from "/docs/js/utils/parseHTML.js";

const inapropiadasRenderer = {
    asPill: function (inapropiadas) {
        let html = `     
        <div class="p-2 px-3 text-center bg-gray mx-1 rounded-pill"><p class="m-0 fs-3 cat"><strong>${inapropiadas.palabra}</strong></p></div>
    `;
        let newPill = parseHTML(html);
        return newPill;
    }
    }



export { inapropiadasRenderer };