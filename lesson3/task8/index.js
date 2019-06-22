let a = +prompt('write a');
let b = +prompt('write b');
let c = b >= 0 ? b : b * -1;

let res = 1;
if (b == 0) {
    res = 1;
}

for (let i = 1; i <= c; i++) {
    res = res * a;
}

if (b < 0) {
    res = 1 / res;
}

alert(res);



