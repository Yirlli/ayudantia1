// let numero = 4

// let  atun = 8

// let calculo = 4 +8 

// console.log( numero)
// console.log(atun)
// console.log(calculo)
// console.log(calculo-8)
// alert("Bienvenidos")

// let mensajes = prompt("ingresa mensaje")
// alert(mensajes)
let materiaUno = document.getElementById("materia1")

let materiaDos = document.getElementById("materia2")

let materiaTres = document.getElementById("materia3")

let materia1 = prompt("Ingresa materia 1")
let materia2 = prompt("Ingresa materia 2")
let materia3 = prompt("Ingresa materia 3")

materiaUno.innerHTML = materia1
materiaDos.innerHTML = materia2
materiaTres.innerHTML = materia3

let html_nota_1 = document.getElementById("html_nota_1")
let htmlNotaUno = parseInt(prompt("Ingrese la nota 1 HTML"))

html_nota_1.innerHTML = htmlNotaUno

let html_nota_2 = document.getElementById("html_nota_2")
let htmlNotaDos = parseInt(prompt("Ingrese la nota 2 HTML"))

html_nota_2.innerHTML = htmlNotaDos

let html_nota_3 = document.getElementById("html_nota_3")
let htmlNotaTres = parseInt(prompt("Ingrese la nota 3 HTML"))

html_nota_3.innerHTML = htmlNotaDos

let promedioHTML = document.getElementById("promedio_html")
let promedio = (htmlNotaUno+ htmlNotaDos+htmlNotaTres)/3
promedioHTML.innerHTML = promedio


