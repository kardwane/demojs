const themeLink = document.querySelector("#theme")
const pageBody = document.querySelector("body")
const addLorem = document.querySelector("#addLorem")
const result = document.querySelector("#result")

themeLink.onmouseover = () => {
  if (pageBody.classList.contains("dark-mode")) {
    pageBody.classList.remove("dark-mode")
  } else {
    pageBody.classList.add("dark-mode")
  }
}


addLorem.addEventListener('click', function(){
  let newP = document.createElement('p')
  newP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam vitae nulla facilis possimus molestiae necessitatibus optio ab nesciunt voluptatibus, ratione quasi laborum. Corrupti, beatae odit! Possimus a odio voluptatem."
  newP.id = "newP"+document.querySelectorAll('#result p').length
  result.appendChild(newP)
})