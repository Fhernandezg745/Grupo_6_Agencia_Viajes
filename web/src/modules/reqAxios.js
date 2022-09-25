const axios = require('axios');

module.exports = async(url, method = 'get', data = null) => {
    let config = {};
    config.method = method;
    config.url = url;
    if (method != 'GET') {
        config.headers = {
            'content-type': 'application/json',
        }
        config.data = data;
    }

    let response = await axios(config);
    return response.data
}