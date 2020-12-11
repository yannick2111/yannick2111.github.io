"use strict";

class App{
    /**
    *@param {Liste} pages
    */

    constructor(pages){
        this._pages = pages;
        this.currentPageObject = null;
        this._data = [
            {
                name:"Max",
                kommentar:"hajwjdwdqd",
            },
            {
                name:"peter",
                kommentar:"iojec",
            },
        ];
        this._renderMenu();
    }

    _renderMenu(){
        let ul = document.querySelector("#navbarSupportedContent > ul");
        let template = document.getElementById("template-app-menu-li").innerHTML;

        this._pages.forEach(page => {
            if (page.hidden) return;

            let dummy = document.createElement("ul");
            dummy.innerHTML = template;
            dummy.innerHTML = dummy.innerHTML.replace("$NAME$", page.name);
            dummy.innerHTML = dummy.innerHTML.replace("$LABEL$", page.label);

            let li = dummy.firstElementChild;
            li.addEventListener("click", () => this.showPage(page.name));

            dummy.removeChild(li);
            ul.appendChild(li);
        });
    }

    /**
     * Umschalten der sichtbaren Seite.
     *
     * @param  {String} name Name der anzuzeigenden Seite, gemäß this.pages
     * @param  {Integer} editIndex Nummer des bearbeiteten Datensatzes (optional)
     */

    showPage(name){
        let newPage = this._pages.find(p => p.name === name);

        if (newPage === undefined){
            console.error(`Klasse App, Methode showPage(): Ungültige Seite „${name}”`);
            return;
        }


        if (this._currentPageObject != null){

            this._currentPageObject.hide();

        }
        this._currentPageObject = new newPage.klass(this, name);
        this._currentPageObject.show();
        history.pushState(this._currentPageObject.app, "neuer Eintrag");
        console.log(history);

    }

    getData(){
        return this._data;
    }

    getDataByIndex(index){
        return this._data[index];
    }

    updateDataByIndex(index, dataset){
        this._data[index] = dataset;
    }

    deleteDataByIndex(index){
        this._data.splice(index, 1);
    }

    appendData(dataset){
        this._data.push(dataset);
        return this._data-length -1;
    }

}

window.onload = function() {
    if (window.performance && window.PerformanceNavigation) {
       let type = PerformanceNavigation.type;
       if (type == PerformanceNavigation.TYPE_NAVIGATE) {
          console.log ("Seite wurde geladen");
       } else if (type == PerformanceNavigation.TYPE_RELOAD) {
          console.log ("Seite wurde erneut geladen (RELOAD)");
       } else if (type == PerformanceNavigation.TYPE_BACK_FORWARD) {
          console.log ("Seite wurde durch BACK oder FORWARD geladen, nicht aber von einem Zustand der History");
       }
    }
    if (history.state == null) {
       console.log ("Erstes Laden");
    } else {
       console.log ("REFRESH oder Rückkehr von einer anderen URL via Vorwärts / Zurück");
    }

    let state = history.state;
    let title = document.title;
    let URL = window.location;

    history.replaceState(state, title, URL);
 }

 window.onpopstate = function() {
    console.log ("onpopstate – zurück von einer anderen URL");
 }

 window.onunload = function() {
    console.log ("onunload");
 }

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

  function closeBand(){
    let i, bandcontend, uebersicht;
    bandcontend = document.getElementsByClassName("bandcontend");
    uebersicht = document.getElementById("uebersicht");
    for (i=0; i < bandcontend.length; i++){
      bandcontend[i].style.display = "none";

    }
    uebersicht.style.display = "block";

  }
