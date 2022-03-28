//a) 
function obterEstatisticas(numeros: number[]): number {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma : number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([4,5,6]))

//b)
//soma : number
//estatisticas: any 

//c)
type Amostra = {
    numeros: number,
    obterEstatistica: (numeros: number) => {}
}