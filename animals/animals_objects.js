"use strict";

window.addEventListener("DOMContentLoaded", start);
console.log("DOM is loaded");

// Array for the animal objects
const allAnimals = [];

function start( ) {
    console.log("ready");
    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        console.log(jsonData);
        // when loaded, prepare objects
        prepareObjects( jsonData );
        
    })
    .catch(error => console.error("Error loading JSON:", error));
}

// Animal prototype (Model)
const Animal = {
    name: "",
    desc: "", 
    type: "",
    age: 0
};

// Forbereder dyreobjekter fra JSON-data (Controller)

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {

        // Split fullName into name, description, type 
        const fullName = jsonObject.fullname.split(" ");
        // Første ord som name
        const name = fullName[0]; 
        // Sidste ord som type
        const type = fullName[fullName.length -1];
        // Navnerne mellem som description
        const desc = fullName.slice(1, fullName.length -1).join(" ");

        // Opretter et nyt animal object ved at bruge Animal prototypen

        // Opretter en ny instans af Animal
        const animal = Object.create(Animal);
        animal.name = name;
        animal.desc = desc;
        animal.type = type;
        animal.age = jsonObject.age;

        console.log(animal);

        // Tilføjer de nye animal object til allAnimals arrayet
        allAnimals.push(animal);
    });


console.log(allAnimals);
    // Vises i tabellen
    displayList();
}

function displayList() {
    console.log("Updating the display list");
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


