function addHoverEvent(linkId, imageUrl) {
   document.getElementById(linkId).addEventListener("mouseover", (event) => {
      document.getElementById("main").style.backgroundImage = `url(${imageUrl})`
   });
}

function setupLinks() {
   addHoverEvent("menuLink",  "https://media.istockphoto.com/photos/young-sad-man-thinking-while-sitting-on-a-bench-in-autumn-picture-id884811730");
   addHoverEvent("aboutLink", "https://l450v.alamy.com/450v/2c598pc/young-bearded-man-thinking-too-hard-solving-a-difficult-problem-angry-stressed-guy-with-headache-isolated-on-grey-studio-background-2c598pc.jpg");
   addHoverEvent("visitLink", "https://cdn.xxl.thumbs.canstockphoto.com/angry-man-on-the-phones-stock-image_csp41564063.jpg");
}

setupLinks();
