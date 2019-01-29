const axios = require('axios');

/*module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })

    return JSON.stringify(results.data);
};*/

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    });
    robject = {
        "data" : results.data,
        "status" : results.status,
        "statusText" : results.statusText,
        "headers" : results.headers,
        "requestHeader" : results.config.headers
    };
    //console.log(robject.data);
    console.log("status " + robject.status);
    console.log("statusText " + robject.statusText);
    console.log("headers " + JSON.stringify(robject.headers));
    console.log("requestHeader " + JSON.stringify(robject.requestHeader));
    return JSON.stringify(robject);
};
/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/
