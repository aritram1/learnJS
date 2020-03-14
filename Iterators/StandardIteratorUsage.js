// Use of Symbol.iterator

// How do you understand if an object is iterable or not. The property identification is not reflective (meaning sometime 
// an object may be iterable but may lack an iterator). For iterable object, it must have a function (i.e. iterator function) 
// defined with key 'Symbol.iterator'. The iterator function on execution produces iterator object that is used to iterate 
// the Object. For collection type Objects, there will be a default iterator defined.

// Lets take an example with an Array. Welcome some students :)
let students = [
    {
        name: 'spiderman', 
        power: 'web'
    },
    {
        name: 'superman',
        power: 'fly'
    }
];

// We get the default iterator as defined in Array.prototype by getting its Symbol.iterator attribute and 
// then executing the resultant function. What we get in return is the iterator for the students array.
// The iterator will have two fixed properties - value and done. The object structure will be : 
// 
// {
//    value : Any, 
//    done : boolean
// } 
iterator = students[Symbol.iterator]();
console.log(`students data is iterable : ${iterator !== undefined}`); //Expected : true


// It is not mandatory every iterable object has an interable defined, but usually an iterable is defined for iterable objects.
// The function is available via the Symbol.iterator key. The iteration behavior an be changed by modifying this function. 
// The iterator will have the predefined next() function for iterations. The iteration behavior for an object can be 
// added/changed by changing it's iterator's next method. The iterator function looks like below.

// we will see how to make our own iterators for custom objects later.
/*
Symbol.iterator : function(){
    return {
        //some code
        next(){
            //some logic
            //return nextvalue
        }
    }
}
*/


// To get the first entry of the students list we call the next() method on the iterator. Note the value of done. Its a flag to mention if all values are consumed or not.
nextvalue = iterator.next();
console.log(`nextvalue is ${nextvalue}`);
/*
output:
{
    value:{
        name:spiderman, 
        power: web
    },
    done: false
}
*/

// Calling next() on the iterator produces next value;
nextvalue = iterator.next();
console.log(`Second value is : ${nextvalue}`);

// output:
// {
//     value:{
//         name:superman, 
//         power: fly
//     },
//     done: false
// }
// Note the done value is still false.


// Lets call next value. Since we have consumed all values the iterator will signal by setting done as true.
nextvalue = iterator.next();
console.log(nextvalue); //prints {value=undefined, done=true}

// Note the done value is true now. With a while loop we can show the values will all values rae produced. 
// With the done flag, we can break a loop indicating iteration is finished for the collection. 
// This is how iterables objects signal for loops when to finish the iteration. Similar StopIteration in py.
// if(nextvalue.done) break;

// Lets put all of them together with a new student :)
let morestudents = [{name: 'spiderman',power: 'web'},{name: 'superman',power: 'fly'},{name: 'Ironman', type:'wit'}];
itr = morestudents[Symbol.iterator](); //returns the iterator object
while(true){
    let nextvalue = itr.next();
    if(nextvalue.done) break;
    console.log(nextvalue);
}

// Expected
// { value: { name: 'spiderman', power: 'web' }, done: false }
// { value: { name: 'superman', power: 'fly' }, done: false }
// { value: { name: 'Ironman', type: 'wit' }, done: false }
