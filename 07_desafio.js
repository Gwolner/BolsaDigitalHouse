// Desafio - Produto

function produto(array){
	var produto = 1;
	for(var i =0; i < array.length; i++){
		produto = produto * array[i];
	}
	
	return produto;
}