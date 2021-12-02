//Respostas
//Exercício1

/*
a-10
  50 
b- 50 , pq ele vai rodar os dois comandos mas só vai imprimir a última linha 
*/
//Exercício 2
/*
a- Essa função vai pegar o texto, transformar todo em letras minúsculas, e vai pesquisar se no texto tem a palavra "cenoura"
b -  true
     true
     true
*/
 //Respostas 2
 //Exercício 1
//a)
function mensagemDoUsuario(){
    console.log("Eu sou Grazielle, tenho 27 anos, moro em João Pessoa e sou estudante.")
};
mensagemDoUsuario();


// b)

function informacoes(nome, idade, cidade,profissão){
    console.log("Eu sou " + nome + " tenho " + idade + " anos, moro em " + cidade + " e sou " + profissão + ".") 
};
informacoes("Grazielle", "27", "João Pessoa", "Fonoaudióloga");

//Exercício 2
//a)
function soma(primeiroNumero, segundoNumero){
   const soma = primeiroNumero + segundoNumero
    return soma
}
const primeiroNumero = Number(prompt("Digite um número:"));
const segundoNumero = Number(prompt("Digite outro número:"));
console.log(soma(primeiroNumero, segundoNumero));

//b)

function maiorOuIgual(numero1, numero2){
    const maiorOuIgual = numero1 >= numero2
    return maiorOuIgual
}
const numero1 = Number(prompt("Digite um número:"));
const numero2 = Number(prompt("Digite outro número:"));
console.log(maiorOuIgual(numero1,numero2));

//c)

function parOuImpar(umNumero){
    const parOuImpar = umNumero %2 == 0;
    return parOuImpar;
}
const umNumero = Number(prompt("Digite um número para saber se ele é par:"));
console.log(parOuImpar(umNumero));

//d)
function formatar(mensagem){
    console.log(mensagem.toUpperCase());
    console.log(mensagem.length);
};
const mensagemDoUsuario = prompt("Digite uma mensagem:");
const mensagemFormatada = formatar(mensagemDoUsuario);
console.log(mensagemFormatada);

//Exercício 3

function soma(numeroUm, numeroDois){
    const soma = numeroUm + numeroDois
    return soma
};
function subtracao(numeroUm, numeroDois){
    const subtracao = numeroUm - numeroDois
    return subtracao
};
function multiplicacao(numeroUm, numeroDois){
    const multiplicacao = numeroUm * numeroDois
    return multiplicacao
};
function divisao(numeroUm, numeroDois){
    const divisao = numeroUm / numeroDois
    return divisao
};
const numeroUm = Number(prompt("Digite um número:"));
const numeroDois = Number(prompt("Digite outro número:"));

console.log(`Números inserido: ${numeroUm}, ${numeroDois}`)
console.log(`Soma: ${soma(numeroUm,numeroDois)}`)
console.log(`Diferença: ${subtracao(numeroUm,numeroDois)}`)
console.log(`Multiplicação: ${multiplicacao(numeroUm,numeroDois)}`)
console.log(`Divisão: ${divisao(numeroUm,numeroDois)}`)



