window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#9c27b0";
  } else {
    navbar.style.background = "#6a11cb";
  }
});
