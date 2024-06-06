document.getElementById("send").addEventListener("click", senden);

function senden() {
    var nachricht = document.getElementById("eingabe_feld").value
    var text_blase = document.createElement("div");
    text_blase.textContent = nachricht
    text_blase.classList.add("text_blase");
    document.getElementById("chat_inhalt").append(text_blase);
    document.getElementById("eingabe_feld").value = "";


    
}
