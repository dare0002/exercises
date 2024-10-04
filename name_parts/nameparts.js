// 1. lav først et navn (skal være en const)

const name ="Peter Heronimous Lind";

// 2. lav 3 variable: first, middle og last name 

const firstName = name.substring(0,5);
const middleName = name.substring(6,16);
const lastName = name.substring(17);

const bogstav = name.indexOf("L"); 

// 3. print med console log hvor variablene anvendes 

console.log(`${firstName}`);

console.log(`${middleName}`);
console.log(bogstav);

console.log(`${lastName}`);