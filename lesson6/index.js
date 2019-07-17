let linkOne = document.getElementById('linkOne');
linkOne.textContent = 'google';
linkOne.href = 'https://www.google.com';
linkOne.target = '_blank';
let linkTwo = document.getElementById('linkTwo');
linkTwo.textContent = 'w3schools';
linkTwo.href = 'https://www.w3schools.com';
linkTwo.target = '_blank';
let linkThere = document.getElementById('linkThere');
linkThere.textContent = 'stackoverflow';
linkThere.href = 'https://www.stackoverflow.com';
linkThere.target = '_blank';

let color = prompt('фон для сторінки');
document.body.style.backgroundColor = color;

let font = prompt('тип шпифта на сторінці');
document.body.style.fontFamily = font;

let align = prompt('вирівнювання для заголовка h1');
document.body.children[0].style.textAlign = align;

let background = prompt('фон для параграфа зі зсилками');
document.body.children[1].style.backgroundColor = background;

let colorTextParagraf = prompt('колір тексту у параграфі зі зсилками');
document.body.children[1].style.color = colorTextParagraf;

let a = document.getElementsByTagName('a');
let colorLink = prompt('колір тексту для зсилок');
for (let i = 0; i < a.length; i++) {
    a[i].style.color = colorLink;
}

let colorDiv = prompt('колір тексту у елементі div');
document.querySelector('#box').style.color = colorDiv;

let sizeDiv = prompt('розмір тексту у елементі div');
document.querySelector('#box').style.fontSize = sizeDiv;

let fontDiv = prompt('розмір тексту у елементі div');
document.querySelector('#box').style.fontWeight = fontDiv;

let li = document.getElementsByTagName('li');
let marker = prompt('Введіть маркування для li: disc|circle|square')
for (g = 0; g < li.length; g++) {
    li[g].style.listStyleType = marker;
}




