$(document).ready(function(){

	// Estrutura HTML:
	// .numberbox > input + a.mais + a.menos
	// [conteiner] > [campo] + [link soma] + [link subtração]

	// verifica o digito
	function verificaValor(digito) {
		var valida = false;

		if(isNaN(digito))
			valida = false;
		else if(digito < 0)
			valida = false;
		else 
			valida = true;

		return valida;
	}

	// executa os cálculos
	function calcula(calculo,valor) {
		if(calculo == "mais") {
			valor++
		} else if(calculo == "menos") {
			if(valor > 1)
				valor--
			else
				valor = 0;
		}
		return valor
	}

	// verifica quando um caractere é digitado diretamente no input
	$('.numberbox input').keypress(function (e) {
		var valor = $(this).val();
		var digito = String.fromCharCode(e.which);

		if(!verificaValor(digito)) {
			if(valor) {
				$(this).val(valor);
			}
			else {
				$(this).val(0);
			}
			e.preventDefault();
		}
	});

	// evento de soma ou subtração
	$('.numberbox a').click(function(e){
		e.preventDefault();
		var calculo = $(this).attr('class');
		var valor = $(this).closest('.numberbox').find('input').val();
		var novoValor = 0;
		if(valor !=='undefined' && verificaValor(valor))
			novoValor = calcula(calculo,valor);
		$(this).closest('.numberbox').find('input').val(novoValor);
	}); // $(.numberbox a).click()

}); // $(document).ready(