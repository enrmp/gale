"use_strict";
import { BASE_URL, requestOptions } from "./common.js";
const inapropiadasAPI = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/inapropiadas`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getById: function (inapropiadasId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/inapropiadas/${inapropiadasId} `, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    create: function(formData) {
        return new Promise(function(resolve, reject) {
            axios
                .post(`${BASE_URL}/inapropiadas`, formData, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    update: function(inapropiadasId, formData) {
        return new Promise(function(resolve, reject) {
            axios
                .put(`${BASE_URL}/inapropiadas/${inapropiadasId}`, formData,
                    requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    delete: function(inapropiadasId) {
        return new Promise(function(resolve, reject) {
            axios
                .delete(`${BASE_URL}/inapropiadas/${inapropiadasId} `, requestOptions
                )
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
};
export { inapropiadasAPI };
