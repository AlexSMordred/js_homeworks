function isNaNFunc(value) {

    var isNaNres
     
    isNaNres = typeof value === 'number' && isFinite(value);
    
    return isNaNres
}
console.log(isNaNFunc(NaN));         
console.log(isNaNFunc(123));         
console.log(isNaNFunc("hello"));     
console.log(isNaNFunc(undefined));   
console.log(isNaNFunc({}));          
console.log(isNaNFunc([]));          
console.log(isNaNFunc('NaN'));       
console.log(isNaNFunc(0 / 0));