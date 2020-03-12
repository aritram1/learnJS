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