//to test promise

testnum = function(num){
    return new Promise((res, rej) => {
        if(num > 200){
            res('greater than 200');
        }
        else if(num > 100){
            res('greater than 100');
        }
        else{
            return new Promise((rs,rj)=>{
                if(num>50) 
                    rs('greater than 50');
                else 
                    rj('must be greater than 50');
            });
        }
    })
    .then(result => {
        console.log('hello');
        console.log('hello2', result);
    });
}
testnum(300);
// output
// VM1676:19 hello
// VM1676:20 hello2 greater than 200
// Promise {<resolved>: undefined}
