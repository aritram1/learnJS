# Fetch API 

A fetch API is an easy way to get and post data from/to a web-server. 

The method takes 2 required parameter namely 
- ```Endpoint``` i.e. the server endpoint from where the data to be retrieved/post and 
- ```method``` . Default value is ```GET```.
💡 : Possible options are : ```GET```, ```POST```, ```PUT```, ```DELETE```. Remember to use the values in CAPITAL Cases.

Let's take an example of how it can be presented in code. 

The header and request body (for ```POST``` type requests) can be sent as part of optional second parameter.

Default value of mode is ```no-cors```

```
const ENDPOINT = '/api/../example/data';
const METHOD = 'GET';
const MODE = 'no-cors';
const REDIRECT = 'follow';
```

Authorization can be sent as part of the optional second parameter.
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

```
fetch(ENDPOINT, {
    method: METHOD,       //  DEFAULT is GET
    mode: MODE,           //  DEFAULT no-cors
    redirect: REDIRECT,   //
    headers: HEADERS,
    body: BODY
})
```

```
.then(data =>{
    console.log(data);
})
.catch(error=>{
    console.log(error);
});
```

//EOF = End of Fun ;)