// Создайте переменную str и присвойте ей значение 'Привет, Мир!'. 
// Выведите сумму всех charCode этой переменной

var str = 'Привет, Мир!';
var result = 0;

for (var i = 0; i < str.length; i++) {
    result+=str.charCodeAt(i);
}
alert(result)