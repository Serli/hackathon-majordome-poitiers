import fetch from 'node-fetch';

const HOST = 'https://elastic:E3kbrbV0Hgq3ZOqSlw9WK5c2@6a93b5d8f415012b8cf553cd59d419f8.us-east-1.aws.found.io:9243';

export const HTTP = {
    GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE:'DELETE',
};

export async function fetchService(endpointUrl, method = HTTP.GET, payload) {
    const url = `${HOST}${endpointUrl}`;
    const payloadBuild = JSON.stringify(payload);
    console.log('URL : ' + url);
    console.log('PAYLOAD : ' + payloadBuild);
    const result = await fetch(url, options(method, payloadBuild, 'application/json'));
    return result.json()
}

function options(method, payload, contentType) {
    return {
        method: method,
        body: payload,
        headers: {
            'Content-Type': contentType,
        }
    };
}