function checkProbabilityTheory(count) {
    
    let pairCount = 0;
    let notPairCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNum % 2 === 0) {
            pairCount++;
        } else {
            notPairCount++;
        }
    }

    let pairPercent = (pairCount / count) * 100;
    let notPairPercent = (notPairCount / count) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${pairCount}`);
    console.log(`Непарних чисел: ${notPairCount}`);
    console.log(`Відсоток парних до непарних: ${pairPercent}% парних, ${notPairPercent}% непарних`);
}

checkProbabilityTheory(20)