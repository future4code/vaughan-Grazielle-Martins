import { Request, Response } from 'express';
import { DogHeroBusiness } from '../business/DogHerobusiness';
import { DogHeroInputDTO } from '../model/Doghero';

const getdogheroBusiness = new DogHeroBusiness()

//A API para criação de passeio deve receber todos os atributos listados acima menos status;

// A API de index deve receber um filtro através de uma flag para retornar:

// Apenas os próximos passeios a partir de hoje ou todos.
// Além disso, paginação não é obrigatório, mas seria um plus;

//O preço é calculado dinamicamente.

// Um passeio de 30 minutos para 1 cachorro custa R$25, sendo cada cachorro adicional R$15.
// Um passeio de 60 minutos para 1 cachorro custa R$35, sendo cada cachorro adicional R$20;

//A API de show deve retornar a duração real do passeio, ou seja, a diferença entre o início e o término;

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

            const doghero = await getdogheroBusiness.index(pagina, date_schedule)

            res.status(200).send({ "Todos os passeios": doghero });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }


    }
    // searchPokeID = async (req: Request, res: Response) => {


    //     try {
    //         const row = req.params.row

    //         const pokemon = await getpokeBusiness.searchPokemonID(row)

    //         res.status(200).send({ Pokemon: pokemon });

    //     } catch (error: any) {
    //         res.status(400).send({ error: error.message });
    //     }


    // }
    // searchPokeName = async (req: Request, res: Response) => {


    //     try {

    //         const name = req.query.name as string

    //         const pokemon = await getpokeBusiness.searchPokemonName(name)

    //         res.status(200).send({ Pokemon: pokemon });

    //     } catch (error: any) {
    //         res.status(400).send({ error: error.message });
    //     }


    // }
   
}