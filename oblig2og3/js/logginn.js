window.onload = onStartUp;
function onStartUp(){
	document.getElementById("btnLoggInn").onclick = gjeTilbakemeldingLoggInn;
}
function gjeTilbakemeldingLoggInn(){
	var tilbakemelding = document.getElementsByClassName("txtTilbakemeldingLoggInn");
	tilbakemelding[0].innerHTML = "Brukernamn eller passord er feil!";
}
