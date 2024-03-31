const nightButton = document.querySelector(".day-night");
const banner = document.querySelector(".banner")


nightButton.addEventListener("click", ()=>{
  banner.classList.toggle("night-mode");
})

const typeEffect = new Typed("#name", {
  strings: ["Saurabh ", "Developer", "Coder"],
  typeSpeed: 110,
  loop: true,
  backSpeed: 100,
})