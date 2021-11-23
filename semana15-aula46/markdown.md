#
#  Exercício 01

A)
```
ALTER TABLE Actor DROP COLUMN salary;
```
Excluir coluna salário.

B)

C)

D)
#
# Exercício 02

A)
```
UPDATE Actor
SET
	name = "Juliana Paes",
	birth_date = "1979-03-29"
WHERE id = "005";
```

B)
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
C)
```
UPDATE Actor
SET 
name = "Pedro de Lara",
birth_date = "1950-04-16",
salary = 90000,
gender = "male"
WHERE id = "005";
```

D)

#
# Exercício 03

A)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

B)
```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
```

#
# Exercício 04

