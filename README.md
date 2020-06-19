# Programa de Bolsas Digital House

> Programa naiconal de bolsas de estudo da Digital House, em que foram oferecidas 300 bolsas, sendo 150 para o curso de Marketing Digital e 150 para o curso de Desenvolvimento Web Full Stack.

<img src="img/logo" />

## Classificação

Após finalizados o teste de lógica, os exercicios e os desafios online, obtive a classificação de 3º lugar estadual.
Com esta classificação, ganhei a bolsa de 70% do curso de Desenvolvimento Web Full Stack.

<img src="img/ranking" />
<br>
<img src="img/bolsa" />


## Desafios 

### Professora Furiosa

Uma professora de programação, cansada de que os estudantes cheguem tarde, decidiu que vai cancelar a aula se há poucos presentes.

Ela representa a entrada dos estudantes como um array de tempos de chegada tarde, em minutos. Por exemplo, se um estudante chegou 10 minutos atrasado, outro 5 minutos antes da hora, outro com 3 minutos de atraso, e outro pontual, poderá representar assim:
```js
var alunosDaSegunda = [10, -5, 3, 0];
```

Com essa informação e a quantidade mínima de estudantes para que suceda o curso, a professora quer saber se a aula acontecerá. Por exemplo, supondo que a quantidade mínima de estudantes para que a aula aconteça é de 2 alunos, então o curso da segunda-feira se realizará, porque houve um estudante que foi pontual e um estudante que chegou cedo.
```js
 acontece(alunosDaSegunda, 2)
true
```

Mas se a quantidade mínima fosse 3, a aula não aconteceria:
```js
 acontece(alunosDaSegunda, 3)
false
```

> Escreva as seguintes funções: 1. `acontece`, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 2. `aberturas`, que utiliza um array com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não. Por exemplo:
```js
aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
[true, false, false]
```

### Produto

Necessitamos uma função `produto` que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.

Por exemplo, `produto([1, 4, 7])` deve retornar `28`, que é `1 * 4 * 7`.

> Escreva a função `produto`.

### Fatorial

Escreva uma função `fatorial`, que calcule o fatorial de um número.

### Mais Menos

Necessitamos uma função `maisMenos` que receba um array e retorne outro com os seguintes três números:

1. na primeira posição, a fração de números que são positivos
2. na segunda posição, a fração de números que são zero
3. na última posição, a fração de números que são negativos

Por exemplo, `maisMenos([1, 2, 0, -1])`  deveria retornar `[0.5, 0.25, 0.25]`, devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.

> Escreva a função `maisMenos`.

### Escada

Queremos representar uma escada com altura variável, utilizando um array de strings.

Por exemplo, uma escada com altura 3, representaremos com o seguinte array:
```js
var escada3 = [
 "  #",
 " ##",
 "###"
]
```

E uma escada com altura 5, da seguinte forma:

```js
var escada5 = [
 "    #",
 "   ##",
 "  ###",
 " ####",
 "#####"
]
```

> Escreva uma função `escada` que utilize uma altura (um número) e retorne um array que represente a escada correspondente.

### Árvore utópica

As árvores utópicas  crescem de uma forma particular, em dois ciclos:

* cada primavera dobram seu tamanho
* cada verão crescem um metro

Se Laura planta uma árvore utópica com um metro, no final do outono, qual seria sua altura depois de N ciclos?

Alguns exemplos:

* si N = 0, sua altura será 1 metro (não cresceu nada)
* si N = 1, sua altura será de 2 metros (dobrou a altura na primavera)
* si N = 2, sua altura será de 3 metros (cresceu um metro mais no verão)
* si N = 3, sua altura será de 6 metros (dobrou a altura na primavera seguinte)
* E assim ...

> Escreva a função `alturaArvoreUtopica`, que utilize uma quantidade de ciclos de crescimento, e retorne a altura resultante da árvore de Laura.
