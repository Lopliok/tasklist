
//

smazat.onclick = function() {
  Local.remove();
  ukoly = [];
  View.vycistiSeznam();
  View.vypis();
}

onkeypress = function(e) {
  if (e.target == vstup1 && e.code == "Enter") {
    Task.add();
  }

}



tlacitko.onclick = function(e) {
  Task.add();
}


seznamUkoly.onclick = function (e) {
  Task.menu(e.target)

}



seznamUkoly.ondblclick = function(e){
  var numberOfTask = e.target.getAttribute("task-number");
  //console.log(numberOfTask);
  for (var ind in ukoly) {

    if (ukoly[ind].cislo == Number(numberOfTask)) {
      //console.log(ukoly[ind]);
      ukoly.splice(ind, 1);
    }
  }


  Local.save();
  View.vycistiSeznam();
  View.vypis();
};
