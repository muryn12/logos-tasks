let startNumber = 1;
let multiplier = +prompt('Введіть знаменник');
let quantity = +prompt('Введіть кількість елементів прогресії');

for(let i = 1; i <= quantity; i++) {
console.log(startNumber);
startNumber *= multiplier;
}

sequenceSum = startNumber (quantity^multiplier – 1) / (quantity – 1);