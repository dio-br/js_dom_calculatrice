import {Calculator} from './main.js'


const numberButtons = document.querySelectorAll('[data-number]')
console.log(numberButtons);
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const premierElement = document.querySelector('.previous-operand')
console.log(premierElement);
const secondElement = document.querySelector('.current-operand')
const calculator = new Calculator(premierElement, secondElement)




numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.ajoutNombre(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})




