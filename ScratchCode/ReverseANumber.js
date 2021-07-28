let reverse = function(num){
    let negative;
    if(num==0){
        return num;
    }
    else if(num<0){
        num = num * -1;
        num = num + '';
        num = num.slice(1,num.length);
        negative = true;
    }
    else if(num > 0){
        num = num + '';
    }
    
    //reverse the string
    let output = '';
    console.log(num.length);
    for(let i=num.length-1; i >= 0;i--){
        console.log('numm[i]' + num[i]);
        output = output + num[i];
    }
    console.log('output=>' + output);
    m = parseInt(output);
    if(negative) m = -1*m;
    console.log(m);
}
console.log(reverse(0));
console.log(reverse(12345));
console.log(reverse(-34567)); //not working yet
console.log(reverse(789987));
console.log(reverse(50000));
