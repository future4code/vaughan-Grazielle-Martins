export interface Personagem  {
    nome: string,
    vida: number,
    defesa: number,
    forca:number
}

export const validarPersonagem = (input: Personagem): boolean => {
    if (!input.nome || input.vida === undefined || input.defesa === undefined || input.forca === undefined) {
        return false
    }
    if (input.vida <= 0 || input.defesa <= 0 || input.forca <= 0) {
        return false
    }
    return true
};

//A diferença dessas duas implementações é que uma valida direto na função e a outra de inversão de dependência é necessário adicionar mais uma camada, é a estratégia de depender de interfaces

export const performAttack1 = (attacker: Personagem, defender: Personagem) => {
    if (!validarPersonagem(attacker) || !validarPersonagem(defender)) {
        throw new Error("Invalid character")
    }
    if (defender.defesa > attacker.forca) {
        defender.vida -= attacker.forca - defender.defesa
    }
   
    
};

export const performAttack2 = (attacker: Personagem, defender: Personagem, validator:(input: Personagem) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }
    if (defender.defesa > attacker.forca) {
        defender.vida -= attacker.forca - defender.defesa
    }
   
    
};