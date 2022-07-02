//arrays and indexes 
let myArray = [50,60,70,80]
let myData = myArray[3]

console.log(myData)

//using indexes to change or modify values within arrays.
let myArrays = [18,24,56,70]
myArrays[0]= 15

console.log(myArrays)

//acessing multi-dimensional arrays using indexes
 let digits = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]
 let Mydigits = digits[3][0]

 console.log(Mydigits)

 //golf code
 let names = ["hole-in-one","birdie","eagle","par","frog","butterfly","bad"]
 function golfscore(par,strokes){
     if(strokes==1){
         return names[0]
     }
     else if(strokes<=par-2){
         return names[1]
     }
     else if(strokes==par-1){
         return names[2]
     }
     else if(strokes==par){
         return names[3]
     }
     else if(strokes==par+1){
         return names[4]
     }
 }
 console.log(golfscore(4,2))


 // counting cards using switch case statements
 let count = 0;
 let holdbet = "hold";
 if (holdbet > 0){
     holdbet = "bet";
 }


 function cc(card){
     switch(card){
        case  2:
        case  3: 
        case  4:
        case  5:
        case  6:
            count ++;
            break;
        case 10:
        case "A":
        case "Q":
        case "k":
        case "j":
            count--;
            break


     }
     return count + " " + holdbet;
 }
 
 console.log(cc(9))