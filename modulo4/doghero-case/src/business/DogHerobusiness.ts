import { Request, Response } from "express";
import { DogHeroDatabase } from "../data/DogHeroDatabase";
import { PetDatabase } from "../data/PetDatabase";
import { DogHerotype } from "../model/Doghero";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/tokenGenerator";


const dogheroDB = new DogHeroDatabase();
const authenticator = new TokenGenerator();
const idGenerator = new IdGenerator();

export class DogHeroBusiness {
    createDogHero = async (
        date_schedule: Date,
        latitude: string,
        longitude: string,
        start: Date,
        end: Date
    ) => {
        try {
            if (!date_schedule || !start || !end) {
                throw new Error("Por favor preencha os campos ");
            }
            start = new Date(`${date_schedule} ${start}`)
            end = new Date(`${date_schedule} ${end}`)
            const id = idGenerator.generateId();

            let price = 0

            let durationstart = start.getTime()

            let durationend = end.getTime()
            let durationinitial = Math.abs(durationend - durationstart)
          
            durationinitial = (durationinitial / 1000) / 60

            if (durationinitial <= 30) {
                price = 25
            } else {
                price = 35
            }
            let duration = durationinitial.toString()
           
            const dados: DogHerotype = {
                id,
                date_schedule,
                price,
                duration,
                latitude,
                longitude,
                start,
                end
            }

            await dogheroDB.createDoghero(dados);

            const token = authenticator.generateToken({ id });

            return token;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async index(pagina: number, date_schedule?: string) {

        if (!pagina) {
            throw new Error("Número de página inválida.");
        }
        let size = 20
        let offset = size * (pagina - 1)

        let doghero = []

        if (date_schedule) {
            doghero = await dogheroDB.getDogHeroDate(offset, date_schedule)
        } else {
            doghero = await dogheroDB.getDogHero(offset)
        }



        return doghero;

    }
    async searchPetID(id: string) {
        if (!id) {
            throw new Error("Número de ID inválido!");
        }

        const pet = await dogheroDB.getPetID(id)


        return pet;

    }

}

