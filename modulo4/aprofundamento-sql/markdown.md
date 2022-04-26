### Exercício 1

a) Excluir a coluna salary da tabela de Actor.

b) Altera o nome da coluna gender para sex e adiciona o tipo VARCHAR(6).

c) Não altera o nome da coluna gender e adiciona o tipo VARCHAR(255).

d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a)
```
UPDATE Actor
SET name = "Moacyr Franco",
 birth_date = "2000-12-01"
WHERE id = "003";
```

b)
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c)
```
UPDATE Actor
SET 
name = "Gabriel Braga",
birth_date = "2000-05-01",
salary = 20000,
gender = "male"
WHERE id = "005";
```

d) Rodou mas nada foi alterado.
```
UPDATE Actor
SET 
name = "Regina Braga"
WHERE id = "010";
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

### Exercício 3

a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4
a)
```
SELECT MAX(salary) FROM Actor;

```

b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";

```

D)
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) Quantidade de atores e a quantidade de atrizes baseados no gender.

b)
```
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

c)
```
SELECT *
FROM Actor
ORDER BY salary;
```

d)
```
SELECT *
FROM Actor
ORDER BY salary
LIMIT 3;
```

e)
```
SELECT AVG(salary), gender 
FROM Actor 
GROUP BY gender;

```

### Exercício 6

a) 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b) 
```
ALTER TABLE Movie CHANGE rating rating FLOAT; 
```

c) 
```
UPDATE Movie
SET
playing_limit_date = "2022-12-05"
WHERE id = "002"
```

```
SELECT * FROM Movie;
UPDATE Movie
SET
	playing_limit_date = "2022-01-05"
WHERE id = "003";
```

d) Rodou as alterações mas nada foi exibido porque foi excluido
```
DELETE FROM Movie WHERE id = "002"
```

```
UPDATE Movie
SET
synopsis  = "Oie"
WHERE id = "002"
```