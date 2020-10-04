// Спрашиваем у пользователя через prompt число.
// Если пользователь ввёл 10h, то мы выводим ему количество секунд за 10 часов.
// Если пользователь ввёл 10d, то мы выводим ему количество секунд за 10 дней.
// Если пользователь ввёл 10w, то мы выводим ему количество секунд за 10 недел.
// Если пользователь ввёл 10m, то мы выводим ему количество секунд за 10 месяц.
var userInput = prompt('Введите число');
var userNumber = parseInt(userInput);
var userString = userInput.slice(-1);
var result = 0;
if (userString==='h'){
    result = userNumber*60*60;
}
if (userString==='d'){
    result = userNumber*24*60*60;
}
if (userString==='w'){
    result = userNumber*7*24*60*60;
}
if (userString==='m'){
    result = userNumber*30*24*60*60;
}
alert(result + ' Секунд' );