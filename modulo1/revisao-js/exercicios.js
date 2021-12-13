// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}
console.log(retornaTamanhoArray())
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
console.log(retornaArrayInvertido())
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a,b){
        return a - b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPar = array.filter(item => (item %2) === 0);
     return arrayPar
 }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayPar = array.filter(item => (item %2) === 0);
    const arrayElevado = arrayPar.map((item) => {
       return Math.pow(item , 2)
    })
    return arrayElevado
} 

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = -Infinity

    for (let numero of array){
       if(numero > maior){
         maior = numero
        
        }
    }
    return maior
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeros = {}
    let menor = Math.min(num1,num2)
   
    if (num1 > num2) {
        numeros.maiorNumero = num1
    } else if (num2 > num1){
        numeros.maiorNumero = num2
    }else {
        numeros.maiorNumero = num1
    }

    numeros.maiorDivisivelPorMenor = numeros.maiorNumero % menor === 0 
    numeros.diferenca = numeros.maiorNumero - menor
    return numeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   let tipoDeTriangulo = ""
     if ( ladoA === ladoB && ladoB === ladoC){
        tipoDeTriangulo = "Equilátero";      
     }else if(ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
         tipoDeTriangulo = "Escaleno";
     }else{
         tipoDeTriangulo ="Isósceles";
     }
     return tipoDeTriangulo
 }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome: "ANÔNIMO"} 
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}