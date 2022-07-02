//using 'if statements to make decisions in code.
//dertimine if the the statements made was true or false using boleans

function trueOrfalse(isItTrue){
    if(isItTrue){
        return "yes, it is true";
    }
    return "no, it is false";
}
console.log(trueOrfalse(true))

function WrongOrRight(isItTrue){
    if(isItTrue){
        return " yes, it is right";
    }
    return "no, it is wrong";
}
console.log(WrongOrRight(false))

function employedOrUnemployed(isItTrue){
    if(isItTrue){
        return "yes, he is employed";
    }
    return "no, he is unemployed";
}
console.log(employedOrUnemployed(false))


//using '==' to test if values are equal. able to convert string to a number.
function testEqual(val){
    if(val==12){
        return "equal";
    }
    return "not equal";
}

console.log(testEqual("12"))


//using '===' to strictly test equality between values and strings. doesnt convert a string to a number

function TestIsEqual(val){
    if(val===10){
        return "equal";
    }
    return "not equal";
}

console.log(TestIsEqual("10"))

//comparing equality betwween vals using '=='

function CompareEquality(a,b){
    if(a==b){
        return "equal";
    }
    return "not equal"
}
console.log(CompareEquality(10,9))


//comparing equality between val using '==='
 
function CompareEquality(a,b){
    if(a===b){
        return " equal";
    }
    return "not equal";
}
console.log(CompareEquality("10","10"))

//test not equal operator. convert number and string '!='

function notEqual(val){
    if(val !=10){
        return "not equal";
    }
    return "equal";
}

console.log(notEqual(10))

//using strictnotequal operator. doesnt convert number and string '!=='

function notEqual(val){
    if(val !==5){
        return "not equal";
    }
    return "equal";
}
console.log(notEqual(3))

// greater or lesser values using'>= or <='
function lessOrgreater(val){
    if(val >=25 && val <=50){
       return "yes";
    }
    return "no ";
}
console.log(lessOrgreater(10))

//using or '||' checking if values are outside or inbetween
function logicaltest(val){
    if(val <=10 || val >=20){
        return "outside";
    }
    return "inside";
}
console.log(logicaltest(7))

//using else if statements
function testelseif(val){
    if(val<5){
        return "less than 5";
    }
    else if(val>10){
        return "bigger than 10";
    }
    else if(val<5 || val <10){
        return "between 5 and 10";
    }
    else {
        return "alot bigger";
    }
    }
        

console.log(testelseif(1))

// using else if statements to dertimine age differences
 function growthpatterns(age){
     if(age< 03){
         return "infant";
     }}
      console.log(growthpatterns(01))


// using else if statements 

function testelseif(num){
    if(num<5){
        return "tiny";
    }
    else if(num<10){
        return "small";
    }
    else if(num<15){
        return "medium";
    }
    else if(num<20){
        return "big";
    }
    else {
        return "huge";
    }
}

console.log(testelseif(21))