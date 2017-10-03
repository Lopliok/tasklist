// Global evil :-(

var tlacitko, div, vstup1, vstup_priorita, vstup2, smazat;
var seznamUkoly;
var pocitadlo;
var menuUkolu;
var ukoly;

ukoly = [];


/// start script - maybe it should be named start.js


// Load entities from DOM which we need
Load.dom();

// Load task(objects) saved in localStorage to array ukoly
Local.load();


// create elements for every task and view
View.vypis();
