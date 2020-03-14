// Use of Custom Iterator

// From the previous iterator topic we know how to use the standard [Symbol.iterator]
// key for an iterable object. Iterable Objects are mostly data stractures like 
// Array, Map, Set and other related variants. Here we will try with a non iterable object 
// and make it iterable with custom iterator definition.

// Lets start with some superpowers. We need to iterate through the superpowers object and we will use the
// new for-of loop. This loop is very useful when iterating Objects but it requires the object defines its 
// iterator.

// We will start with trying to access the "System.iterator" key value.

let superpowers = {
    getspideyweb(){
        return 'spideyweb';
    },
    getflypower(){
        return 'flypower';
    }
}

// This Object is not iterable yet. Lets check that.
try{
    iterator = superpowers[Symbol.iterator]();
}catch(e){ console.log(`Error : ${e}`);} 

// As we try to access the iterator function OR the iterator Object for superpowers
// it prouces a type error. "TypeError: superpowers is not iterable"
// console.log(superpowers[Symbol.iterator]);
// for(powers of superpowers){
//     console.log(powers);
// }

// 1. Let's define an iterator for the superpowers object so that we can iterate through the object's 
// properties. The Symbol.iterator key must be present in the Object and it should refer to a funciton.
// 2. The function is supposed to return an iterator which will have a predefined next() method
// that gets everytime the Object is iterated via a loop. We will test with for-of type loop.

// The three entities are very much related and we will understand them together. the skeleton code should look this:
// superpowers[Symbol.iterator] = function(){
//     return {
//         //some code
//         next(){
//             //some more code
//             return iteratorObject;
//         }
//     }
// }

// Lets take a closer look.
// 1. We are first adding the Symbol.iterator key to the superpowers object.
// 2. We can override the next method and add logic on what to return as iterator.
// 3, The iterator will always expect the json format to have two prperties : value (Object) and done(Boolean). 
// 4. When all values are exhausted the done value becomes true.

superpowers[Symbol.iterator] =  function(){ //Iterator function
        return {    //Iterator Object
            count: 0,
            next(){ //next() method defined
                let next;
                if(this.count < 5){
                    next =  {
                        value : this.count+=1,       //Value that gets returned, of type ANY
                        done : false            // This is set to true once the all values are iteratied
                    }
                }
                else{
                    next = {
                        value : 'some value',   //Value that gets returned, of type ANY
                        done: true              //it indicates all the records are exhauseted.
                    }
                }
                this.count=+1;
                return next;
            }
        }
}

// Lets test now if the custom iterator is working. We will first check if the custom iterator object is returning 
// data correctly. then we will try printing the values using next() method.
console.log(`Now the object is iterable : ${superpowers[Symbol.iterator]() !== undefined}`);
iterator = superpowers[Symbol.iterator]();

console.log(iterator.next()); //{ value: 1, done: false }
console.log(iterator.next()); //{ value: 2, done: false }
console.log(iterator.next()); //{ value: 3, done: false }

// We have just created a counter to create counts :)

// The iterator fucntion and the next() method both are interesting hooks to modify or define new 
// iteraing behaviors for custom objects. We will have another look on this in Generator.

//For the time being we will try iterating the powers in our super object.
