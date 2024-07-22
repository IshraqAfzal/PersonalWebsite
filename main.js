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

const projects = document.getElementsByClassName("project-mini-containers")

Array.from(projects).forEach((obj) => {
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