import { BaseDatabase } from "../data/BaseDatabase"

export class Migrations extends BaseDatabase {
    
   static migrations = (
       
    ) => {
        BaseDatabase.connection.raw(`
CREATE TABLE IF NOT EXISTS DogHero ( 
    id VARCHAR(255) PRIMARY KEY,
    status ENUM("A FAZER", "ANDAMENTO", "FEITO") DEFAULT "A FAZER",
    date_schedule DATE NOT NULL,
    price FLOAT NOT NULL,
    latitude VARCHAR(45),
    longitude VARCHAR(45) ,
    duration VARCHAR(45) NOT NULL,
    start timestamp NOT NULL,
    end timestamp NOT NULL
);
CREATE TABLE IF NOT EXISTS Pets ( 
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    dogheroid VARCHAR(45) NOT NULL,
    FOREIGN KEY (dogheroid) REFERENCES DogHero(id)
);


    `)
            .then(() => console.log(
                "Tabelas criadas!"
            ))
            .catch(error =>
                console.log(error.message)
            )
            .finally(() => {
                BaseDatabase.connection.destroy()
            })
    }
}
Migrations.migrations()
