
// PUSH tilføjer et element i arrayet. 

const people = ["Harry", "Ron", "Hermonie"];
let result;
console.log('people.push("Draco")');
result = people.push("Draco");
console.log("result", result);
console.log("people", people);

// POP - returnerer Draco, pop fjerner det sidste element i arrayet

console.log("************")
console.log("people.pop()");
result = people.pop();
console.log("result", result);
console.log("people", people);

// PUSH

console.log("************");
console.log('people.push("Neville")');
result = people.push("Neville");
console.log("result", result);
console.log("people", people);

// PUSH

console.log("************");
console.log('people.push("Luna")');
result = people.push("Luna");
console.log("result", result);
console.log("people", people);

// SLICE - returnerer et nyt array/string gennem at kopiere den ursprunglige array af people

console.log("************");
console.log('people.slice("0,3")');
result = people.slice("0,3");
console.log("result", result);
console.log("people", people);


// SPLICE "1" er start arrayet, hvilket betyder at jeg starter ved position 1 i arrayet, "0" betyder at ingen element skal fjernes, "Cho" er det nye elementet som skal tilføjes på index 1

console.log("************");
console.log('people.splice(1,0, "Cho")');
result = people.splice(1,0, "Cho");
console.log("people", people);
console.log("result", result);


//  Index: ændrer værdien på index 1 i arrayet people, fra "Cho" til "Ginny"

console.log("************");
people [1] = "Ginny";
console.log("people", people);
console.log("result", result);

// PUSH

console.log("***********");
console.log('people.push("Fred", "George")');
result = people.push("Fred", "George");
console.log("people", people);
console.log("result", result);

// Indexof = Leder efter indexet hvor "Fred" findes i arrayet people , hvilket resulterede i index 8

console.log("***********");
console.log('people.indexOf("Fred")');
result = people.indexOf("Fred");
console.log("people", people);
console.log("result", result);


// SPLICE

console.log("************");
console.log('people.splice("result, 1")');
result = people.splice("result, 1");
console.log("people", people);
console.log("result", result);



// const letters = Array.from("");

// String SPLIT

// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(words[3]);
// Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);

// Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// Expected output: "The quick brown fox jumps over the lazy dog."



