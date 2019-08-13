let string = 'Helloblabl a';
let pos = 0;
count = 0;
while(true){
    let res = string.indexOf(' ',pos)
    if(res == -1)break;
    pos = res + 1;
    count++
}
console.log(count);