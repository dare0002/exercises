"use strict";

const inactivityTimeLimit = 5000;
let inactivityTimer = null;
let animationRunning = false;


// Animation starter når siden loader
window.addEventListener("DOMContentLoaded", function (){
    const button = document.getElementById("btn");

    button.classList.add("active");

    resetInactivityTimer();

    // Hvis brugeren klikker på knappen, udføres en handling med det samme
    button.addEventListener("click", performAction);

    // Registrerer brugerens aktivitet (mus, tastatur)
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", resetInactivityTimer);

    // function til at udføre handling efter inaktivitet eller click
    function performAction () {
        // Fjerner knappen fra siden
        button.classList.add("hidden");

        // Skifter baggrundsfarve 
        document.body.style.backgroundColor = "green";

        // eller navigere til ny side
        // window.location.href = .......
    }

    // Nulstiller inaktivitetstimeren hvis brugeren er aktiv
    function resetInactivityTimer(){
        clearTimeout(inactivityTimer);

        // genstart timeren
        inactivityTimer = setTimeout(function(){
            performAction();
        }, inactivityTimeLimit)
    }



    function handleMouseMove(){
        if(!animationRunning) {
            animationRunning = true;
            button.classList.add("active");
        }

        resetInactivityTimer();
    }
});




// Hvis brugeren intet foretager sig (ingen cursor bevægelser mm) kører animationen i knappen til enden og en interaktion skal ske med siden, 
// fx at den ændrer baggrundsfarve og knappen forsvinder eller at der navigeres til en ny side. Dette skal selvfølgelig også ske hvis brugeren klikker på knappen.

// document.getElementById("btn").addEventListener("click");

// generateColor();

// function generateColor (){

// }




