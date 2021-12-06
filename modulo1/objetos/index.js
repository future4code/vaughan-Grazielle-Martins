//Respostas de interpretação
//Exercício 1

/*
a) Matheus Natchtergaele
   Virginia Cavendish
   Globo 14h
*/
//Exercício 2
/*
a)nome: "Juca", idade: 3, raca: "SRD"
nome: "Juba", idade: 3, raca: "SRD"
nome: "Jubo", idade: 3, raca: "SRD"

b)É um espalhamento, tanto copia um objeto, quanto faz alterações

*/
//Exercício 3
/*
a) False porque é o valor de backender
b) Deu undefined porque altura não tem um valor
*/

//Respostas de escrita
//Exercício 1
const pessoa = {
    nome: "Grazielle",
    apelido: ["Grazi", "Neninha", "Dedei"],
    mensagem: (atributos) => {
        console.log(`Eu sou ${atributos.nome}, mas pode me chamar de ${atributos.apelido[0]}, ${atributos.apelido[1]} ou ${atributos.apelido[2]}`)
    }
}
pessoa.mensagem(pessoa)

const alterandoPessoa = {
    ...pessoa, apelido: ["Grazinha", "Nininha", "Déi"]
    
}

alterandoPessoa.mensagem(alterandoPessoa)

 //Exercício 2
 const primeiraPessoa = {
    nome: "Grazielle",
    idade: 27,
    profissao: "Fonoaudióloga"
 }
 const segundaPessoa = {
    nome: "Arthur",
    idade: 27,
    profissao: "Programador"
 }
 function pessoaEmArray(qualquerPessoa){
    return [qualquerPessoa.nome, qualquerPessoa.nome.length, qualquerPessoa.idade, qualquerPessoa.profissao,qualquerPessoa.profissao.length]
 }
pessoaEmArray(primeiraPessoa)

//Exercício 3
let carrinho = []
const fruta1 = {
    nome: "melancia",
    disponibilidade: true
}
const fruta2 = {
    nome: "melao",
    disponibilidade: true
}
const fruta3 = {
    nome: "banana",
    disponibilidade: true
}
function qualquerFruta(fruta){
    carrinho.push(fruta)
}
qualquerFruta(fruta1)
qualquerFruta(fruta2)
qualquerFruta(fruta3)
console.log(carrinho)

