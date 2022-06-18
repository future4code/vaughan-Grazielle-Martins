import { Request, Response } from 'express';
import { DogHeroBusiness } from '../business/DogHerobusiness';
import { DogHeroInputDTO } from '../model/Doghero';

const dogheroBusiness = new DogHeroBusiness()

export class DogHeroController {
    createDogHero = async (req: Request, res: Response): Promise<void> =>{

        try {
            
            const {date_schedule,latitude, longitude,start,end} = req.body;
            
            const input: DogHeroInputDTO = {
                date_schedule,
                latitude,
                longitude,
                start,
                end
            }

            
            const token = await dogheroBusiness.createDogHero(input.date_schedule, input.latitude, input.longitude, input.start, input.end);

            res.status(200).send({"DogHero criado com sucesso": token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
    index = async (req: Request, res: Response) => {


        try {
            const pagina = Number(req.query.pagina)
            const date_schedule = req.query.date_schedule as string

            const doghero = await dogheroBusiness.index(pagina, date_schedule)

            res.status(200).send({ "Todos os passeios": doghero });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }
    show = async (req: Request, res: Response) => {


        try {
            const id = req.params.id

            const duration = await dogheroBusiness.searchPetID(id)

            res.status(200).send({ "Duração do passeio": duration });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }

}