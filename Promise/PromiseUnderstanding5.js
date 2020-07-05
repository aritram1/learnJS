var testnum = function(num){
    return new Promise((res, rej) => {
        result = {num: num};
        if(num == 200){
            result.msg = 'resolved because it is equal to 200';
            res(result);
        }
        else if(num == 100){
            result.msg = 'resolved because it is equal to 100';
            res(result);
        }
        else if(num == 75){
            result.msg = 'rejected because it is equal to 75';
            rej(result);
        }
        else{
            return new Promise((rs,rj)=>{
                if(num == 50){
                    result.msg='resolved because it is  equal to 50';
                    rs(result);
                }
                else 
                    result.msg='rejected because it is not in range';
                    rj(result);
            })
            .then(result => handleSuccessd(result))
            .catch(error => handleFailure(error))
        }
    })
    .then(result => handleSuccess2(result))
    .catch(error => handleFailure2(error))
}

handleSuccess = result => {
    console.log(`Resolved : Num=${result.num} and it is ${result.msg}`)
}
handleSuccess2 = result => {
    console.log(`Resolved2 : Num=${result.num} and it is ${result.msg}`)
}
handleFailure = result => {
    console.log(`Rejected : Num=${result.num} and it is ${result.msg}`)
}
handleFailure2 = result => {
    console.log(`Rejected2 : Num=${result.num} and it is ${result.msg}`)
}
//Let's test it
testnum(200);
testnum(100);
testnum(75);
testnum(50);
testnum(25);

// Correct outputs:
// Resolved2 : Num=200 and it is resolved because it is equal to 200
// Resolved2 : Num=100 and it is resolved because it is equal to 100
// Resolved : Num=50 and it is resolved because it is  equal to 50
// Rejected2 : Num=75 and it is rejected because it is equal to 75
// Rejected : Num=25 and it is rejected because it is not in range
