var Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    
    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);

            }

        }

        console.log('\n');
        
    }

};


Car.getInfo();

Car.color = 'White';

Car.getInfo();  

Car.power = 355;

Car.getInfo();