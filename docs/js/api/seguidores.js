"use_strict";
import { BASE_URL, requestOptions } from "./common.js";
const seguidoresAPI = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/seguidores`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getSeguidores: function (seguidoresId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/seguidores/seguido/${seguidoId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getSeguidos: function (seguidorId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/seguidores/seguidor/${seguidorId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    create: function(formData) {
        return new Promise(function(resolve, reject) {
            axios
                .post(`${BASE_URL}/seguidores`, formData, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    delete: function(seguidoresId) {
        return new Promise(function(resolve, reject) {
            axios
                .delete(`${BASE_URL}/seguidores/${seguidoId}/${seguidorId} `, requestOptions
                )
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
};
export { seguidoresAPI };
