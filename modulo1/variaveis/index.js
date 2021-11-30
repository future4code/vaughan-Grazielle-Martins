//Respostas

/*1. 10
     10,5

2. 10, 10, 10

3. let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
   let valorRecebido = prompt("Quanto você recebe por dia?")
   alert(`Voce recebe ${valorRecebido/horasTrabalhadas} por hora`)*/

//Exercício 1

   let nome;
   let idade; 
   
   console.log(typeof nome);
   console.log(typeof idade);
   //O resultado foi  undefined porque não tem valor
   
   nome = prompt("Qual é o seu nome?");
   idade = prompt("Qual é a sua idade?");
   console.log(typeof nome);
   console.log(typeof idade);
   //Agora o resultado obtido foi de string de acordo com o valor atribuido

   console.log("Olá",nome, "você tem", idade, "anos.");

//Exercício 2

 feliz = prompt("Você está feliz hoje?")
 comSono = prompt("Você está com sono?")
 fome = prompt("Você está com fome?")
 console.log("Você está feliz hoje? -",feliz);
 console.log("Você está com sono? -",comSono);
 console.log("Você está com fome? -",fome);

 //Exercício 
 
 let a = 10
 let b = 25
 let c
 c = a 
 a = b 
 b = c 
console.log("valor", a);
console.log("valor", b);

//Desafio

let valor1 = 10
let valor2 = 30
let soma = valor1 + valor2
let multiplicacao = valor1 * valor2
console.log("O primeiro valor somado ao segundo valor resulta em:", soma ,".");
console.log("O primeiro valor multiplicado pelo segundo valor resulta em:", multiplicacao,".");