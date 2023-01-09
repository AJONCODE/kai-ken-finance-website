const axios = require('axios');

export const pinJSONToIPFS = (JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: 'dba4ce6fa4cc5cd13ff4',
                pinata_secret_api_key: 'fcf42e2a8845462fab0b4cd10b333bf2589cdd6644caff80a4a915b331cda675 ',
                
            }
        })
        .then(function (response) {
            //handle response hereaccc
            return response
        })
        .catch(function (error) {
            //handle error here
            //alert(error)
        });
};