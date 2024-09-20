
const randomNumber = Math.floor(Math.random()*101);

function checkGuess(){
    const userGuess = parseInt(document.getElementById("guess").value);
    const resultElement = document.getElementById("result");
    const celebrationElement = document.getElementById("celebration");

    if (isNaN(userGuess)) {
        resultElement.innerText = "Indtast venligst et tal.";
    } else if (userGuess > randomNumber){
        resultElement.innerText = "For højt! Prøv igen.";
    } else if (userGuess < randomNumber){
        resultElement.innerText = "For lavt! Prøv igen";
    } else {
        resultElement.innerText = "";
        celebrationElement.style.display = "block";
        resultElement.innerText = ""

        celebrationElement.style.display = "block";
        celebrationElement.classList.add("celebration");
        resultElement.innerText = ""
    }
}