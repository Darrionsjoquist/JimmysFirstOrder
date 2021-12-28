function genHeader(){
  document.getElementById("header").innerHTML= `      
  
  <div class="top-bar container">
  <div class="logo">
      <img src="images/jimmys-logo.png" alt="">
  </div>
  <nav> 
    <ul>
      <li><a href="">menu</a></li>
      <li><a href="../about.html" >about</a></li>
      <li><a href="../visit.html">visit</a></li>
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