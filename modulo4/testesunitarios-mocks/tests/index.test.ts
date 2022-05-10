import { validarPersonagem } from "../src";

describe("Testando a validação dos personagens", () => {
    test("Testando com nome vazio", () => {
        const novoPersonagem = validarPersonagem ({
            nome: "",
            vida: 1500,
            defesa: 500,
            forca: 800
        });
     
        expect(novoPersonagem).toBe(false);
    })
    test("Testando com vida 0", () => {
        const novoPersonagem = validarPersonagem ({
            nome: "Pokemon",
            vida: 0,
            defesa: 400,
            forca: 500
        });
     
        expect(novoPersonagem).toBe(false);
    })
    test("Testando com força 0", () => {
        const novoPersonagem = validarPersonagem ({
            nome: "Bulbasaur",
            vida:1500,
            defesa: 400,
            forca: 0
        });
     
        expect(novoPersonagem).toBe(false);
    })
    test("Testando com defesa 0", () => {
        const novoPersonagem = validarPersonagem ({
            nome: "Ivysaur",
            vida:1500,
            defesa: 0,
            forca: 500
        });
     
        expect(novoPersonagem).toBe(false);
    })
    test("Testando com vida negativa", () => {
        const novoPersonagem = validarPersonagem ({
            nome: "Charmander",
            vida: -1500,
            defesa: 400,
            forca: 500
        });
     
        expect(novoPersonagem).toBe(false);
    })
    test("Testando com caracteristicas válidas", () => {
        const novoPersonagem = validarPersonagem ({
            nome: "Squirtle",
            vida: 1500,
            defesa: 700,
            forca: 600
        });
     
        expect(novoPersonagem).toBe(true);
    })
});