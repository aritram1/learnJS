// Create a functionality like history tracking that can be invoked for an array type object. Usage is to call the initial method to set it up, and
// then all actions are tracked as in a history. The entries are time tracked.

// usage :

// Create an array of any type
let myArray = new Array (...);

// Start history tracking for the array by calling specific method
myArray.setHistoryTracking();

// Add some later point of time add value to the array
myArray.push(<some value>);

// At some later point of time add some other vaue to the array
myArray.shift(<some other value>);

// At some late rpoint of time sort the array
myArray.sort();

// Now get the history of all methods that are called on this array
myArray.getHistory();

// Expected output
// {'time' : '10:50:12', 'change' : 'Tracking started'},
// {'time' : '10:50:13', 'change' : '<Some value> is added in end'},
// {'time' : '10:50:14', 'change' : '<Some value is added at the beginning'},
// {'time' : '10:50:15', 'change' : 'The array is sorted'}
