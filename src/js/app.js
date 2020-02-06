const btnNoir = document.querySelector(".pastilles--noir"); //le bouton pour event
const btnBlanc = document.querySelector(".pastilles--blanc"); //le bouton pour event
const btnMauve = document.querySelector(".pastilles--mauve");
//Image De choix
const ImagePreview = document.querySelector(".foulard-perso"); // l'image du choix
const btnBird = document.querySelector(".motif--oiseau");// image oiseau
const btnFish = document.querySelector(".motif--poisson");// image poisson
const btnPlant = document.querySelector(".motif--plant");// image poisson


// la function pour modifer t'onb choix
btnNoir.addEventListener("click", function() {
<<<<<<< HEAD
ImagePreview.setAttribute("src", "../images/foulardnoir.jpg"); // juste a modifier le /foulard quand code copié
});

btnBlanc.addEventListener("click", function() {
ImagePreview.setAttribute("src", "../images/foulardblanc.jpg"); // juste a modifier le /foulard quand code copié
  });

btnMauve.addEventListener("click", function() {
ImagePreview.setAttribute("src", "../images/foulardmauve.jpg");
});

btnBird.addEventListener("click", function() {
  ImagePreview.setAttribute("src", "../images/foulardoiseau.jpg");
});

btnFish.addEventListener("click", function() {
  ImagePreview.setAttribute("src", "../images/foulardpoisson.jpg");
});

btnPlant.addEventListener("click", function() {
  ImagePreview.setAttribute("src", "../images/foulardplant.jpg");
=======
ImagePreview.setAttribute("src", "../asset/images/foulardnoir.jpg"); // juste a modifier le /foulard quand code copié
});

btnBlanc.addEventListener("click", function() {
ImagePreview.setAttribute("src", "../asset/images/foulardblanc.jpg"); // juste a modifier le /foulard quand code copié
  });

btnMauve.addEventListener("click", function() {
ImagePreview.setAttribute("src", "../asset/images/foulardmauve.jpg");
});

btnBird.addEventListener("click", function() {
  ImagePreview.setAttribute("src", "../asset/images/foulardoiseau.jpg");
});

btnFish.addEventListener("click", function() {
  ImagePreview.setAttribute("src", "../asset/images/foulardpoisson.jpg");
});

btnPlant.addEventListener("click", function() {
  ImagePreview.setAttribute("src", "../asset/images/foulardplant.jpg");
>>>>>>> 58f4c909998149bf9b355a77af5291492f94d034
});