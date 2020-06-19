// Desafio - Professora Furiosa

function acontece(estudantes, quatidadeMinima){
		var alunoPresente = 0;
		for(var i = 0; i < estudantes.length; i++){
			if(estudantes[i] <= 0){
				alunoPresente++;
			}
		}

		return alunoPresente >= quatidadeMinima;
	}

function aberturas(estudantesDaSemana, quatidadeMinima){
    var arrayAuxiliar = [];
    for(var i = 0; i < estudantesDaSemana.length; i++){
        arrayAuxiliar.push(acontece(estudantesDaSemana[i], quatidadeMinima))
    }

    return arrayAuxiliar;
}