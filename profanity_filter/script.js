
const curseWords = [  { bad: "var", good: "const",},  { bad: "float",good: "grid",},  { bad: "marquee", good: "just don't", },];


// Lav en funktion, der erstatter de "dårlige" ord med de "gode" fra det udleverede array. 

function generateReplace () {

    const sentence = document.getElementById("#udskift");

    curseWords.forEach((item,index) => {

    })

}

// Tilføj en event listener til din knap. Når den klikkes, bør din ord-erstatningsfunktion blive kaldt, og teksten skal opdateres.

document.getElementById("#udskift").addEventListener("click", generateReplace);