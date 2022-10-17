const themeLink = document.querySelector("#theme")
const pageBody = document.querySelector("body")

themeLink.onclick = (e) => {
  if (pageBody.classList.contains("dark-mode")) {
    pageBody.classList.remove("dark-mode")
  } else {
    pageBody.classList.add("dark-mode")
  }
}
