```
function criarArrayNomesAnimais() {
    let animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 let NomeDosAnimais = animais.map(animais => 
 animais.nome);
 return NomeDosAnimais

}
```