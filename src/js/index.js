// <div class="pattern__color" data-pattern="red.png">

// let patternEl = document.querySelector(".pattern");

// document.querySelectorAll(".pattern__color").forEach(function(colorEl) {
//   colorEl.addEventListener("click", function() {
//     let pattern = colorEl.getAttribute("data-pattern"); // "red.png"
//     patternEl.style.background = 'url("images/' + pattern + '")';
//   });
// });

// let patternBlue = document.querySelector(".pattern__color--blue");
// let patternRed = document.querySelector(".pattern__color--red");
// let patternGreen = document.querySelector(".pattern__color--green");
// let patternWhite = document.querySelector(".pattern__color--white");
// let patternDark = document.querySelector(".pattern__color--dark");
// let selectedElement = document.querySelector(".normal__color.is-selected");

// var colors = [patternBlue, patternRed, patternGreen, patternWhite, patternDark];

// function click() {
//   let li = document.querySelector(".pattern__color");

//   li.addEventListener("click", function() {});
// }

// function chooseColors() {
//   let selectedElement = document.querySelector(".normal__color.is-selected");

//   hideAll();

//   if (selectedElement.classList.contains("normal--blue")) {
//     patternBlue.classList.add("is-visible");
//   } else if (selectedElement.classList.contains("normal--red")) {
//     patternRed.classList.add("is-visible");
//   } else if (selectedElement.classList.contains("normal--green")) {
//     patternGreen.classList.add("is-visible");
//   } else if (selectedElement.classList.contains("normal--white")) {
//     patternWhite.classList.add("is-visible");
//   } else if (selectedElement.classList.contains("normal--dark")) {
//     patternDark.classList.add("is-visible");
//   }
// }

// function hideAll() {
//   colors.forEach(function(item, index, array) {
//     item.classList.remove("is-visible");
//   });
// }

