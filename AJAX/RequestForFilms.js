// How to do AJAX call from Javascript using XMLHttpRequest

//Define the method, endpoint and oepration type (synchronous or asynchronous)
//Also define a timeline object to capture how the request gets completed
const type = 'GET', endpoint = 'https://ghibliapi.herokuapp.com/films', async = true;
let TIMELINE = {
    1: Date.now() //Initial time when the request started
};

//XMLHttpRequest is the base class for AJAX requests
let req = new XMLHttpRequest();

//Open with method type, endpoint and the async type as true. To make a synchronous request 
// the type to be set as true
req.open(type, endpoint, async);

//This hook allows to write a function that gets fired when the readyState property changes
// The avialable ready states are
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
req.onreadystatechange = function(){
    TIMELINE[this.readyState] = Date.now();

    if(this.readyState === 4){
        for (let rState in RESULT){
            console.log(`State ${rState} finished at ${RESULT[rState]}`);
        }
    }
}

//Send the request
req.send();

//Returns the response data as a string
let data = req.responseText;

// status	Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
let status = req.status;


console.log(status);    //200
console.log(JSON.parse(req.responseText)); //data is provided in Object format

// Request - abort 
// Not working yet
// req.onabort = function(){
//     console.log('Aborted');
// }
