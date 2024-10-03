"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};



// sætter variablen til DOM- elementet "select" i HTML -filen
const selector = document.querySelector("#select");

// Henter den aktuelle værdi fra select-elementet, eller sætter en standardværdi hvis ingen er valgt
let locale = selector.options[selector.selectedIndex].value || 'da';



// Skifter sprog baseret på det valgte sprog 
switchLang(locale);



function switchLang(locale) {
  texts[locale].texts.forEach((elm) => {
    document.querySelector(elm.location).textContent = elm.text;
  }
);
}


//Eventlistener til at opfange ændringer i dropdown - menuen

selector.addEventListener("change", (event) => {
  locale = event.target.value;
  switchLang(locale);
});





