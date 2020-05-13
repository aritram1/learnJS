iterable={
    constructor: function(name, ff){
        this.name=name;
        this.counter=0
    },
    [Symbol.Iterator]: function(){
        return {
            name: this.name,
            value: this.counter,
            done : false
        }
    },
    next: function(){
        this.counter++;
        return {
            name: this.name,
            value: this.counter,
            done : this.counter>3 ? true : false
        }
    }
}

// usage to be like
// c = new iterator('counter')
// console.log(`Iterator name is ${c.name}`);
// while (true){
//     nextval = c.next();
//     console.log('Value is ->' + nextval);
//     if (nextval.done)
//         break;
// }
