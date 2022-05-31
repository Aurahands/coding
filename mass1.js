function ourTrueorFalse(isItTrue) {
    if(isItTrue) {
        return "yes it is True";
    }
    return "No it is not false"
}

// console.log(ourTrueorFalse(true))


function pencileBought(isItTrue){
    if(isItTrue) {
        return " yes its true a pencil was bought";
    }
    return "no its false no pencil was bought";
}

// console.log(pencileBought(false))


function testElseIf(val){
    if(val>5){
        return " greater than 5";
    }
    else if(val<2){
        return " less than 2";
        }
        else 
        return " between 2 and 5";
    }

// console.log(test


// ElseIf(6))


let names = ["ziggy","namhla","bulumnko"]

function nameQuery(name) {
    //  I need to get a parameter with the name value [x]

    let isPresent = false
    // I need to check if the name is present [x]

    if (names[0] == name) {
        isPresent = true
        return name + " " + isPresent
    }
    if (names[1] == name) {
        isPresent = true
        return name + " " + isPresent
    }
    if (names[2] == name) {
        isPresent = true
        return name + " " + isPresent
    }

    return name + " " + isPresent

    // I need to test the names array for the name I need [x]
}


console.info(nameQuery('ziggy'))






let crimesCommited = ["robery","murder","theft","hijack"]

function statistics(index){
    let IsCharged = 'low'
    if (crimesCommited[index]){
        IsCharged = 'high'
        return IsCharged
    }
    return("no crimes available " + IsCharged)
}
console.log(statistics(0))