//Let's build a eval function that can also handle callback

//code = the js code that requires to be evaluated
//cb = a callback function that wil be executed after the js code is evaluated
//er = optional parameter (only mandatory for rejection scenario)

myeval = function(code, cb, rejectError){
    return new Promise((resolve, reject) => {
        result = eval(code);
        
        //The following line is applicable only to resolve/reject scenario
        result ? resolve ({'cb' : cb, 'data' : result}) : reject({'cb' : cb, 'er' : rejectError}); //watch both the object structures
    })
    .then((arg) =>{
        //this block handles the resolve scenario
        if(arg.cb && arg.data) arg.cb(arg.data);
    })
    .catch((err)=>{
        //this block handles both rejection and error scenario
        if(err){
            if(err.cb && err.er) err.cb(err.er);    //rejection scenario
            else console.log('Error occurred within the Promise : ', err);  //error scenario
        }
    });
}

//Let's define a sample callback
function callback(msg){
    console.log('result :', msg);
    console.log('finished');
}

//Let's test with resolve scenario, the code to evaluate is valid js code.
function testResolve(){
    myeval('new Date()', callback);
}

//Let's test with reject scenario, rejection comment is mandatory
function testReject(rejectioncomment){
  myeval('console.log("Rejection scenario testing")', callback, rejectioncomment);   
}

//Let's test with an error scenario e.g. we are trying to eval(new ABC()) that throws an error.
//Error comment is not provided because error text to be received from the Promise itself.
function testError(){
  myeval('new ABC()', callback);   
}

console.log('started');
testResolve();
/* Expected output in order : See callback is working :) */
// started
// result : Thu Apr 30 2020 00:53:35 GMT+0530 (India Standard Time)
// finished

testReject('Rejection Comment!');
// started
// Rejection scenario testing
// Rejection Comment!
// finished

testError();
// started [See execution orders are maintained :)]
// Error occurred within the Promise :  ReferenceError: ABC is not defined
//    at eval (eval at <anonymous> (local-ntp.html:9), <anonymous>:1:1)
//    at <anonymous>:9:15
//    at new Promise (<anonymous>)
//    at myeval (<anonymous>:8:12)
//    at testError (<anonymous>:51:3)
//    at <anonymous>:68:1

// End of fun :)
