// Array destructuring

// As we know the array can be destructured using ... spread operator e.g. 
let superheroes = ['batman', 'superman'], moresuperheroes = ['spiderman', ['Batul', 'Shonku']]
console.log(`All superheroes : ${[...superheroes, ...moresuperheroes]}`)
// outputs : All superheroes : batman,superman,spiderman,Batul,Shonku
// Watch how it flattens any array

// Object destructuring

// Let's see how destructuring and ...rest oeprator works on an object and within a method argument
person = {
    name : 'aritra',
    address : {
        city : 'kolkata',
        state : 'wb'
    },
    places : ['home', 'office', 'playground'],
    games : ['football', 'cricket']
}
// For desctructuring the  variable names must EXACTLY match
let {name : fullname, games} = person;
console.log(`Name is : ${fullname} and plays : ${games}`);
// outputs : Name is : aritra and plays : football,cricket


// Let's see the destructuring and ...rest oeprator work within a method argument
function show({name , address : {city}, places , ...rest }){ 
    console.log(`${name} lives in ${city} and go to these places : ${places}`);
    console.log(`There are more information here : ${rest.valueOf()}`);
}
show(person);
// Outputs : aritra lives in kolkata and go to these places : home,office,playground

// watch how .... can be used both as a spread oeprator and rest operator

// EOFun :)