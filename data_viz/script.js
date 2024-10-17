"use strict";

window.addEventListener("DOMContentLoaded",start);

let currentInQueue = 0;

function start(){
    loadJSON();
    setInterval(loadJSON, 10000);
}

function loadJSON(){
    fetch("dataviz.json")
    .then (response => response.json())
    .then (jsonData => {
        if(jsonData && jsonData.inQueue !== undefined){
            const inQueue = jsonData.inQueue;
        // Only update if inQueue has changed
        if(inQueue !== currentInQueue){
            currentInQueue = inQueue;
            updateDisplay(inQueue);
        }
     } else {
            console.log("Inqueue not found in JSON data", jsonData);
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
});
}

function updateDisplay(inQueue) {
    const numberElement = document.getElementById("inQueueNumber");
    // Update number
    numberElement.textContent= inQueue;

    // Giver tallet en class for at animere det + fjerner animation
    numberElement.classList.remove("grow");
    // Trigger reflow for at starte animationen på ny
    void numberElement.offsetWidth;
    numberElement.classList.add("grow");
}