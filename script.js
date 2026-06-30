const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
    });
  });
}
