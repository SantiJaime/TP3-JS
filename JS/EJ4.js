function div(num){
    let texto = ''
    if(num % 2 === 0){
        texto = "El número es par"
    }
    else{
        texto = "El número es impar"
    }
    return texto
}

console.log(div(parseInt(prompt("Ingrese un número"))))