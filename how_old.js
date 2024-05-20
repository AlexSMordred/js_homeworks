

var prompt = require('prompt');

prompt.start();
prompt.get(['age'], function (err, result) {

    let years = result.age

    if (isNaN(years) || years <= 0){

        console.log("Введіть правильний вік!")

    } else {
        years = Number(years)

        if (years % 10 === 1 && years % 100 !== 11) {
            years_word = " рік";
        } else if ((years % 10 >= 2 && years % 10 <= 4) && !(years % 100 >= 12 && years % 100 <= 14)) {
            years_word = " роки";
        } else {
            years_word = " років";
        }
        
        console.log(' age: ' + result.age + years_word);
    }

});

