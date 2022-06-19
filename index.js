console.log("TESTEO")

var axios = require('axios');

var config = {
    methot: 'GET',
    url: 'https://rickandmortyapi.com/api/character/2',
    headers:{}
};
    
axios(config)
    .then(function (response){
    console.log(JSON.stringify(response.data));        
        })
    .catch(function (error) {
    console.error(error);
        });
    