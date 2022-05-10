let pencil_name
let pencil_price
let pencil_quantity = 20


function pencilsales(name,price){
    pencil_name =name
    pencil_price = price
    pencil_quantity = reducedquantity()
        console.log(
            pencil_name,
            pencil_price,
            pencil_quantity)
    
}

function reducedquantity(){
    return pencil_quantity -1
}
 

pencilsales ('masb',2)