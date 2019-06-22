let count = 5;
let isPassCorrect = false;
while (count > 0 && !isPassCorrect) {
    let pass;
    if (count === 5) pass = prompt('Введіть пароль');
    else pass = prompt(`У вас залишилось ${count} спроби`);

    //let pass = count === 5 
    //    ? prompt('write password') 
    //    : prompt(`У вас залишилось ${count} спроби`);

    //let text = count === 5 ? 'write password' : `У вас залишилось ${count} спроби`;
    //let pass = prompt(text); 

    if (pass == 'логос') {
        isPassCorrect = true;
        alert('Запрошуємо на сайт!');
    }
    count--;
}
if (count == 0) {
    alert('Будь ласка спробуйте пізніше!');
}


