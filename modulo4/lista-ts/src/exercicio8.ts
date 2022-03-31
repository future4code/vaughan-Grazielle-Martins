
function renovacaoDeCarteira(): boolean {
    let datadenascimento: number = new Date(process.argv[2]).getFullYear()
    let datadeemissao: number = new Date(process.argv[3]).getFullYear()
    let novadata: number = new Date().getFullYear()

    let idade = novadata - datadenascimento
    let tempodeemissao = novadata - datadeemissao

    if (idade <= 20 && tempodeemissao >= 5 ) {
        return true
    } else if (idade >= 20 && idade <= 50 && tempodeemissao >= 10) {
        return true
    } else if (idade > 50 && tempodeemissao >= 15 ) {
        return true
    } else {
        return false
    }
};

console.log(renovacaoDeCarteira())
