// var first = document.getElementById('first')
// var second = document.getElementById('second')
// var third = document.getElementById('third')
// всплытие ( всплытие элемента с низу вверх (погружение, клик, всплытие) )
//first.onclick = (event) => {
//    console.log('First click')
//}
//second.onclick = (event) => {
//    console.log('Second click')
//}
//third.onclick = (event) => {
 //   console.log('Third click')
//}

//(fazu)
//first.onclick = (event) => {
//    console.log('First click', event.eventPhase)
//}
//second.onclick = (event) => {
//    console.log('Second click', event.eventPhase)
//}
//third.onclick = (event) => {
//    console.log('Third click', event.eventPhase)
//}
//(вывод только одной фазы)
// first.addEventListener('click', (event) => {
//     console.log('First click', event.eventPhase)
// }, )
// second.addEventListener('click', (event) => {
//     console.log('Second click', event.eventPhase)
// })
// third.addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log('Third click', event.eventPhase)
// }, )


var btn = document.getElementById('open')
var menu = document.getElementById('menu')

btn.onclick = (event) => {
    event.stopPropagation()
    menu.classList.toggle('active')
}

menu.onclick = (event) => event.stopPropagation()

document.body.onclick = () => menu.classList.remove('active')
