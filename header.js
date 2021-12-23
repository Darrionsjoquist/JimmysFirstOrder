function genHeader(){
  document.getElementById("header").innerHTML= `      
  
  <div class="top-bar container">
  <div class="logo">
      <img src="images/jimmys-logo.png" alt="">
  </div>
  <nav> 
    <ul>
      <li>menu</li>
      <li>about</li>
      <li>visit</li>
    </ul>
  </nav>
  <div class="socials">
      <ul class="social-list">
        <li class="social-item"><a href="#" class="social-link"><i class="fab fa-facebook-square"></i></a></li>
        <li class="social-item"><a href="#" class="social-link"><i class="fab fa-twitter"></i></a></li>
        <li class="social-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
      </ul>
  </div>
</div>`
}

genHeader();