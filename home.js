let menuLink = document.getElementById("menuLink")
 let aboutLink = document.getElementById("aboutLink")
 let visitLink = document.getElementById("visitLink")
 let uberdiv = document.getElementById("uberdiv")

// function getMenuImg (e){
// uberdiv.style.backgroundColor = url("https://i.pinimg.com/originals/76/f1/2b/76f12beb50a14e33067f91853c171728.png");

// }












menuLink.addEventListener("mouseover", (event) => {
   uberdiv.style.backgroundImage = "url(https://media.istockphoto.com/photos/young-sad-man-thinking-while-sitting-on-a-bench-in-autumn-picture-id884811730)"
});

aboutLink.addEventListener("mouseover", (event) => {
   uberdiv.style.backgroundImage = "url(https://l450v.alamy.com/450v/2c598pc/young-bearded-man-thinking-too-hard-solving-a-difficult-problem-angry-stressed-guy-with-headache-isolated-on-grey-studio-background-2c598pc.jpg)"
});

visitLink.addEventListener("mouseover", (event) => {
   uberdiv.style.backgroundImage = "url(https://cdn.xxl.thumbs.canstockphoto.com/angry-man-on-the-phones-stock-image_csp41564063.jpg)"
});