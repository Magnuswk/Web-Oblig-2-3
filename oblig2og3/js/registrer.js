window.onload = onStartUp;
function onStartUp(){
	document.getElementById("mainBtnRegistrer").onclick = gjeTilbakemeldingRegistrer;
}
function gjeTilbakemeldingRegistrer(){
	var tilbakemelding = document.getElementsByClassName("txtTilbakemeldingRegistrering")[0];
	var brukernavn = document.getElementsByClassName("mainLoggInnBrukernavn")[0].value;
	var passord1 = document.getElementsByClassName("mainLoggInnPassord1")[0].value;
	var passord2 = document.getElementsByClassName("mainLoggInnPassord2")[0].value;
	if(brukernavn === "" || passord1 === "" || passord2 === ""){
		tilbakemelding.innerHTML = "Du må fylle ut alle felta!";
	}
	else if(passord1 !== passord2){
		tilbakemelding.innerHTML = "Passorda er ikkje like!";
	}
	else{
		window.location.href = 'http://www.it-stud.hiof.no/~mortenok/wuoblig3/studentstopp/registrert.html';
	}
}