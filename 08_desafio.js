// Desafio - Fatorial

function fatorial(numero){
	var fatorial = 1;
	for(var i =0; i < numero; i++){
		fatorial = fatorial * (numero - i);
	}
	
	return fatorial;
}