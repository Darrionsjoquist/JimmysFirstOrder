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

function genAddress () {
   document.getElementById("contact").innerHTML= `
            <div class="contact">
               <p>
               Contact<br>
               ${address.phone}<br>
               ${address.street}<br>
               ${address.city+", "+address.city+" "+address.state+" "+address.zip}
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
      
genAddress();
setupLinks();
genHeader(true);
