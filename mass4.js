function multiplication(number1,number2){
    return number1 * number2
}
function division(number1,number2){
    return number1/number2
}
function addition(number1,number2){
    return number1 + number2
}
function subtraction(number1,number2){
    return number1 - number2
}
function squared(number1,number2){
    return number1 ^ number2
}

function mycalculator(calculation,number1,number2){
    if(calculation=='multiply'){
        return multiplication(number1,number2)
    }
    if(calculation=="divide"){
        return division(number1,number2)
    }
    if(calculation=="add"){
        return addition(number1,number2)
    }
    if(calculation=="subract"){
        return subtraction(number1,number2)
    }
    if(calculation=="square"){
        return squared(number1,number2)
    }


    console.log(mycalculator('multiply',6,2))