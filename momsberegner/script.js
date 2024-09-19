"use strict"; 

// Erklærer variablens datatype (nummer)

let beløb; 
let moms; 

// Skaber funktion og sætter en default værdi til moms på 25%

function getMomsBeregner (beløb, moms = 0.25) {
    console.log ((beløb * moms) + beløb);    
}

getMomsBeregner(1000, moms)


