//Respostas de interpretação 
//Exercício 1
//a) vai imprimir todos os 3 usúarios cada um com seu índice e o array todo.

//Exercício 2
//a)Nesse vai imprimir apenas os nomes com os índices, e um array apenas com os nomes.

//Exercício 3
//a) verifica as pessoas que tem o apelido diferente de Chijo, nesse caso, imprimiria apenas 
//{ nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" }

//Respostas de escrita
//Exercício

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a)
const nomeDosPets = pets.map((item, index) => {
    return item.nome
})
console.log(nomeDosPets)

//b)
const petsSalsicha = pets.filter((item, index, array) => {
   return item.raca === "Salsicha"
})
console.log(petsSalsicha)
//c)
const mensagemPoodle = pets.filter((item, index, array) => {
    if (item.raca === "Poodle") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
    }
})
//Exercício 2
//a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const arrayComNomes = produtos.map((item, index,array) => {
    return item.nome
 })
console.log(arrayComNomes)

//b)]
const temDesconto = produtos.map((item) => {
    const desconto = item.preco - item.preco * 5 / 100
    const comDesconto = {nome: item.nome, preco: desconto}
    return comDesconto
 })
console.log(temDesconto)

//c)
const arrayBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(arrayBebidas)
//d) 
const nomeYpe = produtos.filter((item) => {
       return item.nome.includes("Ypê")
})
console.log(nomeYpe)
//e)
// Terminando