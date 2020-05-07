// This is the simplest example of call/apply and bind.

person = {
  name: 'Aritra',
  title: 'Mukherjee'
}
function greet(greeting, salutation){
    console.log (`Message : ${greeting} ${salutation} ${this.name} ${this.title}`);
}

// If we try calling greet() directly it does not produce the desired result
greet('Hello', 'Mr.')   // Output : Hello Mr. undefined

// Bind comes to rescue. We can create another function greet2 binding greet function to person object.
greet2 = greet.bind(person);
greet2('Hello', 'Mr.')   //Output : Hello Mr. Aritra Mukherjee

// Alternatively the same can be achieved directly using call and apply function. 
// Both the function works with exactly same syntax, only difference being 
// call() needs the arguments as explicit list, whereas apply() needs them within one array.
greet.call(person, 'Hello', 'Mr.')     //Output : Hello Mr. Aritra Mukherjee
greet.apply(person, ['Hello', 'Mr.'])  //Output : Hello Mr. Aritra Mukherjee

// End of fun
