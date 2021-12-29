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




   function genAddress (){
      document.getElementById("contact").innerHTML= `
              <div class="contact">
                  <p>
                  Contact<br>
                  206-322-9734<br>
                  1406 12th Ave<br>
                  Seattle, WA 98122
                  </p>
              </div>
      
              <div class="hours">
              <p>
                  Hours<br>
                  Tues - Sun  5pm to midnight<br>
                  Closed Mondays
              </p>
              </div>
          </div>
      `
      }
      genAddress()