"use_strict";
import { BASE_URL, requestOptions } from "./common.js";
const photoscategoriaAPI = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/photoscategoria`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getById: function (phCategoriaId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/photoscategoria/${phCategoriaId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getByPhoto: function (photoId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/photoscategoria/photo/${photoId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getByCategoria: function (categoriaId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/photoscategoria/categoria/${categoriaId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    create: function(formData) {
        return new Promise(function(resolve, reject) {
            axios
                .post(`${BASE_URL}/photoscategoria`, formData, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    update: function(categoriaId, formData) {
        return new Promise(function(resolve, reject) {
            axios
                .put(`${BASE_URL}/photoscategoria/${categoriaId}`, formData,
                    requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    delete: function(categoriaId,photoId) {
        return new Promise(function(resolve, reject) {
            axios
                .delete(`${BASE_URL}/photoscategoria/${categoriaId}/${photoId} `, requestOptions
                )
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
};
export { photoscategoriaAPI };
