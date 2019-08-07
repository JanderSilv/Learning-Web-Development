class Calculator {
    
    constructor (txtPreviousOperand, txtCurrentOperand) {
        this.txtPreviousOperand = txtPreviousOperand
        this.txtCurrentOperand = txtCurrentOperand
        this.Clear();
    }
    
    AddNumber(number) {
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
    ChooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.Compute()
        }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }
    
    Delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    UpdateDisplay() {
        this.txtCurrentOperand.innerText = this.currentOperand
        this.txtPreviousOperand.innerText = this.previousOperand
    }
    
    Compute() {

    }
    
    Clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    
}

const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const txtPreviousOperand = document.querySelector('[data-previous-operand]')
const txtCurrentOperand = document.querySelector('[data-current-operand]')

const calculator = new Calculator(txtPreviousOperand, txtCurrentOperand)

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.AddNumber(button.innerText)
            calculator.UpdateDisplay()
        })
    })

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.ChooseOperation(button.innerText)
            calculator.UpdateDisplay()
        })
    })

    equalsButton.addEventListener('click', button => {
        calculator.Compute()
        calculator.UpdateDisplay()
    })
    
    allClearButton.addEventListener('click', button => {
        calculator.Clear()
        calculator.UpdateDisplay()
    })

    deleteButton.addEventListener('click', button => {
        calculator.Delete()
        calculator.UpdateDisplay()
    })