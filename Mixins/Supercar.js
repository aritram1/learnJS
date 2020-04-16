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
            console.log(`See! A ${this.color} ${this.name} with ${this.wheels} wheels can now fly !`);
        else
            console.log(`${this.name} is not a high tech car yet! :(`);
    }
    // status(){
    // if(this.ht) console.log(`Woo hoo! ${this.color} ${this.name} is a HT Car!`);
    // else console.log(`${this.name} is not a high tech car yet! :(`);
    // }
}

// It can be tested with
new Car().run(); //Prints : A transparent Demo car running with 4 wheels !

// What about a red ferrari?
const ferrari = new Car('Ferrari', 'red');
ferrari.run(); // Prints: A red Ferrari running with 4 wheels !
ferrari.fly(); // Prints : Ferrari is not a high tech car yet! :(

// Let's bring some high tech in action so we can make our superferrari that can fly :)
const HighTech = {
    addWings(){
        this.ht = true; // Isn't it amazing "ht" property in Car class can be changed from here ;)
    }
}

// And let's make a supercar now by mixin'g HighTech to the Car
// let superCar = Object.assign(new Car(), HighTech);
// supercar can run and fly
// superCar.run(); //Prints : A transparent Demo car running with 4 wheels !
// superCar.fly(); //Prints : See! A transparent Demo car with 4 wheels can now fly !

// Let's make our ferrari a super car that will fly
const superFerrari = Object.assign(ferrari, HighTech);
superFerrari.addWings();
// Ferrari is now superFerrari

//Lets make it fly
superFerrari.run(); //Prints : A Red Ferrari running with 4 wheels !
superFerrari.fly(); //Prints : See! A Red Ferrari with 4 wheels can now fly !

// End of fun :)
