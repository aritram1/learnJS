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