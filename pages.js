"use strict";
//Scriptdatei zum Anzeigen der einzelnen Seiten
//Jede Seite wird über den Konstruktor erstellt mit den Methoden show() -> Anzeigen
//hide()-> ausblenden und _rednerForm() -> Neu rendern
class News{

    constructor(app, pageName){
        this._app = app;
        this._mainElement = document.getElementById("News");
    }

    show(){
        this._mainElement.classList.add("show");
    }
    hide(){
        this._mainElement.classList.remove("show");
    }
    _renderForm(){
        this._mainElement.innerHTML ="";
    }
}

class Guestbook{
    constructor(app){
        this._app = app;
        this._mainElement = document.getElementById("Guestbook");
    }
    show(){

        this._mainElement.classList.add("show");
    }
    hide(){
        this._mainElement.classList.remove("show");
    }
}
class Tickets{
    constructor(app){
        this._app = app;
        this._mainElement = document.getElementById("Tickets");
    }
    show(){
        this._mainElement.classList.add("show");
    }
    hide(){
        this._mainElement.classList.remove("show");
    }
}

class Bands{
    constructor(app){
        this._app = app;
        this._mainElement = document.getElementById("Bands");
    }

    show(){
        this._mainElement.classList.add("show");
    }
    hide(){
        this._mainElement.classList.remove("show");
    }
}
class Events{
    constructor(app){
        this._app = app;
        this._mainElement = document.getElementById("Events");
    }
    show(){
        this._mainElement.classList.add("show");
    }
    hide(){
        this._mainElement.classList.remove("show");
    }
}
class Infos{
    constructor(app){
        this._app = app;
        this._mainElement = document.getElementById("Infos");
    }
    show(){

        this._mainElement.classList.add("show");
    }
    hide(){
        this._mainElement.classList.remove("show");
    }
}
class Galerie{
    constructor(app){
        this._app = app;
        this._mainElement = document.getElementById("Galerie");
    }
    show(){

        this._mainElement.classList.add("show");
    }
    hide(){
        this._mainElement.classList.remove("show");
    }
}
class Mitmachen{
    constructor(app){
        this._app = app;
        this._mainElement = document.getElementById("Mitmachen");
    }
    show(){

        this._mainElement.classList.add("show");
    }
    hide(){
        this._mainElement.classList.remove("show");
    }
}
class Kontakt{
    constructor(app){
        this._app = app;
        this._mainElement = document.getElementById("Kontakt");
    }
    show(){

        this._mainElement.classList.add("show");
    }
    hide(){
        this._mainElement.classList.remove("show");
    }
}
