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
// hello
});


const btnTest =  document.getElementById("more1");
const btnmore =  document.getElementById("more2");
const btnTest3 =  document.getElementById("more3");
const btnTest4 =  document.getElementById("more4");
const btnTest5 =  document.getElementById("more5");



btnTest.addEventListener("click", function() {  
  const btnTest =  document.getElementById("more1"); 
  
  var changewindow = document.getElementById("window1").style.display 
	var more = document.getElementById("more1")
  
	if(changewindow == "none")
	{
   	changewindow = document.getElementById("window1").style.display = "block" ;
		more.innerHTML ="-";
	} 

	else if(changewindow == "block")
	{
		changewindow = document.getElementById("window1").style.display = "none" ;
		more.innerHTML ="+";
  }

});

btnmore.addEventListener("click", function() {  
   
  var changewindow = document.getElementById("window2").style.display 
	var more = document.getElementById("more2")
  
	if(changewindow == "none")
	{
   	changewindow = document.getElementById("window2").style.display = "block" ;
		more.innerHTML ="-";
	} 

	else if(changewindow == "block")
	{
		changewindow = document.getElementById("window2").style.display = "none" ;
		more.innerHTML ="+";
  }

});

btnTest3.addEventListener("click", function() {  
   
  var changewindow = document.getElementById("window4").style.display 
	var more = document.getElementById("more3")
  
	if(changewindow == "none")
	{
   	changewindow = document.getElementById("window4").style.display = "block" ;
		more.innerHTML ="-";
	} 

	else if(changewindow == "block")
	{
		changewindow = document.getElementById("window4").style.display = "none" ;
		more.innerHTML ="+";
  }

});

btnTest4.addEventListener("click", function() {  
   
  var changewindow = document.getElementById("window5").style.display 
	var more = document.getElementById("more4")
  
	if(changewindow == "none")
	{
   	changewindow = document.getElementById("window5").style.display = "block" ;
		more.innerHTML ="-";
	} 

	else if(changewindow == "block")
	{
		changewindow = document.getElementById("window5").style.display = "none" ;
		more.innerHTML ="+";
  }

});

btnTest5.addEventListener("click", function() {  
   
  var changewindow = document.getElementById("window6").style.display 
	var more = document.getElementById("more5")
  
	if(changewindow == "none")
	{
   	changewindow = document.getElementById("window6").style.display = "block" ;
		more.innerHTML ="-";
	} 

	else if(changewindow == "block")
	{
		changewindow = document.getElementById("window6").style.display = "none" ;
		more.innerHTML ="+";
  }

});