var View = {

};



View.vycistiSeznam = function () {
  while (seznamUkoly.hasChildNodes()) {
    seznamUkoly.removeChild(seznamUkoly.lastChild)
  }
}




View.vypis = function () {
    for (var i = 0; i < ukoly.length; i++) {
      polozka = document.createElement('div');
      polozka.setAttribute("task-number", ukoly[i].cislo);
      polozka.setAttribute("title", "dvakrát poklepej pro smazání");

      polozka.innerText = ukoly[i].text + " ";

      polozka.appendChild(View.label(i));


      seznamUkoly.appendChild(polozka);
      }

      }



View.label = function (i) {

  label = document.createElement('label');
  var levelimportant;
  switch (Number(ukoly[i].priorita)) {
    case 1:
      levelimportant = "Danger"
    break;
    case 2:
      levelimportant = "Success"
    break;
    case 3:
      levelimportant = "Primary"
    break;

  }

  label.setAttribute("priority", levelimportant);
  label.innerText = levelimportant;

  return label;


}


View.taskMenu = function (target) {



  if (!target.contains(menuUkolu)) {
    target.setAttribute("class", "listactive");
    target.appendChild(menuUkolu);
    menuUkolu.innerText = "Fdsfdsf";
    menuUkolu.setAttribute("class", "taskmenu")
    menuUkolu.innerText = "Smazat úkol";
  } else {
    target.removeChild(menuUkolu);
    View.vypis();

  }

}
