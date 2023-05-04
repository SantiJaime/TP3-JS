let ap = []
let sumas = []

for(let i=0;i<11;i++){
    ap[i]=0
}

for(let i=0;i<50;i++){
    let num1= Math.floor(Math.random()*6) + 1
    let num2= Math.floor(Math.random()*6) + 1

    let suma = num1 + num2
    sumas.push(suma)
    let aux = suma - 2
    
        for(let j=2;j<13;j++){
            if(suma === j){
                contador(aux)
                break;
            }
        }
}
console.log("El array de las sumas es:")
console.log(sumas)
document.write("<ul>")
for(let i=1;i<=11;i++){
    document.write(`<li>La suma "${i+1}" se repitió ${ap[i-1]} veces</li>`)
}
document.write("</ul>")

function contador(aux){
    ap[aux]++

    return ap
}