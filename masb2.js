let pencil_brand
let pencil_color = null
let pencil_price
let pencil_quantity = 5
let isbought = true

function pencilsales(brand,color,price){
    pencil_brand=brand
    pencil_colour=color
    pencil_price=price
    pencil_quantity=addedquantity()
    isbought = true
    console.log(
        pencil_brand,
        pencil_color,
        pencil_price,
        pencil_quantity,
        isbought)
}

function addedquantity() {
    return pencil_quantity +1
}

pencilsales ('bic','blue',2)