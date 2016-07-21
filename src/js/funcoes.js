//Animação SplashScreen
$(document).ready(function(){
	$(".lista-transition").hide();
    $(".screen-initial").delay(300).fadeOut(1000)
});

$(".buttom-save").click(function() {
	$(".screen-transition").delay(0).fadeOut(500)
	$(".lista-transition").show();
	var value = $(".input-valor").val(); 
$('.valor-lista').append(value); })

