// Fetch API can be used to retrieve data from a web-service. The method takes 2 parameters
// Endpoint : The server endpoint from where the data to be retrieved

const ENDPOINT = '/api/../example/data';
const METHOD = 'POST';  //  Possible options are : GET, POST, PUT, DELETE [Use CAPITAL Cases]
const MODE = 'no-cors';
const REDIRECT = 'follow';
let HEADERS = new Headers({  // Header options can be passed in this way
  'Content-Type': 'text/plain',
  'X-My-Custom-Header': 'value-v', // Custom header value
  'Authorization': 'Bearer ' + TOKEN
});
const BODY = {
  'localTime' : new Date()
};

fetch(ENDPOINT, {
    method: METHOD,       //  DEFAULT is GET
    mode: MODE,           //  DEFAULT no-cors
    redirect: REDIRECT,   //
    headers: HEADERS,
    body: BODY
})
.then(data =>{
    console.log(data);
})
.catch(error=>{
    console.log(error);
});
