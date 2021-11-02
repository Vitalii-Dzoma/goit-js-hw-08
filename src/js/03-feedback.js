const mailEl = document.querySelector('[name="email"]')
const messageEl = document.querySelector('[name="message"]')
const btnEl = document.querySelector('button')

mailEl.addEventListener("input", writeIn)

function writeIn() {
localStorage.setItem("feedback-form-state", JSON.stringify({email:mailEl.value, message:messageEl.value}))

}
const savedData = localStorage.getItem("feedback-form-state")
const parsedData = JSON.parse(savedData)
document.addEventListener("DOMContentLoaded", getResult)
function getResult() {
    // console.log(localStorage.getItem("feedback-form-state")) 
    if (parsedData) {
        mailEl.value = parsedData.email
    messageEl.value = parsedData.message
    }

    // console.log(savedData)
    // console.log(parsedData)
}

   btnEl.addEventListener("submit", cleanLocalStorage)
    function cleanLocalStorage(event) {
    console.log(event)
        event.preventDefault()
      
}
 
localStorage.clear()
mailEl.value.reset()
    messageEl.value.reset()
console.log(parsedData)

     

