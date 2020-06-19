// Arrays

// 2. Séries favoritas
var seriesFavoritasDaAna = 
["Game of Thrones", "Breaking Bad", "House of Cards"];
var seriesFavoritasDoHeitor = ["Blindspot", "Blacklist"];
var olaMundo = ["olá","mundo!"];
var olaOla = ["olá","olá"];

console.log(seriesFavoritasDaAna);
console.log(seriesFavoritasDoHeitor);
console.log(olaMundo);
console.log(olaOla);

// 3. Isso é uma matriz
console.log();

// 4. Jogos de azar
var numerosDeLoteria = [2, 11, 17, 32, 36, 39];
var girosDeDado = [1, 6, 6, 2, 2, 4];
var saiuCara = [false, false, true, false];
var listaDeNumeros = [[1, 2, 3], [4, 5, 6]];

console.log(numerosDeLoteria);
console.log(girosDeDado);
console.log(saiuCara);
console.log(listaDeNumeros);

// 5. Matrizes vazias
let umArrayVazio = [];

// 6. Quantos elementos você tem?
var numerosDeLoteria = [22, 40, 12];
var vazio = [];
var quatroTres = [4, 3];

console.log(numerosDeLoteria.length);
console.log(vazio.length);
console.log(quatroTres.length);

// 7. Adicionando itens
var pertences = ["espada","escudo","crossbow"];

console.log(pertences);

pertences.push("cross");

console.log(pertences);

// 8. Mover
function mover(umArray, outroArray){
   outroArray.push(umArray.pop()); 
}

// 9. E onde está?
var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"];

console.log(diasDeTrabalho.indexOf ("osvaldo"));

// 10. Contém
function contem(array, numero){
    if(array.indexOf(numero) == -1){
        return false;
    }else{
        return true;
    }
}

// 11. Enésimo elemento
var vazio = [];

console.log(vazio[48]);

// 12. Mais prêmios
function medalhaDeAcordoComPosto(numero){

    let medalhas = ["ouro", "prata", "bronze"];

    if(numero >= 1  && numero <= 3){
        return medalhas[ numero - 1];
    }else{
        return "nada";
    }
}

// 13. Soma, primeira parte
function somaLucroSemestre(umSemestre) {
    return umSemestre[0] + umSemestre[1] +
        umSemestre[2] + umSemestre[3] +
        umSemestre[4] + umSemestre[5];
}

var lucrosPrimeiroTrimestre = [80, 453, 1000];
var lucrosPrimeiroQuadrimestre = [200, 563, 879, 571];
var lucrosPrimeiroSemestre = [200, 563, 879, 571, 784, 1012];

console.log(somaLucroSemestre(lucrosPrimeiroTrimestre));
console.log(somaLucroSemestre(lucrosPrimeiroQuadrimestre));
console.log(somaLucroSemestre(lucrosPrimeiroSemestre));

// 14. Soma, segunda parte
console.log(lucroTotal([2, 3]));
console.log(lucroTotal([2, 3, 1, 8, 8, -1]));
console.log(lucroTotal([]));

// 15. Soma, terceira parte
function lucroTotal4(umPeriodo) {
    var soma = 0;
    for(var i =0; i < umPeriodo.length; i++){
        soma = soma + umPeriodo[i];
    }
    return soma ;
}

// 16. Soma, quarta parte
function lucroTotal(umPeriodo) {
  var soma= 0;
  var mes = 0;
  for (var i=0; i<umPeriodo.length; i++) {
    mes = umPeriodo[i];
    soma= soma+ mes;
  }
  return soma;
}


console.log(lucroTotal([]));
console.log(lucroTotal([100]));
console.log(lucroTotal([100, 2]));
console.log(lucroTotal([2, 10, -20]));
console.log(lucroTotal([2, 10, -20, 0, 0, 10, 10]));

// 18. Contagens
function quantidadeDeMesesComLucro(umPeriodo) {
  let quantidade= 0;
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if(umPeriodo[mes] > 0){
      quantidade = quantidade + 1;
    }
  }
  return quantidade;
}

// 19. Mais contagens
function quantidadeDeMesesComPerda(umPeriodo) {
    var soma = 0;
    for(var i =0; i < umPeriodo.length; i++){
        if(umPeriodo[i] < 0){
            soma = soma + 1;
        }
    }
    return soma ;
}

// 20. Filtrados
function saldoDeMesesComLucro(umPeriodo) {
    var arrayLucro = [];
    for(var i =0; i < umPeriodo.length; i++){
        if(umPeriodo[i] > 0){
            arrayLucro.push(umPeriodo[i]);
        }
    }
    return arrayLucro;
}

// 21. Naipe de truco
function naipeDeTruco(naipe){
    let arrayTruco = [];

    for(var i =0; i < 12; i++){
        if( i != 7 && i != 8){
            arrayTruco.push((i+1)+" de "+ naipe);
        }
    }
    return arrayTruco;
}

