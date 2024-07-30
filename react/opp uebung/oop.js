// Objektorientierung
// Wir können die ganze Welt als eine Ansammlung von Objekten sehen
// Monitor, Tasse, Tisch, Autos, Raum, ... 
// Jedes Objekt hat Eigenschaften (Beispiel Monitor):
// Seriennummer, Größe (Zoll), Art, Farbe, ... 
// Zu jedem Objekt gibt es Methoden ("Aktionen"), die wir mit den Objekten
// durchführen können.
// Monitor: An/Ausschalten, Helligkeit verstellen, Kontrast, Position ändern, ...
// Es gibt ganz viele verschiedene Ausprägungen von Monitoren
// Jedes Exemplar eines Monitors ist für sich genommen ein Objekt
// Man benutzt Klassen als Vorlage / Bauplan für Monitore mit gewissen Eigenschaften
// und Methoden, um damit im Quellcode einheitlich arbeiten zu können und 
// man will Objektliterale vermeiden.

// Klasse: uniformer Bauplan für Objekte
// Aus dieser Klasse kann ich beliebig Objekte erzeugen.


// individuelle Definition, kein Uniformität
let monitor1 = {
    seriennummer: "83479348AHD",
    hersteller : "Samsung",
    diagonale : 24,
    stellwinkel : 30,
    setzeStellwinkel : (sw) => {
        this.stellwinkel = sw;
    }
};

monitor1.setzeStellwinkel(8);

let monitor2 = {
    seriennummer: "83479348GHD",
    hersteller : "BenQ",
    groesse : 27,
    farbe : "schwarz"
};

// Wir wollen eine Klasse, also eine Vorlage bauen für Monitore
// Aus dieser Klasse kann man beliebig viele Monitore erstellen.
class Monitor {
    // Wir erzeugen aus der Vorlage Monitor Monitore
    // Hierfür nutzen wir den Konstruktor
    // Wir legen auch hier die Eigenschaften der Klasse fest
    constructor(seriennummer, hersteller="Default", 
            groesse=23, farbe="schwarz", preis=200) {
        this.seriennummer = seriennummer;
        this.hersteller = hersteller;
        this.groesse = groesse;
        this.farbe = farbe;
        this.preis = preis;
        // this.stellwinkel = // undefined
        // Standardmäßig bei Generieung für alle Monitore false
        this.isOn = false;
    } 


    // let erg = x > 5 ? "ja" : "nein"
    // "Aktionen" mit dem Objekt
    switchPower() {
        this.isOn = this.isOn ? false : true;

        /* if(this.isOn == true) {
            this.isOn == false;
        } else {
            this.isOn = true;
        } */

        console.log("Monitor an? ", this.isOn);
    }
};

// Vererbung: Eine bestehende Klasse soll erweitert werden für einen bestimmten
// Typ 
// Beispiel: Monitor, AdaptiveMonitor
// AdaptiveMonitor hat ALLE Eigenschaften und Methoden eines normalen Monitors
// Er enthält aber ZUSÄTZLICHE Eigenschaften.
// z.B. stellwinkel, helligkeit, kontrast, ...

class AdaptiveMonitor extends Monitor {
    constructor(seriennummer, hersteller="Default", 
        groesse=23, farbe="schwarz", preis=200, stellwinkel = 40, helligkeit = 70) {
            // Ruft den Konstruktor der Elternklasse auf
            super(seriennummer, hersteller, groesse, farbe, preis);
            // Erweiterung
            this.stellwinkel = stellwinkel;
            this.helligkeit = helligkeit;
        }

        // Erweiterung um Methoden
    
    setStellwinkel(stellwinkel) {
        if(stellwinkel > -40 && stellwinkel < 40) {
            // this beinhaltet die Speicheradresse von einem Objekt
            // somit setze ich hier NUR den Stellwinkel
            // für DIESES (this) individuelle Objekt
            // this.stellwinkel ist Bestandteil des Objektes
            // stellwinkel ist eine lokale Variable in dieser Funktion
            this.stellwinkel = stellwinkel;
        }
    }

    setHelligkeit(helligkeit) {
        if(helligkeit >= 0 && helligkeit <= 100) {
            this.helligkeit = helligkeit;
        }
    }

    // Befüllen der Methode mit eigener Semantik in AdaptiveMonitor
    // Die Methode der Elternklasse überschreiben.
    switchPower() {
        this.isOn = this.isOn ? false : true;
        console.log("AdaptiveMonitor an? ", this.isOn);
    }
};



// Ein Objekt erzeugen (Konstruktor wird aufgerufen)
// Existieren unabhängig voneinander im Speicher
let m1 = new Monitor("HFJJ3773", "Samsung", 27, "schwarz", 90);
let m2 = new Monitor("73436475", "BenQ", 27, "weiß", 190);
let m3 = new Monitor("76448734", "BenQ", 24, "pink");

let a1 = new AdaptiveMonitor("HFJJ3773", "Samsung", 27, "schwarz", 90, 5, 50);
console.log(a1);
a1.switchPower();


console.log("Stellwinkel vorher: ", a1.stellwinkel);
a1.setStellwinkel(33);
console.log("Stellwinkel nachher: ", a1.stellwinkel);

m1.switchPower();
m2.switchPower();
m1.switchPower();



console.log(m1, m2, m3);