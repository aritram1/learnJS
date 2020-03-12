console.clear();

//Base animal class that has walk property defined
const animal = function(name) {
	this.name = name;
}
animal.prototype.walk = function(){
	console.log(this.name, "walking");
}

//base bird class that has fly property defined
const bird = function(name){
	this.name = name;
}
bird.prototype.fly = function(){
	console.log(this.name, "flying");
}

let dog = new animal('dog');
let sparrow = new bird('sparrow');
dog.walk();
sparrow.fly();

//animal subclass - mammals
//that has walk method available due to inheritance
//also it has a method called sleep at its own level.
const mammal = function(name){
	animal.call(this,name);
}
mammal.prototype = Object.create(animal.prototype); //set parent as animal.
mammal.prototype.sleep = function(){                //new method added after initial prototype is deinfed
	console.log(this.name, "sleeping");
}
man = new mammal('man');
man.sleep();

//Challenge : to define multiple inheritane
//since we need superhero character = who can walk and fly
const superhero = function(name){
	animal.call(this,name);
}
//assign parent as animal object - for now
superhero.prototype = Object.create(animal.prototype);

//Set parent as bird too. That is not working now.
//superhero.prototype = Object.assign(this, bird.prototype);
let batman = new superhero('batman');
console.dir(batman);
batman.walk(); //works
//batman.fly(); //does not work
