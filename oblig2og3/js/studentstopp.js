
    window.onload = oppstart;

      function oppstart () {

        var reg = document.getElementById("btnReg").onclick = registrer;
        // Lager Knapp for rgistrering + variabel
      }

      function registrer () { // Funksjon for knappen
        var bruker = document.getElementById("txtBrukerNavn").value; // Brukernavn
        var passord = document.getElementById("txtPassord").value; // Passord
        var bekreft = document.getElementById("txtBekreft").value; // Bekreft passord
        var alder = document.getElementById("txtDato").value; // Alder
        var min = 5; // Dette er en variabel for mer en 5 "karakterer"

        var svar = ""; // Variabel for hva som printes ut


        if (bruker === "") { // Hvis brukernavn boxen er tom, print dette "Fyll inn..."
          svar = "Fyll inn brukernavn";
        }
        else if (passord === "") { // Hvis passords boxen er tom, print ....
          svar = "Fyll inn passord";
        }
        else if (passord.length <= min) // Hvis passordet også er mindre en 5 "karaktere"
                                       // print dette...
          svar = "Passord for kort";

        else if (bekreft === "") { // Hvis bekreft passord er tomt, print dette...
          svar = "Bekreft passord";
        }
        else if (passord !== bekreft) { // Bekreft passord ikke lik passordet, print dette...
          svar = "Passord samsvarer ikke"; // Osv...
        }
        else {
          svar = "Takk for registrering";
        }
        document.getElementById("print").innerHTML = svar; // Skrives ut i <p>
    }
