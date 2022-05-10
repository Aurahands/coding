let laptop_name
let laptop_price
let laptop_quantity = 100
let laptop_purchased = true

function laptopSales(name,price){
    laptop_name = name
    laptop_price = price 
    laptop_quantity = quantityReduced()
    laptop_purchased = true 
    console.log(
        laptop_name,
        laptop_price,
        laptop_quantity,
        laptop_purchased)
     }   
        function quantityReduced(){
           return laptop_quantity - 2

           }

           laptopSales('macbook',2)
     
