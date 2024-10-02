

function greeting (firstName) {
    return `Hello ${firstName}`;
}

// Tildeler greeting funktionen variablen "sayHi"

const sayHi = greeting;
sayHi ("Harry");

console.log(sayHi ("Harry"));
console.log(greeting("Freddie"));

// Greeting og sayHi peger begge på den samme funktion, så funktionen kan kaldes via et hvilket som helst af navnene


console.log("********");
function congreet(firstName) {
    console.log(`Hello ${firstName}`);
}

// Kalder den med et sekunds delay

setTimeout( congreet, 1000, "Ron");

congreet("Ron");



// Objects

console.log("*********");


const person3 = {
    firstName: "Harry",
    lastName: "Potter",
    isHired: false, 
    age: 24, 
    country: "Africa"
}

const person4 = {
    firstName: "Fred",
    lastName: "Weasley",
    isHired: false,
    age: 26
}



function hire (person) {
    person.isHired = true;
}

function fire (person) {
    person.isHired = false;
}

function setAge(person){
    person.age = 10;
}

function setCountry(person){
    person.country = "England";
}


// Action betyder at jeg kan kalde en funktion i parametren, som f.eks. hire eller fire i console log 

function fireOrHire(action,person){
    action(person);

}


hire(person3);
console.log(person3);

fire(person3);
console.log(person3);


setAge(person3);
console.log(person3);

setCountry(person3);
console.log("person3", person3);

console.log("person4", person4);
fireOrHire(hire, person4);
console.log("person4", person4);



// JSON


console.log("*******");

function init(){
    console.log("init");
    // load JSON
    loadJSON("students.json", prepareData);
}



const postUrl= "";
loadJSON(postUrl, prepareData);

function loadJSON ( url, callback) {
    fetch(url)
    .then (response => response.json ())
    .then (jsonData => callback(jsonData));
}

function prepareData(data) {
    console.table(data);
    data.forEach((element) => {
        document.querySelector("body").innerHTML += `<h1> ${element.title}<h1>`;
    })
}

// eller sådan her 

// async function loadJSON(url, callback) {
//     const response = await fetch (url);
//     const jsonData = await response.json();
//     callback(jsonData);
// }