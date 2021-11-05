import { throttle } from "lodash"
const mailEl = document.querySelector('[name="email"]')
const messageEl = document.querySelector('[name="message"]')
const btnEl = document.querySelector('button')
const formEl = document.querySelector('.feedback-form')
mailEl.addEventListener("input", throttle(writeIn, 500) )
messageEl.addEventListener("input", throttle(writeIn, 500))

function writeIn() {
    localStorage.setItem("feedback-form-state", JSON.stringify({
        email: mailEl.value,
        message: messageEl.value,
    }))
 const savedData = localStorage.getItem("feedback-form-state")
    const parsedData = JSON.parse(savedData)

     
function cleanLocalStorage(event) {
     console.log(parsedData)
             event.preventDefault()
             formEl.reset();
                localStorage.clear();
    }
    
    formEl.addEventListener("submit", cleanLocalStorage)
}

function getResult() {
    if (parsedData) {
        mailEl.value = parsedData.email
    messageEl.value = parsedData.message
    }

}


  




     

