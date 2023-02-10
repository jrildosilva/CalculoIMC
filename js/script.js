import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { notANumber, CalculateIMC } from "./utils.js"
// variavéis - variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')


// 3 maneiras de criar e atribuir funçãoa um evento.

//aron function 
//form.onsubmit = () => {}

// declarando a função
// form.onsubmit = handleSubmit
// function handle() {

//}
 





// função anomina
form.onsubmit = event => {
 event.preventDefault()

 const weight = inputWeight.value
 const height = inputHeight.value

 const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height) 
  if(weightOrHeightIsNotANumber) {
     AlertError.open()
     return;
  }
  AlertError.close()

 const result = CalculateIMC(weight, height)
 displayResultMessage(result)

 inputWeight.oninput = () =>  AlertError.close()
 inputHeight.oninput = () =>  AlertError.close()
 
}

function displayResultMessage(result) {
  const message = ` Seu IMC é de: ${result}`

  Modal.message.innerText = message
  Modal.open()
}




