//Lets discuss what a closure is

//For JS programming, the variable is accessible within the block it is declared. If a variable is declared outside
//a function, the variable should have not been accessible within the function - Unless Closures would have helped us.
//Such variable accessing is acheived by Closure.

//Let's define a function which takes onenumber and adds 15 to it. Watch the function does not return a value, 
//rather it returns a function - waiting to be executed and hence the variables which are required by the function
//are passed to the function as closure variable

//Let's write the function

const add15ToIt = function(number){
  const adder = 15;
  return function(){
    return number+adder;
  }
}

// Note the adder variable is not passed inside the function yet, it is available as closure.

console.dir(add15ToIt());

//If we inspect the function returned, in developer console, we can see, a closure variable {adder:15} 
//is returned with the anonymous function to use it while executing

//Noice :)
