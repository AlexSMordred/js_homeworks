
var number = 100
var sum = 0

for (let i = 1;i <= number;i ++){

    if (i % 3 !== 0){
        sum += i
    } else {
        continue
    }

    console.log(sum)
}

console.log("Сумма чисел не кратных 3:" + sum)

