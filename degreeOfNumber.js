function degree(number,degree){

    let num = 1

    for(let i = 1;i <= degree; i++){
        num *= number
    }
    console.log('Степень числа ' + number + ' равна:' + num)
}

degree(5,3)