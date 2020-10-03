let faker = require('faker');
faker.setLocale('en');

// let {model, type, manufacturer} = faker.vehicle;
// console.log(model(), type(), manufacturer());
// console.log(model(), type(), manufacturer());
// console.log(model(), type(), manufacturer()); //generating random values are easy by repeating
// //Output :
// //Sentra Wagon Hyundai
// //Charger SUV Jaguar
// //Golf Convertible Porsche

// console.log(faker.helpers.createCard());
// //Output

// console.log(faker.helpers.userCard());
// //Output

// let {company: {companyName} ,address : {city: cty, country: cntry}} = faker;
// console.log(`Address : ${companyName()}, ${cty()}, ${cntry()}`);
// console.log(`Address : ${companyName()}, ${cty()}, ${cntry()}`);
// console.log(`Address : ${companyName()}, ${cty()}, ${cntry()}`);
// //Output

// let {helpers: {userCard : {address: {street, suite, city, zipcode, geo}}}} = faker;
// console.log(`Address : ${suite} ${street}, ${city}, ${zipcode}, ${geo}`);
// //Output

// let {helpers: {userCard : user}} = faker;
// console.log(user());
// //Output

// let {helpers: {userCard : userr}} = faker;
// let {street: str, suite: sui, city: cit, zipcode: zip, geo: {lat: lati, lng: long}} = userr().address;
// console.log(`Address : ${sui} ${str}, ${cit}, ${zip}, ${lati}, ${long}`);
// //Output

// let {street: st, suite: su, city: c, zipcode: z, geo: {lat:lt, lng:ln}} = faker.helpers.userCard().address;
// console.log(`Address : ${su} ${st}, ${c}, ${z}, ${lt}, ${ln}`);
// //Output

//Final versio nto extract address with country :)
let {helpers: {createCard}} = faker;
console.log(createCard().address);

//tbc console.log(`userCard is : ` + faker.helpers.createCard().address);

// EOF :)
