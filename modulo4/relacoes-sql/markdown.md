## Exercício 1

a) FOREIGN KEY, indica que a propriedade é a chave estrageira e se refere PRIMARY 
KEY da outra tabela.

b)

```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
INSERT INTO Rating VALUES 
('1', 'Muito bom', '10', '004');
```

c) Não conseguiu se referenciar, deu  uma restrição de chave estrangeira falha
```
INSERT INTO Rating VALUES 
('1', 'Bom', '6', '010');
```

d) 
```
ALTER TABLE Movie
DROP COLUMN rating;
``` 

e)Não é possível excluir ou atualizar porque o filme tem ligação com a tabela Rating
```
DELETE FROM Movie WHERE id = "004"
```

## Exercício 2

a) Essa tabela é junção de duas outras tabelas, ela faz referencia de um filme com um ator

b)
```
INSERT INTO MovieCast VALUES 
('001', '003'),('003', '004'),('004', '005'),('003', '007'),('004', '003'),('001','007');
```
c) Chave estrangeira falha, não conseguiu achar o movie_id ou seja o id do filme
```
INSERT INTO MovieCast VALUES 
('002', '003')
```
d)Não é possível excluir ou atualizar porque o ator tem ligação com a tabela MovieCast
```
DELETE FROM Actor WHERE id = "004"
```

## Exercício 3

a) Retorna os dados presentes nas duas tabelas, ON é pra fazer a referência do id do filme com o rating do filme

b) 
```
SELECT m.id as  movie_id, m.title, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```