var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
};

services.price = function() {
    
    let total = 0;

    for (let key in this) {

        if (typeof this[key] === "string" && this[key].substring(this[key].length - 3) === "грн") {
            total += parseInt(this[key].slice(0, -4));
        }
    }
    return total + " грн";
};

services.minPrice = function() {
    
    let min = Infinity;
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].substring(this[key].length - 3) === "грн") {
            let price = parseInt(this[key].slice(0, -4));
            if (price < min) {
                min = price;
            }
        }
    }
    return min + " грн";
};

services.maxPrice = function() {
    
    let max = 0;
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].substring(this[key].length - 3) === "грн") {
            let price = parseInt(this[key].slice(0, -4));
            if (price > max) {
                max = price;
            }
        }
    }
    return max + " грн";
};

console.log("Загальна вартість послуг: ", services.price());
console.log("Мінімальна вартість послуги: ", services.minPrice());
console.log("Максимальна вартість послуги: ", services.maxPrice());