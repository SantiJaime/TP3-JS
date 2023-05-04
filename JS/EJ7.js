let num = parseInt(prompt("Ingrese un número"));

function tabla() {
  let resultado = [];
  document.write(`<table><tbody>`);
  document.write(`<tr>`);
  for (let i = 0; i < 10; i++) {
    resultado[i] = num * (i + 1);
    document.write(`<td>${resultado[i]}</td>`);
}
    document.write(`</tr>`)

  document.write(`</tbody> </table>`);
  return resultado;
}

tabla();
