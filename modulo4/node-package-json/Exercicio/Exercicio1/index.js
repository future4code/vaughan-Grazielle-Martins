//a) cria uma variável que receba o process.argv[2]

//b)
const nome = process.argv[2]
const idade = Number(process.argv[3])

if (isNaN(idade)) {
    console.log("Espera-se dois parâmetros!")
   
}


console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c)
const novaIdade = idade + 7

console.log('\x1b[32m%s\x1b[0m', `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)