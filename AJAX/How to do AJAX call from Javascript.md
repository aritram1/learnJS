# How to do AJAX call from Javascript
Here we will discuss 2 ways to create ajax requests with vanilla javascript i.e. built in objects/methods.
- with XMLHttpRequest, follows a callback based approach
- with fetch API, which has a simpler syntax and follows a promise based approach

Let's see both in details.
## Using XMLHttpRequest

We need to define three parameters to use with XMLHttpRequest object (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- the method (can be ```GET```, ```PUT```, ```POST``` etc),
- the endpoint
- if the operation is async (possible operation sare sync and async - default is async)

```
const type = 'GET',
      endpoint = 'https://ghibliapi.herokuapp.com/films',
      async = true;
```

Also we will create a timeline object to capture the timestamps as the request passes through different states.
```
let TIMELINE = [{
    'start' : new Date() //Initial time when the request started
}];    
```

First step is to create the Request. ```XMLHttpRequest``` is the base class for making an AJAX requests (implicitly or explicitly)

```
let req = new XMLHttpRequest();
```

As second step we need to call open() method to initialize the request. The type, endpoint and operation type (whether sync/async) are three prameters we have already defined before. We are using a sample film library hosted in heroku to get the data.
```
req.open(type, endpoint, async);
```

As penultimate step we will use an existing hook : onreadystatechange(), a method that will allow us to pass a function to fire eveytime the 
request's state (i.e. it's readyState property) changes. The state can be a numeric value between 0-4, which mean :
- 0: request is not initialized yet
- 1: server connection is established
- 2: request is received
- 3: processing request
- 4: request finished and response is ready to process

We define the hook and pass our method that captures the timestamp in ```TIMELINE``` object.
```
req.onreadystatechange = function(){
    for (let rState in RESULT){
        TIMELINE.push({
            [rState] : new Date();
        });
        if(rState === 0) console.log(`request started at ${new Date()}`);
        if(rState === 4) console.log(`request completed at ${new Date()}`);
    }
}
```
Note : If the request is aborted in between, an ```onabort``` function helps to handle the consequences.
```
req.onabort = function(){
    console.log('Aborted');
}
```

As final step we send the request by calling the send() method and proces the response subsequently.  The status is returned as string and can be extracted from ```status``` property.  We check for only '200' status code here. Some others are - 
- 403: "Forbidden"
- 404: "Not Found"
- etc...

The response is extracted from ```responseText``` property and can be converted to a string with ```JSON.stringify(req.responseText)``` as required. Have a look at printing the data and the status.

```
req.send();
let status = req.status;
let data = JSON.stringify(req.responseText);
console.log('Status is ' + status + ' and Data is -> ' + data); //  Expects status='200', data={...}
```

## Using fetch API

For brevity, there is a better alternative. Along with XMLHttpRequest object (XHR),the fetch API can also fetch data using a simpler syntax. fetch() returns a promise which can be then handled with ```.then```, ```.catch```.

The usage is :
```fetch (method, endpoint, [options])``` this works similar to ```XMLHttpRequest.open(method, endpoint, [async, cred])```.
Three things to note to make it look simpler :
- method is not mandatory, default value is ```GET```,
- Endpoint is mandatory,
- options is not mandatory.

fetch() returns a promise which can be handled with 
- ```.then()``` if there is no error retrieved
- ```.catch()``` if there is error while retrieving or while executing inside ```.then``` block.

Let's take the same example as XHR example and simplify with data. Note the line marked with *

```
const endpoint = 'https://ghibliapi.herokuapp.com/films';
fetch(endpoint)
.then(response => {
    if(response.status === 200){ //return the response only for status code 200 OK
        return response.json(); // *the json method returns another promise which can be chained.
    }
})
.then(data => {
    //process response as "data"
    console.log('Data to process->' + data);
})
.catch(error => {
    console.log('Error is encountered' + error);
})
```

# References
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
- https://developers.google.com/web/updates/2015/03/introduction-to-fetch

#EOF End of Fun :)
