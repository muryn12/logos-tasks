let n = prompt("number?");
let s = 0;

while (n > 0) {
    s += n % 10;
    n = Math.floor(n / 10);
}

alert("summa: " + s);
