

$( '#execute' ).click(function() {

var altura = $( '#altura' ).val() ;

var peso = $('#peso').val();

var IMCpre = peso / (altura * altura);

var IMC = IMCpre.toFixed(2);


	$('#resultado').html(IMCpre);

  });