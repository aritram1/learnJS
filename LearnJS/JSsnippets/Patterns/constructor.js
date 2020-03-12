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