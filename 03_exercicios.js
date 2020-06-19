// Condicionais

// 2. Que tal se?
var diaDeSemana  = "domingo";

if(diaDeSemana == "domingo"){
    console.log("Hoje é dia de futebol! ! !");
}

// 3. E que tal se não?
function hojeSeJoga(dia){
    if(dia == "domingo"){
        return "Hoje é dia de futebol! ! !";
    }else{
        return "Hoje não é dia de futebol :(";
    }
}

// 4. Qual é maior?
function eMaior(n1,n2){
    if(n1 < n2){
        return n2;
    }else{
        return n1;
    }
}

// 5. Qual é o seu sinal?
function sinal(numero){
    if(numero < 0){
        return -1;
    }else if(numero > 0){
        return 1;
    }else{
        return 0;
    }
}

// 6. O número da sorte
function eNumeroDaSorte (numero){
    return ((numero % 2 == 0) || (numero % 3 == 0)) 
    && (numero > 0) && (numero != 15);
}

// 7. Posso ir ao banco?
function possoIrAoBanco(diaDaSemana, horaAtual){
    return diaDaSemana != "Sábado" && diaDaSemana != "Domingo" && horaAtual >= 9 && horaAtual <= 15;
}

// 8. O filósofo hipster
function filosofoHipster (prof, nac, km){
    return prof == "Músico" && nac == "Brasil" && km >= 2;
}

// 9. As tabelas verdade
console.log(filosofoHipster('Player', 'Brasil', 50));
console.log(filosofoHipster('Padeiro', 'Nova Zelãndia', 12));
console.log(filosofoHipster('Músico', 'Brasil', 8));

// 10. Voltando à escola
console.log(pagarComCartao(true, 6, 320));
console.log(pagarComCartao(false, 8, 80));
console.log(pagarComCartao(true, 2, 215));
console.log(pagarComCartao(true, 1, 32));

// 11. Um exercício sem precedentes
function podeSeAposentar(idade, sexo, anosContrib){
    return ((sexo == "M" && idade >=65) || (sexo == "F" && idade >=60)) && anosContrib >= 30;
}

// 12. Nós vamos ao parque de diversões
function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco){
    let permissao = true;

    if(temProblemaCardiaco){
        permissao = false;
    }else{
        if(alturaPessoa < 1.5){
            if(!(alturaPessoa >= 1.2 && vemComCompania)){
                permissao = false;
            }            
        }
    }

    return permissao;
}

// 13. Agora vamos ter dar um prêmio
function medalhaSegundoOPosto(posto){

    if(posto == 1){
        return "ouro";
    }else if(posto == 2){
        return "prata";
    }else if(posto == 3){
        return "bronze";
    }else{
        return "Continue participando"
    }
}
