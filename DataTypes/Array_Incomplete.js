// Here we will mention non-very-usual functions

// map and flatMap
// flatMap is same as using map and then flatten the output to one elevel down.

// Let's see with an example. Convert this messageArray to an array splitting with whitespaces.
msgArray = ["It's sunny in", "", "California"];

console.log(msgArray.map(x=>{return x.split(' ');}).flat());

// However with flatMap we can achieve the same like this.
console.log(msgArray.flatMap(x=>{x.split(' ')}));
