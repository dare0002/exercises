"use strict";

let screenLog = document.querySelector("#screen-log");
let bodyElement = document.body;

document.addEventListener("mousemove", updateColors);

// Beregne procent af x og y baseret på computernes bredde og højde 
function updateColors(e){
    let xPercent = (e.clientX / window.innerWidth) * 100;
    let yPercent = (e.clientY / window.innerHeight) * 100;

    // CSS properties
    bodyElement.style.setProperty(`--lightness`, `${xPercent}%`);
    bodyElement.style.setProperty(`--saturation`, `${yPercent}%`);

    // Opdaterer tekstindhold
    screenLog.innerText = `X: ${Math.round(xPercent)}%, Y: ${Math.round(yPercent)}%`;
}


    