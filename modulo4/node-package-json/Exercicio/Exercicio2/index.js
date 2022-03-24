const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if (isNaN(num2)) {
    console.log("Espera-se dois números!")
    
}

switch (operacao) {
    case "add":
        console.log('\x1b[32m%s\x1b[0m', `Resultado: ${num1 + num2}`)
        break;
    case "sub":
        console.log('\x1b[33m%s\x1b[0m', `Resultado: ${num1 - num2}`)
        break;
    case "mul":
        console.log('\x1b[35m%s\x1b[0m', `Resultado: ${num1 * num2}`)
        break;
    case "div":
        console.log('\x1b[36m%s\x1b[0m', `Resultado: ${num1 / num2}`)
        break;

    default:

        break;
}
