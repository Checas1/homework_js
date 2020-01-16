var app = document.getElementById('app')

function Circle(size, backgroundColor, score, zIndex = 0){
    var element = document.createElement('div')
    element.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background-color: ${backgroundColor};
    position: absolute;
    top: calc(50% - ${size / 2}px);
    left: calc(50% - ${size / 2}px);
    z-index: ${zIndex}   
    `
    this.appendToApp = () => app.appendChild(element)
}

var circles = [new Circle(400, 'blue', 10),
new Circle(200, 'green', 20, 1),
new Circle(100, 'red', 50, 2)]

circles.forEach((circle) => circle.appendToApp())

function Bird(size, imageSrc, intervalTime, zIndex = 5){
    var element = document.createElement('img')
    element.src = imageSrc
    element.style.cssText = `
    position: absolute;
    width: ${size}px;
    z-index: ${zIndex};
    transition: ${intervalTime / 1000}s all;
    `
    var random = (min, max) => Math.round(Math.random() * (max - min) + min)

    this.appendToApp = () => app.appendChild(element)
    this.startInterval = () => {
        setInterval(() => {
            element.style.top = `${random(0, window.innerHeight)}px`
            element.style.left = `${random(0, window.innerHeight)}px`
        }, intervalTime)
    }
}

var birds = [
    new Bird(
        100,
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6165d18-54f5-4989-900d-ae5404b57f0b/dal9hu1-312417ff-2ea6-4173-bcd7-54d8ba098071.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MTY1ZDE4LTU0ZjUtNDk4OS05MDBkLWFlNTQwNGI1N2YwYlwvZGFsOWh1MS0zMTI0MTdmZi0yZWE2LTQxNzMtYmNkNy01NGQ4YmEwOTgwNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JPmCY9W7V-fPlPl7tXMgahfAZ8UmpeWPNRBqR3-vmuQ',
        1500
    )
]

birds.forEach((bird) => bird.appendToApp())
birds.forEach((bird) => bird.startInterval())

// var orel = document.createElement('img')
// orel.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6165d18-54f5-4989-900d-ae5404b57f0b/dal9hu1-312417ff-2ea6-4173-bcd7-54d8ba098071.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MTY1ZDE4LTU0ZjUtNDk4OS05MDBkLWFlNTQwNGI1N2YwYlwvZGFsOWh1MS0zMTI0MTdmZi0yZWE2LTQxNzMtYmNkNy01NGQ4YmEwOTgwNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JPmCY9W7V-fPlPl7tXMgahfAZ8UmpeWPNRBqR3-vmuQ'
// orel.style.width = '100px'
// orel.style.position = 'absolute'
// orel.style.transition = '1.5s all'
// orel.style.zIndex = 4
// app.appendChild(orel)
// app.appendChild(orel)

// setInterval(() => {
//     orel.style.top = `${Math.round(Math.random()* window.innerHeight )}px`
//     orel.style.left = `${Math.round(Math.random()* window.innerWidth )}px`
// }, 1500)
// var circuleOne = document.createElement('div')

// circuleOne.style.height = '100px'
// circuleOne.style.width = '100px'
// circuleOne.style.borderRadius = '50%'
// circuleOne.style.backgroundColor = 'red'
// circuleOne.style.position = 'absolute'
// circuleOne.style.top = 'calc(50% - 50px)'
// circuleOne.style.left = 'calc(50% - 50px)'
// circuleOne.style.zIndex = 3
// circuleOne.onclick = (event) => {
//     console.log('Vi popali v tochku red')
// }

// var circuleTwo = document.createElement('div')
// app.appendChild(circuleTwo)
// circuleTwo.style.height = '200px'
// circuleTwo.style.width = '200px'
// circuleTwo.style.borderRadius = '50%'
// circuleTwo.style.backgroundColor = 'green'
// circuleTwo.style.position = 'absolute'
// circuleTwo.style.top = 'calc(50% - 100px)'
// circuleTwo.style.left = 'calc(50% - 100px)'
// circuleTwo.style.zIndex = 2
// circuleTwo.onclick = (event) => {
//     console.log('Vi popali v tochku green')
// }

// var circuleThree = document.createElement('div')
// app.appendChild(circuleThree)
// circuleThree.style.height = '400px'
// circuleThree.style.width = '400px'
// circuleThree.style.borderRadius = '50%'
// circuleThree.style.backgroundColor = 'blue'
// circuleThree.style.position = 'absolute'
// circuleThree.style.top = 'calc(50% - 200px)'
// circuleThree.style.left = 'calc(50% - 200px)'
// circuleThree.style.zIndex = 1
// circuleThree.onclick = (event) => {
//     console.log('Vi popali v tochku blue')
// }

// var circuleFour = document.createElement('div')
// app.appendChild(circuleFour)
// circuleFour.style.height = '600px'
// circuleFour.style.width = '600px'
// circuleFour.style.borderRadius = '50%'
// circuleFour.style.backgroundColor = 'purple'
// circuleFour.style.position = 'absolute'
// circuleFour.style.top = 'calc(50% - 300px)'
// circuleFour.style.left = 'calc(50% - 300px)'
// circuleFour.onclick = (event) => {
//     console.log('Vi popali v tochku green')
// }

var img = document.createElement('img')
img.src = 'dart.png'
img.style.zIndex = 10
img.style.width = '80px'
img.style.position = 'absolute'
app.appendChild(img)

var style = document.createElement('style')
style.innerText = `
html, body {
    height: 100%;
}
body:hover{
    cursor: none;
}
`
document.head.appendChild(style)

window.onmousemove = (event) => {
    img.style.top = `${event.clientY - 80}px`
    img.style.left = `${event.clientX - 80}px`
}

