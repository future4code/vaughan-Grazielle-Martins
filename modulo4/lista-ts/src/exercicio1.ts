function frase(nome :string , nascimento: string):string {
    
    

    const resultado: string[] = nascimento.split("/",3)

   return `Olá me chamo ${nome}, nasci no dia ${resultado[0]} do mês de ${resultado[1]} do ano de ${resultado[2]}` 
}

console.log(frase("Grazi", "01/12/1994"))