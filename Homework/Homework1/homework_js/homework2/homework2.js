// Задача. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'. 

// Перебираем через цикл строку и при переборе строки если текушее значение в цикле будет равно 'a', 'b', 'e' - вывести через console 'Я знаю эту букву'
var str = 'abcde'
console.log(str[0],str[1],str[4])
console.log(str.charAt(0), str.charAt(1), str.charAt(4))


for (var i = 0; i < str.length; i++){
    if( str[i] === 'a' || str[i] === 'b' || str[i] === 'e'){
        console.log('Я знаю эту букву');
    }
    else{
        console.log("Эту букву я не знаю")
    }
}