function multiplication(number1, number2) {
    return number1 * number2
}
function addition(number1, number2){
    return number1 + number2
}
function division(number1, number2){
    return number1/number2
}
function subtraction(number1, number2) {
    return number1 - number2
}

function squaring(number1, number2) {
    return number1 ^ number2
}

function MyCalculator(calculation, number1, number2) {
    if (calculation == 'multiply') {
        return multiplication(number1, number2)
    }
    if (calculation == 'add') {
        return addition(number1, number2)
    }
    if (calculation == 'subtract') {
        return subtraction(number1, number2)
    }
    if (calculation == 'divide') {
        return division(number1, number2)
    }

    if (calculation == 'square') {
       return squaring(number1, number2)
    }
}


console.log(MyCalculator('multiply', 2,3))