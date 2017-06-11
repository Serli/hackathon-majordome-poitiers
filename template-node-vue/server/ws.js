const fetch = require('node-fetch');

const get = (url) => {
    return fetch(url)
        .then(r => r.json())
};

const post = (url, body) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),

    }).then(r => r.json());
};

const put = (url, body) => {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),

    }).then(r => r.json());
};

const del = (url, body) => {
    if (!body) {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        }).then(r => r.json());
    }
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),

    }).then(r => r.json());
};

module.exports = {get, post, put, delete: del};
