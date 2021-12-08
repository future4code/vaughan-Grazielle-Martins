//Respostas de interpretação
//Exercício 1
/*
Pega o valor da variável, roda enquanto for menor que 5, depois vai ser o valor da variável + 1,
depois vai printar o valor da variável, que vai ser valor que é  = 0 + soma dos números menores que 5 rodados (1,2,3,4)
O resultado vai ser 10. 
*/
//Exercício 2
/*
a)19, 21, 23, 25, 27, 30
b) Sim, cria uma varável index fora e tratar dentro do for
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let i = 0
for (let numero of lista) {
  if (numero > 18) {
	console.log(i)
	}
    i++
}
 */
//Exercício 3
/**
 *
 * *
 * * *
 * * * *
 */
//Respostas de escrita
//Exercício 1
const quantidade = Number(prompt("Quantos bichinhos você tem?"))
const bichinho =[]
if (quantidade === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for (let i = 0; i < quantidade; i++) {
        nomesDosBichinhos = prompt("Qual o nome?")
        bichinho.push(nomesDosBichinhos)
    }
    console.log(bichinho)
}

//Exercício
const arrayOriginal = [1,2,3,4,5]
function cadaValor() {

}