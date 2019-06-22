let asc1 = prompt('Найбільша планета сонячної системи');
let counter = 0;
console.log(counter);
if(asc1.toLowerCase()=='юпітер'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let asc2 = prompt('Найбільший океан');
console.log(counter);
if(asc2.toLowerCase()=='тихий'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let asc3 = prompt('Найдовша ріка в світі');
console.log(counter);
if(asc3.toLowerCase()=='ніл'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let asc4 = prompt('Найбільший острів');
console.log(counter);
if(asc4.toLowerCase()=='гренландія'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let asc5 = prompt('Найповноводніша річка у світі');
console.log(counter);
if(asc5.toLowerCase()=='амазонка'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let asc6 = prompt('Найвища гора в світі');
console.log(counter);
if(asc6.toLowerCase()=='еверест'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let asc7 = prompt('Найглибше озеро в світі');
console.log(counter);
if(asc7.toLowerCase()=='байкал'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let asc8 = prompt('Головне місто країни');
console.log(counter);
if(asc8.toLowerCase()=='столиця'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let asc9 = prompt('Імя мореплавця, який відкрив Америку');
console.log(counter);
if(asc9.toLowerCase()=='христофор колумб'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let asc10 = prompt('Сторона світла');
console.log(counter);
if(asc10.toLowerCase()=='схід'){
    console.log('Відповідь вірна');
    counter++;
}
console.log(counter);
let points = counter;
if(points==0){
    alert('Зовсім не знаєте географії');
}
if(points>0&&points<=3){
alert('Ваші знання географії дуже погані');
}
if(points>=4&&points<=8){
    alert('Ще трохи треба підівчити географію');
}
if(points>8){
    alert('Вітаю ви чудово знаєте географію ');
}