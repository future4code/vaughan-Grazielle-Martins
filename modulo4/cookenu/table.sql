  CREATE TABLE IF NOT EXISTS User (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

 CREATE TABLE IF NOT EXISTS Recipe (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(64) NOT NULL
);