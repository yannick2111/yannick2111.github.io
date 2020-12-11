"use strict";
//Navigation
function openPage(pageName, elmnt) {
    // Alle Elemente mit class="tabcontent" automatisch verstecken
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    //Die Seite anzeigen
    document.getElementById(pageName).style.display = "block";
  }

  //Die Default Page über die id defaultOpen anzeigen
  document.getElementById("defaultOpen").click();


  //Bandanzeige
  function openBand(bandName){
    let i, bandcontend, uebersicht;
    bandcontend = document.getElementsByClassName("bandcontend");
    uebersicht = document.getElementById("uebersicht");
    for (i=0; i < bandcontend.length; i++){
      bandcontend[i].style.display = "none";
    }
    uebersicht.style.display = "none";
    document.getElementById(bandName).style.display = "block";
  }
  //Band ausblenden
  function closeBand(){
    let i, bandcontend, uebersicht;
    bandcontend = document.getElementsByClassName("bandcontend");
    uebersicht = document.getElementById("uebersicht");
    for (i=0; i < bandcontend.length; i++){
      bandcontend[i].style.display = "none";
    }
    uebersicht.style.display = "block";
    document.getElementById(bandName).style.display = "none";
  }

  //Fomrularsteuerung
  function checkSendForm(){
    let email = document.getElementById("email").value;
    let betreff = document.getElementById("betreff").value;
    let nachricht = document.getElementById("nachricht").value;
    let send = false;

    if (email<4){
        window.alert("Bitte gültige Mail eintragen");
        send = false;
    } else if (betreff === ""){
        window.alert("Bitte Betreff eintragen");
        send = false;
    } else if (nachricht === ""){
        window.alert("Bitte Nachricht angeben");
        send = false;
    } else{
        send =true;
    }

    if (send){
        document.getElementById("success").style.display ="block";
        document.getElementsByClassName("kontakt").style.display = "none";
    }
    return send;
  }
  //Json Datei füe die Gästebucheinträge
  loadJSON('guestbook.json', function(text){
    var data = JSON.parse(text);
    console.log(data);
  });

  class guestbook{
  constructor(data){
    this.data = data;
  }
}
