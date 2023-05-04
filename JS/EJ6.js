let h = parseFloat(prompt("Ingrese la altura del rectángulo"))
let b = parseFloat(prompt("Ingrese la base del rectángulo"))

function perimetro(){
    let p = 2 * (h + b)
    return p
}

console.log("El perimetro del rectángulo es " + perimetro())


