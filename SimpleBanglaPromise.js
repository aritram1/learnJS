//Standard Bangla promise
//Trying to code in vernacular :D, whihc is pretty common in other parts of the world!

// A promise takes two func names that represents resolve and reject result of the promise. The arguments are 
// position based and not name based (so we can play with the names :D)

// It checks whther it is immidiaately required to fulfill the promise

// If it is ->  it resolves as Egiye ja (Go ahead) 
// Else it rejects as Missed it.

// I loved writing it :D

//Is it immi?
var immi = Math.random(1) > 0.5;

//Immi or never?
let immiOrNever = new Promise(function(egiyeJao, waitkoro) {
  if(immi) egiyeJao('got it');
  else waitkoro('sorry, missed it');
});

//What is the result?
immiOrNever
.then(kiholo=>{
  console.log(kiholo + ' bro!');
})
.catch(poblem=>{
console.log('poblem hoye geche :' + poblem);
});
