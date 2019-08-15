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
        this.txtCurrentOperand.innerText = this.GetDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.txtPreviousOperand.innerText = `${this.GetDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            txtPreviousOperand.innerHTML = '';
        }
    }


    GetDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
    }
    
    Compute() {

        let computation
        // Pegando as strings prévio e atual e convertendo em número
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

            if(isNaN(prev) || isNaN(current)) return
            switch(this.operation) {
                case '+':
                    computation = prev + current
                break
                case '-':
                    computation = prev - current
                break
                case 'x':
                    computation = prev * current
                break
                case '÷':
                    computation = prev / current
                break
                default:
                    return
                break
            }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
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