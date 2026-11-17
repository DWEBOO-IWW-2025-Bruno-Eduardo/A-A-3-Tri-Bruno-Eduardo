
// Exercício 3
const ano = Number(prompt("Digite um ano:"));

const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

console.log("O ano " + ano + (bissexto ? " é bissexto!" : " não é bissexto."));
