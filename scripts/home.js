genHeader()

function addHoverEvent(linkId, imageUrl) {
   document.getElementById(linkId).addEventListener("mouseover", (event) => {
      document.getElementById("main").style.backgroundImage = `url(${imageUrl})`
   });

   document.getElementById(linkId).addEventListener("mouseout", (event) => {
      document.getElementById("main").style.backgroundImage = `url(images/salade.png)`
   });
}

function setupLinks() {
   addHoverEvent("menuLink",  "images/twinky.png");
   addHoverEvent("aboutLink", "images/tart.png");
   addHoverEvent("visitLink", "images/spam.png");
}

setupLinks();
