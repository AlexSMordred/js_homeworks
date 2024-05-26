function triangle (height, symbol) {

    for (let i = 1; i <= height; i++){
        let line = ""
        for(j = 0; j < i; j++){
            line += symbol
        }

        console.log(line)
    }

}

triangle(10,':')
