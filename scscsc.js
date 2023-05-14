window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const scrolled = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
  
    if (navbar) {
      if (scrolled > 50) {
        navbar.classList.add("transparent");
        navbar.style.backdropFilter = "blur(5px)";
      } else {
        navbar.classList.remove("transparent");
        navbar.style.backdropFilter = "none";
      }
    }
  });

  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar-brand");
    const scrolled = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
  
    if (navbar) {
      if (scrolled > 50) {
        navbar.classList.add("black");
      } else {
        navbar.classList.remove("black");
      }
    }
  });
