const nightButton = document.querySelector(".day-night");
const banner = document.querySelector(".banner")

// localStorage.setItem("theme", "light")

nightButton.addEventListener("click", ()=>{
  banner.classList.toggle("night-mode");
  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark")
  }else{
    localStorage.setItem("theme", "light")
  }
})

const typeEffect = new Typed("#name", {
  strings: ["Saurabh ", "Developer", "Coder"],
  typeSpeed: 110,
  loop: true,
  backSpeed: 100,
})



if(localStorage.getItem("theme") == "light"){
  banner.classList.remove("night-mode")
}else if(localStorage.getItem("theme") != "light"){
  banner.classList.add("night-mode")
}else{
  localStorage.setItem("theme", "light")
}