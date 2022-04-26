import { AddressInfo } from "net";
import express, { Express } from 'express'
import cors from 'cors'
import connection from "./connection";
import dotenv from 'dotenv'

const app: Express = express();

app.use(express.json());
app.use(cors());



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});


//EXERCICIO 1

//A) Devolve como resposta exatamente oque o banco devolveu.

//B)

const SearchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
}


//c)

const QuantityItems = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)
    const count = result[0][0].count;
    return count
}



//EXERCICIO 2

//A)

const updateSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};

//B)

const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where("id", id);
};

//C)

const averageSalary = async (gender: string): Promise<any> => {
    const media = await connection("Actor")
        .avg("salary")
        .where({ gender });

    return media[0]
};

//EXERCICIO 3

//A)

const getId = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

app.get("/actor/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const actor = await getId(id);

        res.status(200).send(actor)
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

//B)

app.get("/actor", async (req, res) => {
    try {
        const countgender = await QuantityItems(req.query.gender as string);
    

        res.status(200).send({gender: countgender})
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

//EXERCICIO 4



app.put("/actor", async (req, res) => {
    try {
        const editActor = await updateSalary(req.body.id, req.body.salary);
    

        res.status(200).send({
            message: "Editado com sucesso!",
          })
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

app.delete("/actor/:id", async (req, res) => {
    try {
        const delActor = await deleteActor(req.params.id);
    

        res.status(200).send({
            message: "Deletado com sucesso!",
          })
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

