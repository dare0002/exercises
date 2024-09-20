// console.log("Math.random", Math.floor(Math.random() *3));

// function logRandomNumber () {
//     const RandomNumber = Math.floor(Math.random()*101);
//     console.log(RandomNumber);

//     document.getElementById("Randomtal").innerText = RandomNumber;
// }

// logRandomNumber ()



function logRandomNumber (max, querySelector) {
    const RandomNumber = Math.floor(Math.random() * ( max + 1));
    console.log(RandomNumber);

    const element = document.querySelector(querySelector) // innerText = RandomNumber;
    if(element){
        element.innerText = RandomNumber; 
        console.log("elementet eksisterer")
    } else { 
        console.error("elementet eksisterer ikke")
    }
}

logRandomNumber (100, "#Randomtal")



