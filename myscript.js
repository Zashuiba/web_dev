

$( '#execute' ).click(function() {

var altura = $( '#altura' ).val() ;

var peso = $('#peso').val();

var IMC = peso / (altura * altura);


	$('#resultado').html(IMC);

  });