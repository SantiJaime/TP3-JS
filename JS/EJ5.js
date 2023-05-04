function cadena(texto){
    let min = texto.toLowerCase()
    let may = texto.toUpperCase()
    let resultado = ''

    if(texto === min){
        resultado = "El texto está escrito sólo en minúsculas"
    }
    else if(texto === may){
        resultado = "El texto está escrito sólo en mayúsculas"
    }
    else{
        resultado = "El texto está escrito en minúsculas y mayúsculas"
    }
    return resultado
}

console.log(cadena(prompt("Ingrese su cadena de texto")))