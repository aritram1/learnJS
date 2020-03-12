//TEST THE PROXY PATTERN
//Proxy pattern is recognized with this type 
//const proxyObject = new Proxy(source, target);

//Any operation invoked on proxy Object, will first check if the operation is possible on source object.
//If it is not applicable then it moves to target object for a possible operation
//Else it assigns the property a value "undefined"

//Lets test that

const source = {
    name: 'test source'
}
const handler = {              //The fallback object
    name: 'test handler',      //This prop is present in source
    type: 'test object',       //This prop is NOT present in source
    get: function(obj, prop){
        console.log(`inside the getter. The object is ${JSON.stringify(obj)} property is : ${prop}`);
        value = prop in obj ? obj[prop] : this[prop];   //Hence overridden
        return value;
    }
}

proxyObject = new Proxy(source, handler);

//Test the values
const assert = function(actual, expected){
    if(actual !== expected) 
        throw `Error : Expected ${expected} but actual ${actual}`;
}
assert(proxyObject.name, 'test source');
assert(proxyObject.type, 'handler type test object');

 https://github.com/aritram1/JSsnippets.git