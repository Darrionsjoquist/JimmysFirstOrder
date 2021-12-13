

window.addEventListener('scroll', ()=> {

  const el = document.getElementById('title-card');
  if (window.pageYOffset>0) {
    el.classList.add("hide-title-card");
  }
  else {
    el.classList.remove("hide-title-card");
  }
});