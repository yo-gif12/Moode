// function click() {
//   let li = document.querySelector(".pattern__color");
//   li.addEventListener("click", function() {});
// }

// function remove(pattern){
//   pattern.classList.remove("is-visible")
// }

// Axel JS

// Déclaration des éléments

let patternBlue = document.querySelector(".pattern__color--blue");
let patternRed = document.querySelector(".pattern__color--red");
let patternGreen = document.querySelector(".pattern__color--green");
let patternWhite = document.querySelector(".pattern__color--white");
let patternDark = document.querySelector(".pattern__color--dark");
let selectedElement = document.querySelector(".normal__color.is-selected");

// Tableau des couleurs
var colors = [patternBlue, patternRed, patternGreen, patternWhite, patternDark];

// Le listener à remplir
function click() {
  let li = document.querySelector(".pattern__color");

  li.addEventListener("click", function() {});
}

function chooseColors() {
  let selectedElement = document.querySelector(".normal__color.is-selected");

  // On cache tout par défaut, ça evite de retirer une a une la classe
  hideAll();

  // Et selon le choix, on a plus qu'à rajouter la classe is-visible sur le bon
  if (selectedElement.classList.contains("normal--blue")) {
    patternBlue.classList.add("is-visible");
  } else if (selectedElement.classList.contains("normal--red")) {
    patternRed.classList.add("is-visible");
  } else if (selectedElement.classList.contains("normal--green")) {
    patternGreen.classList.add("is-visible");
  } else if (selectedElement.classList.contains("normal--white")) {
    patternWhite.classList.add("is-visible");
  } else if (selectedElement.classList.contains("normal--dark")) {
    patternDark.classList.add("is-visible");

    patternBlue.classList.remove("is-visible");

    patternRed.classList.remove("is-visible");

    patternGreen.classList.remove("is-visible");

    patternWhite.classList.remove("is-visible");
  }
}

// Permet de retirer à tous les items du tableau "colors" la classe "is-visible"
function hideAll() {
  colors.forEach(function(item, index, array) {
    item.classList.remove("is-visible");
  });
}
