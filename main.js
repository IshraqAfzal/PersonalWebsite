document.getElementById("cv").addEventListener("click", ()=>{
  window.location.href = "https://docs.google.com/document/d/15I5r3DbK1uY9ydJKqiAGfdkraSo1UvuXNG6WWQlt-SQ/edit?usp=sharing"
})
document.getElementById("linkedin").addEventListener("click", ()=>{
  window.location.href = "https://www.linkedin.com/in/ishraqafzal"
})
document.getElementById("github").addEventListener("click", ()=>{
  window.location.href = "https://github.com/IshraqAfzal"
})

const elements = document.getElementsByClassName("experience-mini-containers")

Array.from(elements).forEach((obj) => {
  obj.addEventListener("mouseenter", (event) => {
    const target = event.target
    target.querySelectorAll("*").forEach((element) => {
      element.style.display = "none"
    })
    target.querySelector(".description").style.display = "block"
  })

  obj.addEventListener("mouseleave", (event) => {
    const target = event.target
    target.querySelectorAll("*").forEach((element) => {
      element.style.display = "block"
    })
    target.querySelector(".description").style.display = "none"
  })
})

const projects = document.getElementsByClassName("project-mini-containers")

Array.from(projects).forEach((obj) => {
  obj.addEventListener("mouseenter", (event) => {
    const target = event.target
    target.querySelectorAll("*").forEach((element) => {
      element.style.display = "none"
    })
    target.querySelector(".description").style.display = "block"
  })

  obj.addEventListener("mouseleave", (event) => {
    const target = event.target
    target.querySelectorAll("*").forEach((element) => {
      element.style.display = "block"
    })
    target.querySelector(".description").style.display = "none"
  })
})