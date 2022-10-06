const btnSubmit1 = document.querySelector("#form1>button")
const form2 = document.querySelector("#form2")
const input1 = document.querySelector("#form1>input")
const input2 = document.querySelector("#form2>input")
const presult = document.querySelector("#presult")

const doubleValue = (number) => {
  presult.textContent = number * 2
}

btnSubmit1.addEventListener("click", function (e) {
  e.preventDefault()
  doubleValue(input1.value)
})

form2.addEventListener("submit", function (e) {
  e.preventDefault()
  doubleValue(input2.value)
})

