//Resposta de interpretação
/*
 1)a) Verifica se o resto da divisão do número passado é igual a 0, se sim, passa se não não passa
 b) números pares
 c) números ímpares
 */

 /*
2) a) Os cases são condinções, se a variável for igual ao case o que esta dentro do case vai ser mostrado
 b)O preço da fruta Maçã é R$ 2,25
 c) sem o break ele passa direto, então daria que pêra vale 5 reais 
 */

 /*
 3)a) Declarando um valor para uma variavél, solicitando ao usúario o número
 b) Esse número passou no teste, se for -10 não retorna nada, pois não tinha condição pra isso
 c) Sim, esta chamando uma variável que foi criada dentro do if, então na prática essa varável não tem valor fora do escopo
 */
//Respostas de escrita
//1)
const idadeDoUsuario = Number(prompt("Digite sua idade:"))

if  (idadeDoUsuario >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

//2)
const turno = prompt("Que turno você estuda? M- matutino, V- vespertino e /n- noturno")
if (turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V"){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}
//3)
const turno = prompt("Que turno você estuda? M- matutino, V- vespertino e /n- noturno")
switch (turno){
    case 'M':
    console.log("Bom dia!")
    break
    case 'V':
        console.log("Boa tarde!")
    break
    case 'N':
        console.log("Boa noite!")
    break
}
//4)
const filme = prompt("Qual genero do filme vão assistir?")
const valor = Number(prompt("Qual o valor do ingresso?"))
const  quartoDeJack = {
    genero: "fantasia",
    preco: 15
}
    if (filme === "fantasia" && valor === 15){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }

//Desafios
//1)
const filme = prompt("Qual genero do filme vão assistir?")
const valor = Number(prompt("Qual o valor do ingresso?"))
const  quartoDeJack = {
    genero: "fantasia",
    preco: 15
}
    if (filme === "fantasia" && valor === 15){
        lanchinho = prompt("Qual lanchinho você vai querer?")
        console.log("Bom filme!")
        console.log(`Aproveite a(o) sua(seu) ${lanchinho}`)
    } else {
        console.log("Escolha outro filme :(")
    }

