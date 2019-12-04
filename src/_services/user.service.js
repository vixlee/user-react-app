import config from 'config';
import { authHeader } from '../_helpers';
const axios = require('axios');

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

async function login(email, password) {
    try {
        const response = await axios({
            method: 'POST',
            url: `${config.apiUrl}/login`,
            data: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log("Response :", response.data);
        localStorage.setItem('Access-Token', response.data.access_token);
        handleResponse(response);
    }
    catch (error) {
        console.log("Error", error.message);
    }    
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

async function register(user) {
    try {
        const response = await axios({
            method: 'POST',
            url: `${config.apiUrl}/sign-up`,
            data: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        });
        handleResponse(response);
    }
    catch (error) {
        console.log("Error", error.message);
    }    
}


function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
