document.getElementById("send").addEventListener("click", senden);
let eingabe

function senden() {
    eingabe = document.getElementById("Chat").value;
    document.getElementById("Chat").value += "\nIm Moment kann ich dir noch keine antworten geben. \n";
    console.log(eingabe);
}
