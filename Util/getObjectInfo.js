// A function that takes an object and returns a map of dataype vs count

const getInfo = function (obj, availableTypes){
    result = {};
    for (i in obj){
        let propertyType = typeof obj[i];
        if(!availableTypes || availableTypes.includes(propertyType))
            result[propertyType] = propertyType in result ? result[propertyType] + 1 : 1;
    }
    return result;
}

 // To Test
 getInfo(this) // output {object: 154, number: 18, boolean: 2, string: 6, function: 50}
 getInfo(this, 'string'); //output {string: 6}
 getInfo(this, 'string, function'); //output {string: 6, function: 50}
 getInfo(this, 'random'); //output {}
 
 // EO Fun :)
