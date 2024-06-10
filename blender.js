var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr
  }

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var shuffledArr = myBlend(arr);
console.log(shuffledArr);