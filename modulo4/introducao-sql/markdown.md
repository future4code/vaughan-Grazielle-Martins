### Exercício 1
a) NOT NULL significa que não pode estar vazio, VARCHAR(255) significa que pode ter até 255 caracteres, PRIMARY KEY, que é um valor único, DATE representa uma data.

b) Show DATABASE lista os bancos de dados e o show tables, todas as tabelas que tem dentro do banco de dados

c) É possível visualizar as colunas, os tipos de dados de cada coluna e os índices definidos para uma tabela


### Exercício 2

a)

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

```

b) Porque foi definido que o id é do tipo PRIMARY KEY, que esse valor é único e não pode ser duplicado.

c) birth_date e gender são do tipo NOT NULL, precisam ser passados ns valores

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

```

d) Precisa passar o valor do name
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Paulo",
  400000,
  "1949-04-18", 
  "male"
);
```

e) birth_date, é do tipo string o valor DATE

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

```
f) 

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Will Smith",
  2719533.33,
  "1979-04-16", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Julia Roberts",
  19533.33,
  "1979-07-20", 
  "female"
);

```
### Exercício 3


a)
```
SELECT * from Actor WHERE gender = "female"
```

b) 

```
SELECT salary 
FROM Actor  
WHERE name = "Tony Ramos";
```

c) Deu NULL, todos os gender cadastrasdos são valido, tem 6 caracters e está presente
```
SELECT * from Actor WHERE gender = "invalid"
```

d) 
```
SELECT id, name, salary from Actor WHERE salary <= "500000";
```
e)
```
SELECT id, name from Actor WHERE id = "002";
```
### Exercício 4

a) Seleciona tudo sobre o ator, depois filtra as pessoas que iniciam com A e J e que tenha o salario maior que 300000   

b)
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

```

c)
```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

```
d)
```
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%") OR (name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

```
### Exercício 5

a)
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)
```

b)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```
c)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

d)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```

e)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "O Auto da Compadecida",
  "O enredo é ambientado no sertão nordestino, se apropriando dos personagens típicos das histórias de cangaceiros, e retratando uma aventura de amor e redenção.",
  "2000-11-02", 
  8
);
```

### Exercício 6

a)
```
SELECT id, title, rating from Movie WHERE id = "002";
```
b)
```
SELECT *
FROM Movie  
WHERE title = "O Auto da Compadecida";
```
c)
```
SELECT id, title, synopsis
FROM Movie  
WHERE rating >= 7;
```
### Exercício 7

a)
```
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```
b)
```
SELECT * FROM Movie
WHERE title LIKE "%Dona%";
```

c)
```
SELECT * FROM Movie
WHERE release_Date < CURDATE();
```

d)
```
SELECT * FROM Movie
WHERE release_date < CURDATE() AND 
      (title LIKE "%Auto%" OR
      synopsis LIKE "%Auto%") AND rating > 7;
```