//  variable

//  Data type

// const = variable is constant and cannot be change later in the code. and must be initialized.
// let = let means a variable can change during code execution

const myname = 'Steven' // string 
let age = 40 //integer
const gender = 'male' // string

// datatype of boolean
var diabetic = true


//  function / method

const addition = (num1, num2) => {
    let err;
    // condition statements
    if (num1 == null || num2 == null) {
        err = new Error('Please enter 2 number')
        return err
    }
    if (typeof num1 != 'number' || typeof num2 !== 'number') {
        err = new Error("Nope not a number")
        return err
    }

    return num1 + num2
}

const sayHello = (myname, age, gender='male') => {
    
    let gen
    if (gender === 'female') {
        gen = "bitch"
    } else
    {
        gen = 'nigga'
    }

    console.log(`Hey ${myname} you little ${gen}, you are ${age} years old`)
}

// calling a function
// paramaters
// sayHello()

const added_date = addition(6, )

console.log(added_date)