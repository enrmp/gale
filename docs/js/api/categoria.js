"use_strict";
import { BASE_URL, requestOptions } from "./common.js";
const categoriaAPI = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/categoria`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getById: function (categoriaId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/categoria/${categoriaId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    create: function(formData) {
        return new Promise(function(resolve, reject) {
            axios
                .post(`${BASE_URL}/categoria`, formData, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    update: function(categoriaId, formData) {
        return new Promise(function(resolve, reject) {
            axios
                .put(`${BASE_URL}/categoria/${categoriaId}`, formData,
                    requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    delete: function(categoriaId) {
        return new Promise(function(resolve, reject) {
            axios
                .delete(`${BASE_URL}/categoria/${categoriaId} `, requestOptions
                )
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
};
export { categoriaAPI };
