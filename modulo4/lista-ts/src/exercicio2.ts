function tipoDeVariavel(variaveis: string | number | boolean) {
    
    if(typeof variaveis === "string"){
        return "É do tipo string!"
    }else if(typeof variaveis === "number"){
        return "É do tipo number!"
    }else if(typeof variaveis === "boolean"){
        return "É do tipo boolean!"
    }
}
console.log(tipoDeVariavel(true))