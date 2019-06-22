
let num = +prompt('write number');
let isNumSimple = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isNumSimple = false;
        break;
    }

}

if (isNumSimple) {
    alert("number is simple");
}
else{
    alert('number is not simple');
}