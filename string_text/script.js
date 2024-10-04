const name = "Daniela";
const len = name.length;
const letter = name[0];
const animalType = "dog";
const animalName = "Leo";

// Total characters inkl mellanrum

const name1 = "Daniela Parisa Rezai";
const firstName = name1.substring(14);
const len1 = name1.length;

//  Hvilken karaktær er det på index 2 
const letter1 = name1[2];

console.log(`The total characters inklusive mellanrum is ${len1}`);

console.log(letter1);

console.log(firstName);









console.log(`Hello my name is ${name}. \nI have a ${animalType} and his name is ${animalName}`); 

console.log(`Hello my name is ${name}. My name is ${len} characters long \nI have a ${animalType} and his name is ${animalName}`); 

console.log(`The first letter of ${name} is ${letter}`); 



// Trim - fjerner mellemrum før og efter tekst

const str1 = "    There is space here";
const str2 = str1.trim();

// console.log(str1);
console.log(str2);



