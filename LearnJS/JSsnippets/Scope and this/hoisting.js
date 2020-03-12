// In same scope a variable can not be declared twice (with `let` or `var`)
// However it can be redeclared every time as a new variable with `let` inside a {} block which is 
// same as saying, variable declared with `var` outside, can be overridden with `let` inside
var x = 10; 
if(true){
    //var x = 15 //Error : with `var` variable can not be declared twice
    let x = 12;  //Allowed, with `let` inside a block {}, a new variable x is created
    console.log(x); //prints local x i.e. 12
    if(true){
        console.log(x) //prints available x i.e. 12
        let x = 17; //a new local x is again created
        console.log(x); //prints local x i.e. 17
    }
    console.log(x); //prints local x again i.e. 12
}
console.log(v);     //prints global x i.e. 10

// variable declared with `let` have block scope hence it is 
// available to the block/subblocks and not outside blocks
let v = 10;
if(true){
  console.log(v); //prints 10
  v = 12;         //updates same variable
  console.log(v); //prints 12
  if(true){
      console.log();
  }
  let another_v = 17; //new variable declared inside the block
  var another_var = 20
}
console.log(v); //prints 12
console.log(another_var); //prints 20, because it is declared with `var`
console.log(another_v);  //not accessible because it is declared with `let`


//Old Copy 

console.clear();

// Scenario 1  => variable v is used before it is defined, still no error reported //
console.log(v); // prints Undefined
var v;

// Scenario 2 => variable v is defined first and then used //
var p;
console.log(p); //Undefined
p = 12;

//So for hoisting : the definition of v has literally hoisted up to global scope! >:D
