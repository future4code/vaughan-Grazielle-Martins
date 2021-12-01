//Respostas

/* Exercício 1
Resposta do console a: false
Resposta do console b: false
Resposta do console c: true
Resposta do console d: booleano
*/ 

/*Exercício 2
O valor será concatenado dessa forma, porque ele esta com a variável do tipo string, ele precisa transformar em número, para que seja de fato somado, segue a sugestão abaixo:

let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

numero1 = Number(primeiroNumero);
numero2 = Number(segundoNumero);

const soma = numero1 + numero2;

console.log(soma);
*/

//Resposta do exercício 1. 

let idadeDoUsuario = prompt("Qual sua idade?");
let idadeDoAmigo = prompt("Qual a idade do seu melhor amigo?");
idadeDoUsuarioEmNumero = Number(idadeDoUsuario);
idadeDoAmigoEmNumero = Number(idadeDoAmigo);

let comparacao = idadeDoUsuarioEmNumero > idadeDoAmigoEmNumero;
let diferenca = idadeDoUsuarioEmNumero - idadeDoAmigoEmNumero;

console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao);
console.log("A diferença de idade é:", diferenca);

//Resposta do exercício 2.

let numeroPar = prompt("Digite um número par:");
umNumeroPar = Number(numeroPar);
let restoDaDivisao = umNumeroPar % 2;

console.log("resto da divisão:", restoDaDivisao);
// Sim sempre da o valor 0
//Se o número for ímpar sempre dará 1

//Resposta do exercício 3.

let idadeEmAnos = prompt("Qual sua idade?");
idadeEmAnoEmNumero = Number(idadeEmAnos);
let idadeEmMeses = idadeEmAnoEmNumero * 12;
let idadeEmDias = idadeEmMeses * 30;
let idadeEmHoras = idadeEmDias * 24;

console.log("Idade do usuário em meses:", idadeEmMeses);
console.log("Idade do usuário em dias:", idadeEmDias);
console.log("Idade do usuário em horas:", idadeEmHoras);

//Resposta do exercício 4.

let numeroUm = prompt("Digite um número:");
let numeroDois = prompt("Digite outro número:");

numero1 = Number(numeroUm);
numero2 = Number(numeroDois);

let maior = numero1 > numero2;
let igual = numero1 === numero2;
let divisivel1 = numero1 % numero2 === 0;
let divisivel2 = numero2 % numero1 === 0;

console.log("O primeiro numero é maior que segundo?", maior);
console.log("O primeiro numero é igual ao segundo?", igual);
console.log("O primeiro numero é divisível pelo segundo?", divisivel1);
console.log("O segundo numero é divisível pelo primeiro?", divisivel2);