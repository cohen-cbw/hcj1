var eingabe = document.querySelectorAll('input[type="button"]');

eingabe.forEach(button => {
  button.addEventListener("click", () => {
    var wert = button.value;
    console.log(wert);
    var feld = document.getElementById("eingabe-fled")
    feld.value += wert;
    document.getElementById("eingabe-fled").value = feld
  });
});

