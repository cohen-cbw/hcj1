class Person{

    constructor(vname, nname, alter){
        this.vname = vname;
        this.nname = nname;
        this.alter = alter;

    }

    berechneJahr(jahr){
        return jahr - this.alter;
    }
    pruefeVolljaehrigkeit(){
        return this.alter >= 18;
    }
}

class Sportler extends Person{

    constructor(vname, nname, alter, sportart, geschlecht){
        super(vname, nname, alter);
        this.sportart = sportart;
        this.geschlecht = geschlecht;
    }
    trainieren(intensitaet, dauer) {
        console.log(`${this.vname} ${this.nname} trainiert ${dauer} Minuten mit einer Intensität von ${intensitaet}.`);
    }
}

let p1 = new Person("Mike", "Johnson", 22,);
let p2 = new Person("Maria", "Yuen", 19);

let s1 = new Sportler("Damla", "Seldom", 27, "Hochsprung", "Weiblich");
let s2 = new Sportler("Kevon", "Mubaly", 18, "Fechten", "Männlich");

console.log(p1.berechneJahr(2024));