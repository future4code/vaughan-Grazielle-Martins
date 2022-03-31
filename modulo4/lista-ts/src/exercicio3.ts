
enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Filmes = {
    nome: string,
    ano: number,
    genero: GENERO.ACAO | GENERO.DRAMA | GENERO.COMEDIA | GENERO.ROMANCE | GENERO.TERROR,
    pontuacao?: number
}

const filme1: Filmes = {
    nome: "Duna",
    ano: 2021,
    genero: GENERO.ACAO,
    pontuacao: 74
}

function filme() {
 return filme1
}

console.log(filme())