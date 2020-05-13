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
