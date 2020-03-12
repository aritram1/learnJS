	// factory pattern
	personfactory =              function(name){
		temp = {};
		temp.name = name;
		temp.getname =        function(){
			return this.name;
		}
	return temp;
	}

let aritra = personfactory('aritra');
let bhai = personfactory('bhai');
console.log('--------Factory pattern-----------');
console.log(aritra.getname());
console.log(bhai.getname());
}