# How to do AJAX call from Javascript using XMLHttpRequest

We need to define three parameters,
- the method,
- the endpoint and
- the operation type (can be synchronous or asynchronous)

```
const type = 'GET',
      endpoint = 'https://ghibliapi.herokuapp.com/films',
      async = true;
```

Also we will create a timeline object to capture how the requests are getting completed

```
let TIMELINE = {
    1: Date.now() //Initial time when the request started
};
```

First step is to create the Request. XMLHttpRequest is the base class for AJAX requests

```
let req = new XMLHttpRequest();
```

As second step we need to call open() with type, endpoint and whether sync/async. The three prameters we have already defined before.
```
req.open(type, endpoint, async);
```

As penultimate step we will use an existing hook : onreadystatechange(), a method that will allow us to pass a function to fire eveytime the 
request's state (i.e. readyState property) changes. The state can be between 0-4, the meanings are as follows :
- 0: request not initialized
- 1: server connection established
- 2: request received
- 3: processing request
- 4: request finished and response is ready

We capture when the readyState changes in our ```TIMELINE``` object.
```
req.onreadystatechange = function(){
    TIMELINE[this.readyState] = Date.now();
    if(this.readyState === 4){
        for (let rState in RESULT){
            console.log(`State ${rState} finished at ${RESULT[rState]}`);
        }
    }
}
```
There are other hooks (e.g. onabort etc) that can be used in similar way. 
```
req.onabort = function(){
    console.log('Aborted');
}
```

As final step we send the request by calling the send() method and proces sthe response subsequently.

```
req.send();
```

The data is extracted from ```responseText``` property anc can be converted to a string, if required.
```
let data = JSON.stringify(req.responseText);
```

The status is returned as string and can be extracted from ```status``` property. 
```
let status = req.status;
```
The usual three response codes are :
- 200: "OK"
- 403: "Forbidden"
- 404: "Not Found"

Have a look at printing the dat anad the status.
```
console.log('Status is ' + status + ' and Data is -> ' + JSON.parse(data));
```

This is a bit cumbersome process, fortunately there is a better alternative. Along with XMLHttpRequest object (XHR),
the fetch API can also fetch data using a simpler syntax. fetch() returns a promise which can be then  proimse.

// The usage is :
// fetch (API_Name) // this works similar to XMLHttpRequest.open(method, endpoint, [async, cred])
// .then() // if there is no error retrieved
// .catch() // if there is error while retrieving

// Lets take the same example as previous one (XHR example)

const endpoint = 'https://ghibliapi.herokuapp.com/films';
fetch(endpoint)
.then(response => {
if(response.status === 200){ //Expected status code 200 for success
response.json()
.then(data => {
//process response as "data"
console.log('Data to process->' + data);
});
}
})
.catch(error => {
console.log('Error is encountered' + error);
})

// References : https://developers.google.com/web/updates/2015/03/introduction-to-fetch
