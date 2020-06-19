// Ciclos

// 2. O computador repete para nós
function imprimirAzul4 (){
    for(var i =0; i < 4; i++){
        console.log("Azul");
    }
}

// 3. Reforçando o que vimos
function imprimir5vezes5  (){
    for(var i =0; i < 5; i++){
        console.log(5);
    }
}

// 4. Passo a passo
function passoAPasso  (){
    for(var i =0; i < 5; i++){
        console.log(i);
    }
}


// 5. Mais um representante
function passandoPor(){
    for(var i =0; i < 4; i++){
        console.log("aqui eu tenho o valor de "+i);
    }
}

// 6. Par ou ímpar
function passandoPelosPares(){
    for(var i = 0; i < 7; i++){
        if(i % 2 == 0){
             console.log("aqui eu tenho o valor de "+i);
        }       
    }
}

// 7. Repetição
function imprimirAzul (vezes){
    for(var i = 0; i < vezes; i++){
             console.log("Azul");    
    }
}

// 8. Repetição variável
function somar5MoedasDe25Centavos(){
   let total = 0;
    for(var i = 0; i < 5; i++){
        total = total +0.25;  
    }

    return total;
}

// 9. Muitas coxinhas
function somarMoedasDe25(quantidadeDeMoedas){
   let total = 0;
    for(var i = 0; i < quantidadeDeMoedas; i++){
        total = total +0.25;  
    }

    return total;
}

// 10. Continuamos mudando
function somaDosPares(x){
   let soma = 0;
    for(var i = 0; i <= x; i+=2){
        if( i % 2 == 0){
            soma = soma + i;  
        }        
    }
    return soma;
}

// 11. Somatória
function somatoria(x){
   let soma = 0;
    for(var i = 0; i < x; i++){
            soma = soma + i;         
    }
    return soma;
}


// 12. Usain Bolt precisa de você!
function caloriasDeTrote(x){
   let soma = 0;
    for(var i = 0; i <= x; i++){
        soma = soma + (i*5);      
    }
    return soma;
}