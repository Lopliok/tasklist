var Counter = {

};

Counter.getNum = function() {



  if (localStorage.getItem("task-number") && !isNaN(localStorage.getItem("task-number")))
  {
    return Number(localStorage.getItem("task-number"));
  } else {
    localStorage.setItem("task-number", 1)
    return 1;
  }
}


Counter.step = function (cislo) {
  cislo = Number(cislo) + Number(Counter.getNum());

  localStorage.removeItem("task-number");
  localStorage.setItem("task-number", cislo);
}
