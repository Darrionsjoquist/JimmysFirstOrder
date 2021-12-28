function genHeader(){
  document.getElementById("header").innerHTML= `      
  
  <div class="top-bar container">
  <div class="logo">
  <a href="home.html"><img src="images/jimmys-logo.png" alt=""></a>
  </div>
  <nav> 
    <ul>
      <li><a href="../menu.html">menu</a></li>
      <li><a href="../about.html" >about</a></li>
      <li><a href="../visit.html">visit</a></li>
    </ul>
  </nav>
  <div class="socials">
      <ul class="social-list">
        <li class="social-item"><a href="https://www.facebook.com/jimmysonfirst" class="social-link"><i class="fab fa-facebook-square"></i></a></li>
        <li class="social-item"><a href="https://twitter.com/JimmysOnFirst" class="social-link"><i class="fab fa-twitter"></i></a></li>
        <li class="social-item"><a href="https://www.pinterest.com/stadiumjimmys/_created/" class="social-link"><i class="fab fa-pinterest-square"></i></i></a></li>
      </ul>
  </div>
</div>`
}

genHeader();