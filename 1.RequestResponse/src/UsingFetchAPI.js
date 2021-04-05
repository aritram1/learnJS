// Along with XMLHttpRequest object (XHR), the fetch API can also fetch data using a proimse.

// The usage is : 
// fetch (API_Name) // this works similar to XMLHttpRequest.open(method, endpoint, [async, cred])
// .then()          // if there is no error retrieved
// .catch()         // if there is error while retrieving

// Lets take the same example as previous one (XHR example)

const endpoint = 'https://ghibliapi.herokuapp.com/films';
fetch(endpoint)
.then(response => {
    if(response.status === 200){  //Expected status code 200 for success
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
