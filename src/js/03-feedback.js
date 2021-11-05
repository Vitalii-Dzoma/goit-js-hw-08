import { throttle } from "lodash"

const mailEl = document.querySelector('[name="email"]')
const messageEl = document.querySelector('[name="message"]')
const btnEl = document.querySelector('button')
const formEl = document.querySelector('.feedback-form')
mailEl.addEventListener("input", throttle(writeIn, 500) )
messageEl.addEventListener("input", throttle(writeIn, 500))
let parsedData
if (localStorage.getItem("feedback-form-state")) {
  parsedData = JSON.parse(localStorage.getItem("feedback-form-state"))
    mailEl.value = parsedData.email
  messageEl.value = parsedData.message
  
}

function writeIn() {
    localStorage.setItem("feedback-form-state", JSON.stringify({
        email: mailEl.value,
        message: messageEl.value,
    }))

    parsedData = JSON.parse(localStorage.getItem("feedback-form-state"))
}


formEl.addEventListener("submit", cleanLocalStorage)
     
function cleanLocalStorage(event) {
    event.preventDefault()
    console.log(parsedData)
    formEl.reset()
    localStorage.clear()
}
  




     

