var TYPES = ['Sedan', 'HatchBack'];
var RUNS_ON = ['Petrol', 'Diesel'];
var COLORS = ['Red', 'Blue'];
var i = Math.random(1) > 0.5 ? 0 : 1;
console.log(i);
let vehicle = {
  color: COLORS[i],
  name: '',
  type: '',
  runsOn: ''
}
let Car = Object.assign(vehicle, {
  type: TYPES[i],
  runsOn: RUNS_ON[i],
  setName: function(name){
    name: this.name;
  },
  drive: function(name){
    this.setName(name);
    console.log(`A ${this.color} ${this.type} ${this.name} is driving on ${this.runsOn}`);
  }
});

[1,2,3,4,5].forEach(() => {
    Car.drive('Subaru');
});
