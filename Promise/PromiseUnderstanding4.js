var testnum = function(num){
    return new Promise((res, rej) => {
        result = {};
        if(num > 200){
            result.msg = 'greater than 200';
            res(result);
        }
        else if(num > 100){
            result.msg = 'greater than 100';
            res(result);
        }
        else if(num > 75){
            result.msg = 'can not be between 76-99';
            rej(result);
        }
        else{
            return new Promise((rs,rj)=>{
                if(num>50){
                    result.msg='greater than 50';
                    rs(passIt(result));
                }
                else 
                    result.msg='can not be between must be greater than 50';
                    rj(passIt(result));
            })
            .then(_data=> console.log('Data is : ' + _data.msg))
            .catch(_err => console.log('Err0r : ' + _err.msg));
        }
    })
    .then(_data => {
        console.log('Data is : ' + _data.msg);
    })
    .catch(_err =>{
        console.log('Error : ' + _err.msg);
    })
}
passIt = msg => msg;

//Let's test it
testnum(300);
testnum(200);
testnum(100);
testnum(55);
testnum(25);

// Data is : greater than 200
// Data is : greater than 100
// Data is : greater than 50
// Error : can not be between 76-99
// Err0r : can not be between must be greater than 50
