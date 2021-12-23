function addHoverEvent(linkId, imageUrl) {
   document.getElementById(linkId).addEventListener("mouseover", (event) => {
      document.getElementById("main").style.backgroundImage = `url(${imageUrl})`
   });

   document.getElementById(linkId).addEventListener("mouseout", (event) => {
      document.getElementById("main").style.backgroundImage = `url(images/salad.jpg)`
   });
}

function setupLinks() {
   addHoverEvent("menuLink",  "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
   addHoverEvent("aboutLink", "https://images.pexels.com/photos/3009767/pexels-photo-3009767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
   addHoverEvent("visitLink", "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}

setupLinks();
