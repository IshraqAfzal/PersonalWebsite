const elements = document.getElementsByClassName("experience-mini-containers")

Array.from(elements).forEach((obj) => {
  obj.addEventListener("mouseenter", (event) => {
    const target = event.target
    target.querySelectorAll("*").forEach((element) => {
      element.style.display = "none"
    })
  })

  obj.addEventListener("mouseleave", (event) => {
    const target = event.target
    target.querySelectorAll("*").forEach((element) => {
      element.style.display = "block"
    })
  })
})

document.getElementById("linkedin").addEventListener("click", (event)=>{
  window.location.href = "https://www.linkedin.com/in/ishraqafzal"
})

document.getElementById("email").addEventListener("click", (event)=>{
  window.location.href = "mailto:ishraqafzal407@gmail.com"
})

document.getElementById("instagram").addEventListener("click", (event)=>{
  window.location.href = ""
})

document.getElementById("github").addEventListener("click", (event)=>{
  window.location.href = "https://github.com/IshraqAfzal"
})