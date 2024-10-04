// lav en variable ved navn name

const name = "peter";
const nameUpper = "PETER";
const nameMe = "daniela";
const nameO = "OLIVER";

//3:e bogstav er uppercase

const name2 = name.substring(0,2)+ name[2].toUpperCase()+ name.substring(3,5);

console.log(`${name2}`);

// Lowercase

const name3 = nameUpper.toLowerCase();

console.log(`${name3}`);

// P uppercase, resternede lower case

const name4 = nameUpper[0] + nameUpper.substring(1,5).toLowerCase();

console.log(`${name4}`);

// D stort og A stort

const name5 = nameMe[0].toUpperCase() + nameMe.substring(1,6) + nameMe [6].toUpperCase(); 

console.log(`${name5}`);

// Olivers navn, med lille i

const name6 = nameO.substring(0,2) + nameO[2].toLowerCase() + nameO.substring(3,6);

console.log(`${name6}`);



