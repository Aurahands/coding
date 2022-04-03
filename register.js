let student_name
let student_surname
let student_course
let date_of_birth
let student_id_number
let student_is_registered = false


function registerStudent(name, surname, course, dob, id_number) {
    const newDate = new Date(dob)
    date_of_birth = newDate
    student_name = name
    student_surname = surname
    student_id_number = id_number
    student_course = course
    register(true)

}

function register(registered) {
    student_is_registered = registered
    console.log({
        student_name,
        student_surname,
        date_of_birth,
        student_id_number,
        student_course,
        student_is_registered
    })
}

// registerStudent('Mpintsi', 'Laser eyes', 'Sex druggs', '2001-07-30', 'qwedqwedqwedqwe')


let product_name
let product_price
let product_quantity = 10



function productPurchased  (name,price) {
    product_name = name
    product_price = price
    product_quantity = reduceQuuatity()
    console.log({
        product_name,
        product_price,
        product_quantity
    
    })
}


const reduceQuuatity = ()=> {
    return product_quantity -1
}


productPurchased('simbachips', 7)
