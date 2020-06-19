// Desafio - Escada

function escada(degraus){
	
	var degrais = [];
	
	for(var i =1; i <= degraus; i++){
		degrais.push(" ".repeat(degraus - i) + "#".repeat(i));
	}
	
	return degrais;
}