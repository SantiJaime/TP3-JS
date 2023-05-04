let i = 0
let array = []
do {
    let ciudad = prompt("Agregue una ciudad con el siguiente formato: 'Ciudad, país'")
    array.push(ciudad)
    i++

} while (confirm("¿Desea seguir agregando ciudades?"));

document.write("<h3>El array ingresado es: </h3>")
document.write("<ul>")
for(let i=0;i<array.length;i++){
    document.write(`<li>${array[i]}</li>`)
}
document.write("</ul>")

document.write(`<ul><li>El array de ciudades tiene ${array.length} elementos</li>`)

for(let i=0;i<array.length;i++){
    if(i===0){
        document.write(`<li>El elemento de la primera posición es ${array[i]}</li>`)
    }
    if(i===1){
        document.write(`<li>El elemento de la segunda posición es ${array[i]}</li>`)
    }
    if(i===2){
        document.write(`<li>El elemento de la tercera posición es ${array[i]}</li>`)
    }
    if(i+1===array.length){
        document.write(`<li>El elemento de la última posición es ${array[i]}</li>`)
    }
}
document.write("</ul>")
array.push("París")
array[1]="Barcelona"

document.write("<h3>El nuevo array es: </h3>")
document.write("<ul>")
for(let i=0;i<array.length;i++){
    document.write(`<li>${array[i]}</li>`)
}
document.write("</ul>")

document.write(`<ul><li>El nuevo array de ciudades tiene ${array.length} elementos</li>`)

for(let i=0;i<array.length;i++){
    if(i===0){
        document.write(`<li>El elemento de la primera posición es ${array[i]}</li>`)
    }
    if(i===1){
        document.write(`<li>El elemento de la segunda posición es ${array[i]}</li>`)
    }
    if(i===2){
        document.write(`<li>El elemento de la tercera posición es ${array[i]}</li>`)
    }
    if(i+1===array.length){
        document.write(`<li>El elemento de la última posición es ${array[i]}</li>`)
    }
}
