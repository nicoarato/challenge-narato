
const https = require('https');
const variables = require('./environments/variables')
const URL_MELI = variables.__URL_MELI;
const MAX_LIMIT = variables.MAX_LIMIT;

function request(url) {
    return new Promise((resolve, reject) => {
        let body = '';

        https
            .get(url, response => {
                response.on('data', chunk => {
                    body += chunk;
                });
                response.on('end', () => {

                    try {
                        if (response.statusCode === 200) {
                            const json = JSON.parse(body);
                            resolve(json);
                        }
                        else {
                            console.log('status: ', response.statusCode);
                        }
                    }
                    catch (e) {
                        console.log('Error parsing JSON!');
                        reject(e)
                    }
                });
            })
            .on('error', error => { console.log(error), reject() });
    });
}

exports.search = query => {
    return request(`${URL_MELI}/sites/MLA/search?q=${query}&limit=${MAX_LIMIT}`);
};

exports.getItemData = query => {
    return Promise.all([
        request(`${URL_MELI}/items/${query}`),
        request(`${URL_MELI}/items/${query}/description`)
    ]);
};

exports.getCategory = query => {
    // return request(`${URL_MELI}/categories/${query}`)
    return request(`https://api.mercadolibre.com/categories/MLA1002`)
}