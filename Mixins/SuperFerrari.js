// Mixins are cool way to borrow/copy functionality from another Object (class/function/object etc. to be specific)
// This also comes to rescue that multiple inheritances (aka functionality from multiple containers are not allowed
// in Javascript.

// Mottoh : Transform a car to a super car by adding HighTech to it \m/

//Let's first 'class'ify a Car with some realistic properties ;-)
class Car{
    constructor(name, color, wheels){
        this.color = color !== undefined ? color : 'transparent';
        this.name = name !== undefined ? name : 'Demo car';
        this.wheels = wheels !== undefined ? wheels : 4;
        this.ht = false; // (not a high tech car yet)
    }
    run(){
        console.log(`A ${this.color} ${this.name} running with ${this.wheels} wheels !`);
    }
    fly(){
        if(this.ht) 
            console.log(`See! The ${this.color} ${this.name} with ${this.wheels} wheels can now fly !`);
        else
            console.log(`${this.name} is not a high tech car yet! :(`);
    }
}

// What about running and flying a red ferrari?
const ferrari = new Car('Ferrari', 'red');
ferrari.run(); // Prints: A red Ferrari running with 4 wheels !
ferrari.fly(); // Prints : Ferrari is not a high tech car yet! :(

// Our poor red ferrari can not fly yet. Let's bring some high tech in action 
// so we can make our superferrari that can fly :)
const HighTech = {
    addWings(){
        this.ht = true; // Isn't it amazing "ht" property in Car class can be changed from here ;)
    }
}

// And let's make a superferrari now by mixin'g HighTech to our red Ferrari. 
// Object.assign = Secret (and only) sauce of Mixin
// After mixin, we can add wings to our ferrari so it can fly
const superFerrari = Object.assign(ferrari, HighTech);
superFerrari.addWings();
// Ferrari is now superFerrari

// Let's make it fly
superFerrari.fly(); //Prints : See! A Red Ferrari with 4 wheels can now fly !

// Great! Mottoh achieved! :)

// EOF = End of fun :)
