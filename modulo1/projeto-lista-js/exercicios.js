// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura:"))
  const largura = Number(prompt("Digite a largura:"))
  const multiplicacao = altura * largura

  console.log(multiplicacao)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano:"))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
  const idade = anoAtual - anoDeNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const calculaIMC = peso / (altura * altura)
 return calculaIMC
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Digite a altura:")
  const idade = prompt("Digite a largura:")
  const email = prompt("Digite a altura:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite uma cor favorita:")
  const cor2 = prompt("Digite outra cor favorita:")
  const cor3 = prompt("Digite mais uma cor favorita:")
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const letraMaiuscula = string.toUpperCase()
  return letraMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressos = custo / valorIngresso
  return ingressos 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho = string1.length === string2.length
  return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  arrayReserva = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = arrayReserva 

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 string1 = string1.toUpperCase()
 string2 = string2.toUpperCase()
  return string1 === string2 

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Qual ao ano atual?"))
  const anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
  const anoDaCarteira = Number(prompt("Qual ano sua carteira foi emitida?"))

  idade = anoAtual - anoDeNascimento
  idadeCarteira = anoAtual - anoDaCarteira

  renovacao1 = idade <= 20 && idadeCarteira >= 5
  renovacao2 = idade > 20 && idade <= 50 && idadeCarteira >= 10 
  renovacao3 = idade > 50 && idadeCarteira >= 15

  console.log(renovacao1 || renovacao2 || renovacao3 === true || false) 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maisDe18 = prompt("Você tem mais de 18 anos?")
  const medioCompleto = prompt("Você tem ensino médio completo?")
  const disponibilidade = prompt("Tem disponibilidade exclusiva?")
  const resposta = maisDe18 === "sim" && medioCompleto === "sim" && disponibilidade === "sim"

  console.log(resposta)
}