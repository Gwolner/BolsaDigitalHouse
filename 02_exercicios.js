// Funções

// 2. Declaração
function dobro(valor){
    return valor*2;
}

// 3. Mais funções
function metade(valor){
    return valor/2;
}

// 4. Fazendo contas
function multiplicar (num1, num2){
    return num1 * num2;
}

// 5. Usando funções
function triploDaSoma(v1, v2){
    return triplo(v1+v2);
}

// 6. Fórmulas e funções
function perimetro (r){
    return 3.14*r*2;
}

function area(r){
    return 3.14*r*r;
}

// 7. Operando strings
function tamanhoNomeCompleto(n,s){
    let total = n.length+1+s.length;
    return total;
}

// 8. Criando cartões
function escreverCartao(titulo, nome, sobrenome){
    return titulo+" "+nome+" "+sobrenome;
}

// 9. Conhecendo funções Math
Math.abs(0);
Math.abs (7);
Math.abs (-8);

Math.round (3.14);
Math.round (7.87);
Math.floor (2.15);
Math.floor (11.78);

Math.max (39, 18);
Math.min (-3,21) ;

// 10. Mais uma função
function gerarProbabilidade(){
    return 100*Math.random ();
}
