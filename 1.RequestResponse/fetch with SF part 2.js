//Declare the credentialsendpoint = 'https://login.salesforce.com/services/oauth2/token';
client_id ='3MVG9CVKiXR7Ri5rvrUq4agf146ewgy.9HnS7OcaWMzpJrL63x3HZjLjY_ShcpMKfx.0C6h1ojd8EOyWkt7dV';
client_secret = '';
username = 'aritram1@gmail.com';
password = '';
grant_type = 'password';
auth_url = 'https://login.salesforce.com/services/oauth2/token';

let token='';
let instance_url='https://aritramukherjee-dev-ed.my.salesforce.com';
let account;let contacts=[];

function connect(){
    var data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("client_id", client_id);
    data.append("client_secret", client_secret);
    data.append("grant_type", grant_type);
    fetch(auth_url,{
        method: 'POST',
        body : data
    })
    .then(response=>{
      console.log('Connect response received!');
      return response.text();
    })
    .then(data=>{
	  console.log('Connect response processed!');
      token = JSON.parse(data).access_token;  
      instance_url = JSON.parse(data).instance_url;
      console.log('Token : ' + token);
      console.log('instance_url : ' + instance_url);
      ////////////////////////////////////////
      testQuery();
      ///////////////////////////////////////
    })
    .catch(error=>{
      console.log('Error : ' + error);
    });    
}

function testQuery(){
    let query = 'SELECT name from Account limit 10'.replaceAll(' ', '+');
    let endpoint = instance_url + '/services/data/v51.0/query/?q=' + query; 
    console.dir('Inside testQuery(). ep is=>' + endpoint);
    token = '00D80000000L1em!AQsAQGrdjRg0s9pQwnCuRB2ygHBc0vFEm58rvtqFFE9bTbvUN.KfQWUJ_QI0HoCZHuYGtorWaRUeNrXRi1Vv9nrLj6CkGvdS';
console.log('Token passed as =>' + token);
    fetch(endpoint,{
        method: 'GET',
        header: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response=>{
      console.dir('Account response received!');
      return response.text();
    })
    .then(data=>{
      console.dir('Account response processed!');
      console.log('acc => ' + data);
      //account = JSON.parse(data).access_token;  
    })
    .catch(error=>{
      console.log('Error : ' + error);
    });   

}

 function test(){
	console.log('Inside test()');
//     connect()
//     .then(x => testQuery());
//     let c =  connect();
	let t =  testQuery();
}

test();
