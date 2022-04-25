```
Exercício 1

a) Acho que a probabilidade de ter colisão é menor com números, acredito que seja melhor utilizar números.

---

Exercício 2

a) Primeiro esta estabelecendo a conexão com o banco de dados através do Knex, depois tem a função que faz conexão com o banco de dados inserindo os parâmetros passados na tabela 

b)

CREATE TABLE IF NOT EXISTS Users (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

c) criei uma pasta model com a função dentro

import connection from "../data/connection";

const userTableName = "User";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};

---

Exercicio 3

a) Tá garantindo que o tipo de valor do token que vem é string

b) 
export type authenticationData = {
   id: string
}
export class Authenticator {
    GenerateToken = (payload: authenticationData) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "1min"
            }
        )
    }
}

Exercicio 7
Exercicio 8
```