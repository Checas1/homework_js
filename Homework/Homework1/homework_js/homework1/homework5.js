var pattern = /воскресенье/;
var patern = /суббота/;
var content = prompt('Введите день недели', 0);
var exists = pattern.test(content);
var existss = patern.test(content);

if(exists || existss ) {
    alert("Вам не нужно на работу"); 
}
else {
    alert ( "Вам нужно на работу" );
}