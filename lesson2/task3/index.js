let month = prompt('write number month');
if(month>=1&&month<=12){
if(month>=1&&month<=2){
alert('winter');
}
else if(month>=3&&month<=5){
    alert('spring');
}
else if(month>=6&&month<=8){
    alert('summer');
}else if(month>=9&&month<=11){
    alert('autumn');
}
else if(month==12){
alert('winter');
}
}
else{
    alert('the number is not correct');
}