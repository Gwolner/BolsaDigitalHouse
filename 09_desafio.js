// Desafio - Mais Menos

function maisMenos(numeros){
	var positivo = 0;
	var neutro = 0;
	var negativo = 0;
	var proporcao = [];
	for(var i =0; i < numeros.length; i++){
		if(numeros[i] < 0){
			negativo++;
		}else if(numeros[i] > 0){
			positivo++;
		}else{
			neutro++;
		}		
	}
	proporcao.push(positivo/numeros.length);
	proporcao.push(neutro/numeros.length);
	proporcao.push(negativo/numeros.length);
	
	return proporcao;
}