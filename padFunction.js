function pad(string, char, lengthOfString, padStart){

    var str
    var countOfSymbol
    var lengthOfSymbol
    var fullString

    if (isNaN(string)){
        str = string
    } else {
        str = toString(string)
    }
    
    lengthOfSymbol = lengthOfString - str.length

    countOfSymbol = char.repeat(lengthOfSymbol) 

    if (padStart === true){
        fullString = countOfSymbol + str
    } else {
        fullString = str + countOfSymbol
    }

    return fullString

}

console.log(pad("alex",'*',12,true))