function genFooter (){
  document.getElementById("footer").innerHTML= `
      <div class="container bottom-bar">
          <div class="contact">
              <p>
              Contact<br>
              206-322-9734<br>
              1406 12th Ave<br>
              Seattle, WA 98122
              </p>
          </div>
  
          <div class="company">
          <div class="logo">
              <img src="images/jimmys-logo.png" alt="">
          </div>
              <div class="socials">
                  <ul class="social-list">
                  <li class="social-item"><a href="#" class="social-link"><i class="fab fa-facebook-square"></i></a></li>
                  <li class="social-item"><a href="#" class="social-link"><i class="fab fa-twitter"></i></a></li>
                  <li class="social-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                  </ul>
              </div>
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

  genFooter();