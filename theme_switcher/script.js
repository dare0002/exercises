document.querySelector("select").addEventListener("change", selectChange);

function selectChange(evt) {

    // Ændrer data attributet på body-elementet i DOM
    document.body.setAttribute("data-theme", evt.target.value);

//   console.log("change", evt.target.value);

  // man kan også gøre sådan her i stedet for⬇
  //console.log(document.querySelector("select").value);
}