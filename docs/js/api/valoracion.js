"use_strict";
import { BASE_URL, requestOptions } from "./common.js";
const valoracionAPI = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/valoracion`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getById: function (valoracionId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/valoracion/${valoracionId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getByPhoto: function (photoId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/valoracion/photo/${photoId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getByUser: function (userId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/valoracion/user/${userId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getStatsByUser: function (userId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/valoracion/stats/user/${userId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    create: function(formData) {
        return new Promise(function(resolve, reject) {
            axios
                .post(`${BASE_URL}/valoracion`, formData, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    }
};
export { valoracionAPI };
