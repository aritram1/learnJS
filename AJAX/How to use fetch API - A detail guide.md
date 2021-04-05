# Fetch API 

A fetch API is an easy way to get and post data from/to a web-server. 

The method takes 1 required parameter namely ```Endpoint``` i.e. the server endpoint from where the data to be retrieved/post 
```
const ENDPOINT = '/api/../example/data';
```

Let's take an example of how to write fetch requests with an endpoint and a second optional parameter and process the response.

```
fetch(ENDPOINT, options)
.then()
.catch();
```

The second parameter ```options``` can be used to send ```method```, ```authorization-header```, ```content-type``` etc important attributes. It has a shape (with some default values) :
```
{
    method: 'GET'
    mode: 'no-cors'           
    redirect: 'follow',   
    headers: {
      content-type : 'application/json'
      ....
    },
    body: {
      foo: 'bar'
    }
    ...
}
```

Regarding default values, these properties has some default values that are defaulted if value is not provided - e.g. defautl value for ```method``` is ```GET```. Let's see what they are and define some variables to capture the values.
- Default value of mode is ```no-cors``` [We will go through the cross orogin resource share information or CORS in a future script]
- Default value of method is ```GET``` [Possible options are : ```GET```, ```POST```, ```PUT```, ```DELETE```. Remember to use the values in CAPITAL Cases.]
- Default value of redirect is ```follow```

```
const METHOD = 'GET';
const MODE = 'no-cors';
const REDIRECT = 'follow';
```

The header and request body can also be created likewise. Request body is not applicable for GET type requests. 

In below code the first part creates a ```Header``` object with important properties (```content-type```, ```Authorization```)
- The second part represents request body. It's simple now. Currently it sends only local time.
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
💡 : Watch for the specific property names like ```method```, ```mode```, ```headers``` or ```body```. Get refrained from referencing them with another name/property. They are part of standard API.


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
```
In next script we will go through how we can use 3rd party JS libraries (e.g axios) for better graded request response management.

# References:
- MDN on Header() built in object

//EOF = End of Fun ;)
