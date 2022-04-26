import connection  from "./connection"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
   CREATE TABLE IF NOT EXISTS Users (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
`)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()

   .finally(closeConnection)