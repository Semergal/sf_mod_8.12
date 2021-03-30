//Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

let numberRandom = Math.random(0, 100) * 100;
let roundNumber = Math.round(numberRandom);

console.log(roundNumber);
