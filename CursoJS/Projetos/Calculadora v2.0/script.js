let firstInput = true
let displayValue

function addCharacter(character) {

    if (firstInput) {
        document.calcInput.txtVisor.value = ""
        firstInput = false;
    }

    document.calcInput.txtVisor.value += `${character}`
}

function deleteCharacter() {
    document.calcInput.txtVisor.value -= ""
}

function ResetCalc() {
    displayValue = 0
    document.calcInput.txtVisor.value = "0"
    firstInput = true;
}

function Resolver() {
    document.calcInput.txtVisor.value = eval(document.calcInput.txtVisor.value)
    console.log(displayValue)
}

function Quadrado() {
    displayValue = Number(document.calcInput.txtVisor.value)
    displayValue = displayValue * displayValue
    document.calcInput.txtVisor.value = displayValue
}