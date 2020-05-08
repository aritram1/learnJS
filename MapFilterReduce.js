//A non Homogneous array with different type of objects. Our motto is to 
// Add the numbers with matching elements
// Filter certain values from the arry based on certain condition]

healthProfessionals = [
  {'staff':1, 'doctor': 2, 'ready':true},
  {'physician': 2, 'general' : 5, 'staff' : 10, },
  {'general':3},
  {'doctor':4, 'staff': 10}
]; 

process = function(professional, count=0){
  if (professional.staff) count+=professional.staff;
  if (professional.doctor) count+=professional.doctor;
  if (professional.phsician) count+=professional.physician;
  if (professional.general) count+=professional.general;
  return count;
}

//Now let's test if the processing is done correctly for ready professionals.
allProfs = healthProfessionals.reduce(function(accumulator,next){
  nextvalue = next.ready ? process(next) : 0; //process adds the processing layer for each entry, as required.
  return accumulator + nextvalue; 
}, 0);
//Outputs 3
// {'staff':1, 'doctor': 2, 'ready':true}

// With slight change we can find out other values as well.
// e.g. We need to find out all doctors irrespective of their ready state.
allDocs = healthProfessionals.reduce(function(accumulator,next){
  nextvalue = process(next) : 0; //process adds the processing layer for each entry, as required.
  return accumulator + nextvalue; 
}, 0);
