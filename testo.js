
//  varibale is a place holder
// ther are 3 ways of declaring variables
// const = const variable that will not change dduring code execution
// let = variable that will change during code execution
// var = old JS varibale declaration (not to be used anymore)

var name = 'Lebo'  // the varibale name is "name", the vakue is "lebo", its a type string

let age = 45 // the variable name is "age", the value is 45, its type is number/integer

const is_true = false // the varibale name is "is_true", the value is false. its type is boolean

// there are to ways of decaring a function

const sayHello = (a, b) => {
    console.log(`hello ${a}, you are ${b} old`)
} // this is the new ES6 way other wise called arrow functions

sayHello('stama', 67)

// function sayhello() {} // old way

// () => {
//     console.log('hello')
// }