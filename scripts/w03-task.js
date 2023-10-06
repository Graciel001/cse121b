/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(numb1, numb2){
    const sum = numb1 + numb2
    return sum
}
function addNumbers(){
    const firstNumber = parseFloat(document.querySelector("#add1").value)
    const secondNumber = parseFloat(document.querySelector("#add2").value)

    const sum = add(firstNumber, secondNumber)
    document.querySelector("#sum").value = sum
}

document.querySelector("#addNumbers").addEventListener('click', addNumbers)
/* Function Expression - Subtract Numbers */
function subtract(numb1, numb2){
    const subtract = numb1 - numb2
    return subtract
}
function subtractNumbers(){
    const firstNumber = parseFloat(document.querySelector("#subtract1").value)
    const secondNumber = parseFloat(document.querySelector("#subtract2").value)

    const sub = subtract(firstNumber, secondNumber)
    document.querySelector("#difference").value = sub
}

document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (numb1, numb2) =>{
    const multiply = numb1 * numb2
    return multiply
}
const multNumbers = () =>{
    const firstNumber = parseFloat(document.querySelector("#factor1").value)
    const secondNumber = parseFloat(document.querySelector("#factor2").value)

    const mult = multiply(firstNumber, secondNumber)
    document.querySelector("#product").value = mult
}
document.querySelector("#multiplyNumbers").addEventListener('click', multNumbers)
/* Open Function Use - Divide Numbers */
const divide = (numb1, numb2) =>{
    const divide = numb1 / numb2
    return divide
}
const divideNumbers = () =>{
    const firstNumber = parseFloat(document.querySelector("#dividend").value)
    const secondNumber = parseFloat(document.querySelector("#divisor").value)

    const div = divide(firstNumber, secondNumber)
    document.querySelector("#quotient").value = div
}
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers)

/* Decision Structure */
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
document.getElementById("#year").value = currentYear
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
