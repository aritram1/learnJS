// A non Homogneous array with different type of objects. Our motto is to make a function 
// to get the total based on provided criteria. Also it would be possible to filter certain 
// values if the criteria does not match. It can search by profession types and state (e.g. find
// all who are ready to start the oepration.

AllTypes = ['doctor', 'physician', 'staff', 'general'];

healthProfessionals = [
    { 'staff': 1, 'doctor': 2, 'state': 'ready' },
    { 'physician': 2, 'general': 5, 'staff': 10, 'state': 'busy'},
    { 'general': 3, 'doctor': 10 , 'state': 'busy'},
    { 'doctor': 9, 'staff': 10, 'general': 10, 'state':'busy'}
];

process = function (professional, availableTypes = AllTypes, count = 0) {
    availableTypes.forEach(type => {
        if (professional[type]) {
            count += professional[type] ? professional[type] : 0;
        }
    });
    return count;
}

// Now let's test if the processing is done correctly for ready professionals.
// process() is the layer that adds the processing layer for each entry, as required
allProfs = healthProfessionals.reduce(function (accumulator, next) {
    nextvalue = process(next);
    return accumulator + nextvalue;
}, 0);
console.log('All Professionals from Method 1 : ' + allProfs);

// With slight change in [next.ready] statement we can find out other values as well.
// e.g. We need to find out all doctors irrespective of their state.
allDocs = healthProfessionals.reduce(function (accumulator, next) {
    nextvalue = process(next, ['doctor']);
    return accumulator + nextvalue;
}, 0);
console.log('All doctors from method 1 : ' + allDocs);


//Lets create an utility function as search that will take following parameters
// 1 - data itself
// 2 - list of require professions e.g. ['doctor, 'staff']. If not provided all professions will be considered
// 3 - other criteria e.g. pick all professionals with ready state. 
// TBD(3) If not provided all state(s) should be considered

search = function (data, professionTypes=AllTypes, otherCriteria=[], initvalue=0) {
    return data.reduce(function (accumulator, next) {
            nextvalue = 0
            if (otherCriteria.length === 0)
                nextvalue = process(next, professionTypes);

            else//Only process those entries that match criteria
                nextvalue = otherCriteria.includes(next.state) ? process(next, professionTypes) : 0;

            return accumulator + nextvalue;
        }, initvalue);
}

//Let's test
allprofessionals = search(healthProfessionals);
alldoctors = search(healthProfessionals, ['doctor']);
onlyBusyDoctors = search(healthProfessionals, ['doctor'], ['ready']);
onlyReadystaff = search(healthProfessionals, ['staff'], ['ready']);

console.log('All Professionls -> ' + allprofessionals);
console.log('All doctors -> ' + alldoctors);
console.log('Only Busy doctors -> ' + onlyBusyDoctors);
console.log('Only staffs who are ready ->' + onlyReadystaff);

//EOD :)
