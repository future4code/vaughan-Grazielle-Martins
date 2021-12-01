//Respostas

/*Exercício1
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

*/
/*Exercício2
SUBI NUM ONIBÛS EM MIRROCOS 27
*/

//Exercício 1 de escrita de código
const nomeDoUsuario = prompt("Digite seu nome:");
const emailDoUsuario = prompt("Digite seu email:");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}`);

//Exercício2

const comidas = ["pizza", "hambúrgue", "temaki", "chocolate", "coca-cola"];
console.log(comidas);
console.log("Essas são as minhas comidas preferidas:");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3])
console.log(comidas[4]);

const comidaPreferida = prompt("Qual sua comida favorita?");

comidas[1] = comidaPreferida;

console.log(comidas);

//Exercício3

listaDeTarefas = arrayVazio = [];

const tarefa1 = prompt("Digite 1 tarefa diária:");
const tarefa2 = prompt("Digite outra tarefa diária:");
const tarefa3 = prompt("Digite mais uma tarefa diária:");

listaDeTarefas = [tarefa1, tarefa2, tarefa3];

console.log(listaDeTarefas);

const tarefaRealizada = prompt("Digite o índice da tarefa realizada: 0, 1 ou 2")


listaDeTarefas.splice(tarefaRealizada, 1)

console.log(listaDeTarefas)
