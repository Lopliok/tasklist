


var Task = {

};




Task.add = function () {

ukoly.push({cislo: Counter.getNum(), text: vstup1.value, priorita: vstup_priorita.value, hotovo: false})

//console.log(Counter.getNum());
Counter.step(1);
vstup1.value = "";
Local.save();
View.vycistiSeznam();
View.vypis();

};

Task.menu = function (target) {
  //console.log(target);

  View.taskMenu(target)
}
