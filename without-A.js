var test = /(?<![b-zB-Z])(?<![aA])[b-zB-Z]+(?=\b)(?![aA])/g

var text = 'On a sunny Saturday, Alexey decided to visit the nearest supermarket to restock his groceries. He put on his favorite cap and set off. Upon arriving at the store, Alexey grabbed a cart and headed to the produce section. There, he picked up some fresh tomatoes, cucumbers, and a bunch of greens for a salad.'

console.log(text.match(test))