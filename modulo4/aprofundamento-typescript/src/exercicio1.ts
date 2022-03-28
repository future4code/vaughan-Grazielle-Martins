//a)
const minhaString : string = "Olá Mundo"

//se colocar número "O tipo 'number' não pode ser atribuído ao tipo 'string'."

//b)
const meuNumero : number | string = "5"
//Para aceitar mais de um tipo de valor podemos usar o | 

//c)
type Person = {
    name: string,
    idade: number,
    corFavorita: Cor.AZUL | Cor.AMARELO | Cor.LARANJA | Cor.VERDE | Cor.VERMELHO
}

const pessoa1: {nome: string, idade: number, corFavorita: string}={
    nome: "Grazi",
    idade: 27,
    corFavorita: "Vermelho"
}
const pessoa2: {nome: string, idade: number, corFavorita: string}={
    nome: "Arthur",
    idade: 27,
    corFavorita: "Laranja"
}
const pessoa3: {nome: string, idade: number, corFavorita: string}={
    nome: "Levi",
    idade: 2,
    corFavorita: "Verde"
}
const pessoa4: {nome: string, idade: number, corFavorita: string}={
    nome: "Junior",
    idade: 11,
    corFavorita: "Azul"
}


//d)

enum Cor {
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    VERMELHO = "Vermelho",
    LARANJA = "Laranja"
}