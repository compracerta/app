//Animação SplashScreen
$(document).ready(function(){
    $(".screen-initial").delay(100).fadeOut(1000)
});

$(".buttom-save").click(function() {
	$(".screen-transition").delay(0).fadeOut(300)
	var value = $(".input-valor").val(); 
$('.valor-lista').append(value); })