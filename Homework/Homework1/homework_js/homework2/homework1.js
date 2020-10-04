// 1Напишите код вычисления суммы всех нечетных чисел от 0 до заданного числа N
var finalNumber = Number(prompt("Enter a final number"));
var result = 0;
for (var i = 0; i<=finalNumber; i++){
    if (i%2) {
        result+=i;
    }
}
console.log(result);
