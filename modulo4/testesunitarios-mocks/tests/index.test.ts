import { performAttack2, Personagem, validarPersonagem } from "../src";

describe("Testando a validação dos personagens", () => {
    test("Testando com nome vazio", () => {
        const novoPersonagem = validarPersonagem({
            nome: "",
            vida: 1500,
            defesa: 500,
            forca: 800
        });

        expect(novoPersonagem).toBe(false);
    })
    test("Testando com vida 0", () => {
        const novoPersonagem = validarPersonagem({
            nome: "Pokemon",
            vida: 0,
            defesa: 400,
            forca: 500
        });

        expect(novoPersonagem).toBe(false);
    })
    test("Testando com força 0", () => {
        const novoPersonagem = validarPersonagem({
            nome: "Bulbasaur",
            vida: 1500,
            defesa: 400,
            forca: 0
        });

        expect(novoPersonagem).toBe(false);
    })
    test("Testando com defesa 0", () => {
        const novoPersonagem = validarPersonagem({
            nome: "Ivysaur",
            vida: 1500,
            defesa: 0,
            forca: 500
        });

        expect(novoPersonagem).toBe(false);
    })
    test("Testando com vida negativa", () => {
        const novoPersonagem = validarPersonagem({
            nome: "Charmander",
            vida: -1500,
            defesa: 400,
            forca: 500
        });

        expect(novoPersonagem).toBe(false);
    })
    test("Testando com caracteristicas válidas", () => {
        const novoPersonagem = validarPersonagem({
            nome: "Squirtle",
            vida: 1500,
            defesa: 700,
            forca: 600
        });

        expect(novoPersonagem).toBe(true);
    })

    test("Criando Mocks", () => {
        const validarMock = jest.fn(() => {
            return true
        });
    });
    test("Criando Mocks", () => {
        const validarMock = jest.fn(() => {
            return false
        });
    });

    test("Testando com dois personangens", () => {


        const validarMock = jest.fn(() => {
            return true
        });


        const attacker : Personagem ={
            nome: "Squirtle",
            vida: 1300,
            defesa: 700,
            forca: 600
        };

        const defender : Personagem ={
            nome: "Charmander",
            vida: 1300,
            defesa: 400,
            forca: 500
        };

        performAttack2(attacker, defender, validarMock)

        expect(defender.vida).toEqual(1300);
        //se foi chamada
        expect(validarMock).toHaveBeenCalled();
        //quantas vezes foi chamada
        expect(validarMock).toHaveBeenCalledTimes(2);
        //quantas vezes foi retornada
        expect(validarMock).toHaveReturnedTimes(2);
    })
    test("Testando com dois personangens, sendo um inválido", () => {


        const validarMock = jest.fn(() => {
            return false
        });


        const attacker : Personagem ={
            nome: "Squirtle",
            vida: 0,
            defesa: 700,
            forca: 600
        };

        const defender : Personagem ={
            nome: "Charmander",
            vida: 1500,
            defesa: 400,
            forca: 500
        };
        try{
        performAttack2(attacker, defender, validarMock)
        } catch (erro){
        expect(erro.message).toBe("Invalid character")
        //se foi chamada
        expect(validarMock).toHaveBeenCalled();
        //quantas vezes foi chamada
        expect(validarMock).toHaveBeenCalledTimes(1);
        //quantas vezes foi retornada
        expect(validarMock).toHaveReturnedTimes(1);
        }
    })
    test("Testando com dois personangens inválidos", () => {


        const validarMock = jest.fn(() => {
            return false
        });


        const attacker : Personagem = {
            nome: "Squirtle",
            vida: 1500,
            defesa: 0,
            forca: 600
        };

        const defender : Personagem = {
            nome: "",
            vida: 1500,
            defesa: 400,
            forca: 500
        };
        try{
        performAttack2(attacker, defender, validarMock)
        } catch (erro){
        expect(erro.message).toBe("Invalid character")
        
        }
    })
});