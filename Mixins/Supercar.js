//Let's 'class'ify a Car

class Car{
    constructor(name, color, wheels){
        this.color = color !== undefined ? color : 'transparent';
        this.name = name !== undefined ? name : 'Demo car';
        this.wheels = wheels !== undefined ? wheels : 4;
    }
    run(){
        console.log(`A ${this.color} ${this.name} running with ${this.wheels} wheels !`);
    }
}

// It can be tested with
new Car().run(); //Prints : A transparent Demo car running with 4 wheels !
new Car('Truck', 'grey', 12).run(); // Prints: A grey Truck running with Truck wheels !

// Let's have some high tech in action
const HighTech = {
    fly(){
        console.log(`See! A ${this.color} ${this.name} with ${this.wheels} wheels can now fly !`);    
    }
}

// And let's make a supercar mixin'g HighTech to the Car
let superCar = Object.assign(new Car(), HighTech);
let superFerrari = Object.assign(new Car('Ferrari', 'Red'), HighTech);

// supercar can run and fly
superCar.run(); //Prints : A transparent Demo car running with 4 wheels !
superCar.fly(); //Prints : See! A transparent Demo car with 4 wheels can now fly !

// Ferrari is now superFerrari
superFerrari.run(); //Prints : A Red Ferrari running with 4 wheels !
superFerrari.fly(); //Prints : See! A Red Ferrari with 4 wheels can now fly !

// End of fun :)
