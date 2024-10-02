
// Oprætter en variabel (bc), der er et array af forskellige objekt. Hver objekt har et navn og et link i nav

const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },{ name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];


// Oprætter en function der generer/viser breadcrumbsen i live server
function generateBreadcrumb() {

// Henter elementet <nav> ved hjælp af id = "breadcrumb" fra DOM, og gemmer det i variablen breadcrumbNav
    const breadcrumbNav= document.getElementById("breadcrumb");

// Fjerner indeholdet i nav (hvis der findes indehold)
    breadcrumbNav.innerHTML= "";

// Oprætter variabel for HTML
    let breadcrumbHTML = "";


// Looper/itererer breadcrumb data (over hver item objekt i bc - arrayet, hvor index er positionen for hvert objekt i arrayet) ved at bruge metoden forEach 
    bc.forEach((item, index) => {
// Hvis index er mindre end længden af bc -1 (hvis det ikke er det sidste objekt) så tilføjes der et link for objektet item til breadcrumbHTML efterfulgt af en skråstreg /. 
// Hvis index er de sidste objekt, presenteres der som tekst i en <span> -tag. Det tilføjes altså kun et navn (name). 
        if(index < bc.length -1) {
        breadcrumbHTML += `<a href="${item.link}">${item.name} </a> /`;
        } else {
            breadcrumbHTML += `<span>${item.name}</span>`;
        }
    });

// Opdaterer nav med ny HTML
    breadcrumbNav.innerHTML= breadcrumbHTML;
}

// Henter knappen med id ("generate_breadcrumb") og tilføjer en event listner, når der klikkes på knappen. Når knappen bliver klikket på, køres funktionen ("generateBreadcrumb"). 
    document.getElementById("generate_breadcrumb").addEventListener("click", generateBreadcrumb);