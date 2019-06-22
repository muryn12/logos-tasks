let name = prompt('write name');
if (name == null) {
    alert('Вхід скасовано');
}
else if (name !== null && name.toLowerCase() === 'імя') {
    let pass = prompt('write password');
    if (pass == null) {
        alert('Вхід скасовано');
    }
    else if (pass == 'ЛОГОС') {
        alert('Ласкаво просимо');
    }
    else if (pass !== null && pass !== 'ЛОГОС') {
        alert('Пароль не вірний');
    }
}
else if (name !== null && name.toLowerCase() !== 'імя') {
    alert('Я вас не знаю');
}