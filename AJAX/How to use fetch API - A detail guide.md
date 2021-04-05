# Fetch API 

A fetch API is an easy way to get and post data from/to a web-server. 

The method takes 2 required parameter namely 
- ```Endpoint``` i.e. the server endpoint from where the data to be retrieved/post and 
- ```method``` . Default value is ```GET```.
💡 : Possible options are : ```GET```, ```POST```, ```PUT```, ```DELETE```. Remember to use the values in CAPITAL Cases.

Let's take an example of how it can be presented in code. 


There are some default values of these specific properties. Let's see what they are :
Default value of mode is ```no-cors``` [We will go through the cross orogin resource share information in a next script]
DEfault value of method is ```GET```
```
const ENDPOINT = '/api/../example/data';
const METHOD = 'GET';
const MODE = 'no-cors';
const REDIRECT = 'follow';
```

The header and request body (for ```POST``` type requests) can be sent as part of optional second parameter. Authorization can be sent as part of the ```header``` object.
```
let HEADERS = new Headers({
  'Content-Type': 'text/plain',
  'X-My-Custom-Header': 'value-v',
  'Authorization': 'Bearer ' + TOKEN
});
const BODY = {
  'localTime' : new Date()
};
```
Let's break the code a bit. 
- The first part creates a ```Header``` object with important properties (```content-type```, ```Authorization```)
- The second part represents request body. It's simple now. Currently it sends only local time.

💡 : Watch for the specific property names like ````method```, ```mode``, ```headers``` or ```body```. Get refrained from referencing them with another name/property. They are part of standard API.

Let's call the fetch method now and log the response data and capture data if any - 

```
fetch(ENDPOINT, {
    method: METHOD,
    mode: MODE,           
    redirect: REDIRECT,   
    headers: HEADERS,
    body: BODY
})
```
Process the data with a ```.then```, ```.catch``` block.

```
.then(data =>{
    console.log(data);
})
.catch(error=>{
    console.log(error);
});

In next script we will go through how we can use 3rd party supporting libraries for efficient request response management.
```
# References:
- MDN on Header() built in object

//EOF = End of Fun ;)