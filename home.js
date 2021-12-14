let menuLink = document.getElementById("menuLink")
 let aboutLink = document.getElementById("aboutLink")
 let visitLink = document.getElementById("visitLink")
 let uberdiv = document.getElementById("uberdiv")

 function getMenuImg (e){
 uberdiv.style.backgroundImage = url("images\sun sour.png");

 }












menuLink.addEventListener("mouseover", (event) => {
   // highlight the mouseover target
   event.target.style.color = "red";
});

//menuLink.addEventListener("mouseover", getMenuImg)



