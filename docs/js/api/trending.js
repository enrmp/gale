"use_strict";
import { BASE_URL, requestOptions } from "./common.js";
const trendingAPI = {
    getCategorias: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/trending/categorias`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getPhotosValor: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/trending/photosValor`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getComentarios: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/trending/comentarios`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getSeguidos: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/trending/seguidos`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getUsersValor: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/trending/usersValor`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
};
export { trendingAPI };
