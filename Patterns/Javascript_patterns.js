console.clear();

// factory pattern
const personfactory = function(name){
	temp = {};
  	temp.name = name;
  	temp.getname = function(){
		return this.name;
	}
  return temp;
}

let aritra = personfactory('aritra');
let bhai = personfactory('bhai');
console.log('--------Factory pattern-----------');
console.log(aritra.getname());
console.log(bhai.getname());

//constructor pattern
const personconstructor = function(name){
	this.name = name;
  	this.getname = function(){
		return this.name;
	}
}

//see the usage of new()
let _aritra = new personconstructor('_aritra');
let _bhai = new personconstructor('_bhai');
console.log('--------Constructor pattern-----------');
console.log(_aritra.getname());
console.log(_bhai.getname());


//prototyping pattern
const personprototype = function(name){
	this.name = name;
	//methods are prototyped, so new can be used to instantiate a record
	//But now each object has its own getname method, which is not desired
	personprototype.prototype.getname = function(){
		return this.name;
	}
}

let __aritra = new personprototype('__aritra');
let __bhai = new personprototype('__bhai');
console.log('--------Prototyping pattern-----------');
console.log(__aritra.getname());
console.log(__bhai.getname());

//dynamic prototyping pattern
const personprototypedynamic = function(){
	personprototypedynamic.prototype.name = name;

	//Now will have one copy of the method even if there are many prototype records
	if(typeof(personprototype.getname) != 'function'){
  		personprototype.prototype.getname = function(){
  			return this.name;
		}	  
	}
}
let ___aritra = new personprototype('__aritra');
let ___bhai = new personprototype('__bhai');
console.log('--------Dynamic prototyping pattern-----------');
console.log(___aritra.getname());
console.log(___bhai.getname());