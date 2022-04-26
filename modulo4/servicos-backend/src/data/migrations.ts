import { createAddress } from "../endpoints/createAddress"
import { connection } from "./connection"

//exercicio 1

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS informacoes_endereco (
         cep VARCHAR(255) PRIMARY KEY,
         logradouro VARCHAR(255) NOT NULL,
         numero VARCHAR(255) NOT NULL,
         complemento VARCHAR(255),
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)
const insertAddress = () => connection("informacoes_endereco")
   .insert(createAddress)
   .then(() => { console.log("Endereço cradastrado") })
const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertAddress)
   .finally(closeConnection)