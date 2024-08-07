class Tamagochi{
    constructor(stats, gefuehle, gesicht, aktionen){
        this.stats = stats;
        this.gefuehle = gefuehle;
        this.gesicht = gesicht;
        this.aktionen = aktionen;
    }
}

class Gefuehle { 
    constructor(wuetend = false, traurig = false, schelmich = false, gluecklich = false, zufrieden = true) {
        this.wuetend = wuetend;
        this.traurig = traurig;
        this.schelmich = schelmich;
        this.gluecklich = gluecklich;
        this.zufrieden = zufrieden;
    }
    
    updateGefuehle(stats){
        if(stats.energie >= 60 && stats.happiness <= 40 && stats.hunger < 40 && stats.water < 40 && stats.lp > 60 && stats.poop > 80){
            this.wuetend = true;
            this.traurig = false;
            this.schelmich = false;
            this.gluecklich = false;
            this.zufrieden = false;
            console.log("wuetend")
        }
        if(stats.happiness <= 45 || stats.hunger < 20 ||  stats.water < 20 || stats.lp > 20){
            this.wuetend = false;
            this.traurig = true;
            this.schelmich = false;
            this.gluecklich = false;
            this.zufrieden = false;
            console.log("traurig")
        }
        if(stats.happiness >= 60 && stats.poop >= 70 && stats.water >= 60 && stats.hunger >= 60 && stats.lp >= 50){
            this.wuetend = false;
            this.traurig = false;
            this.schelmich = true;
            this.gluecklich = false;
            this.zufrieden = false;
            console.log("schelmich")
        }
        if(stats.happiness >= 80 && stats.poop >= 50 && stats.hunger <= 50 && stats.water <= 50 && stats.lp > 50 && stats.energie >50){
            this.wuetend = false;
            this.traurig = false;
            this.schelmich = false;
            this.gluecklich = true;
            this.zufrieden = false;
            console.log("gluecklich")
        }
        if(stats.happiness >= 80 && stats.poop >= 50 && stats.hunger <= 50 && stats.water <= 50 && stats.lp > 50 && stats.energie <= 50){
            this.wuetend = false;
            this.traurig = false;
            this.schelmich = false;
            this.gluecklich = false;
            this.zufrieden = true;
            console.log("zufrieden")
        }
    }
    resetGefuehle(){
        this.wuetend = false;
        this.traurig = false;
        this.schelmich = false;
        this.gluecklich = false;
        this.zufrieden = true;
    }
}

class Stats{
    constructor(hunger = 50, water = 50, poop = 50, happiness = 50, lp = 50, energie = 50){
        this.hunger = hunger;
        this.water = water;
        this.poop = poop;
        this.happiness = happiness;
        this.lp = lp;
        this.energie = energie;
    }
    updateStats(){
        this.hunger -= 5;
        this.water -= 5;
        if(this.hunger <= 35 || this.water <= 35 || this.poop >= 75){
            this.happiness -= 5;
        }
        if(this.hunger >= 0 || this.water >= 0){
            this.lp -= 5;
        }
        if(this.lp <= 30){
            this.energie -= 5;
            this.happiness -=5;
        }
        if(this.hunger >= 70){
            this.energie += 10;
            this.lp += 5;
        }
        statsanzeigen();
    }
    resetStats(){
        this.hunger = 50;
        this.water = 50;
        this.poop = 50;
        this.happiness = 50;
        this.lp = 50;
        this.energie = 50;
    }
}

let image = document.getElementById('tamagochi-image');

class Gesicht{
    constructor(zufrieden = "../Tamagochi/res/cat.png", traurig = "../Tamagochi/res/crying_cat_face.png",wuetend ="../Tamagochi/res/pouting_cat.png" ,schelmich ="../Tamagochires/res/smirk_cat.png"  ,gluecklich = "../Tamagochi/res/joy_cat.png"){
        this.zufrieden = zufrieden;
        this.traurig = traurig;
        this.wuetend = wuetend;
        this.schelmich = schelmich;
        this.gluecklich = gluecklich;
    }
    updateGesicht(){
        if(tamagochi.gefuehle.zufrieden){
            image.setAttribute("src", this.zufrieden);
        }
        if(tamagochi.gefuehle.traurig){
            image.setAttribute("src", this.traurig);
        }
        if(tamagochi.gefuehle.wuetend){
            image.setAttribute("src", this.wuetend);
        }
        if(tamagochi.gefuehle.schelmich){
            image.setAttribute("src", this.schelmich);
        }
        if(tamagochi.gefuehle.gluecklich){
            image.setAttribute("src", this.gluecklich);
        }
    }
    resetGesicht(){
        image.setAttribute("src", this.zufrieden);
    }
}

class Aktionen{
    constructor(spielen = false, gassie = false, essen = false, trinken = false, schlafen = false, ergern = false){
        this.spielen = spielen;
        this.gassie = gassie;
        this.essen = essen;
        this.trinken = trinken;
        this.schlafen = schlafen;
        this.ergern = ergern;
    }
    aktionTrinken(){
        if(tamagochi.stats.water <= 100){
            this.trinken = true;
            tamagochi.stats.water += 5;
        }
        this.trinken = false;
    }
    aktionEssen(){
        if(tamagochi.stats.hunger <= 100){
            this.essen = true;
            tamagochi.stats.hunger += 10;
        }
        this.essen = false;
    }
    aktionGassie(){
        if(tamagochi.stats.poop >= 0){
            this.gassie = true;
            tamagochi.stats.poop -= 10;
        }
        this.gassie = false;
    }
    aktionSchlafen(){
        this.schlafen = true;
        if(tamagochi.stats.energie <= 100){           
            tamagochi.stats.energie = 100;
        }
        tamagochi.stats.lp += 50;
        this.schlafen = false;
    }
}



let tamagochi = new Tamagochi(new Stats(), new Gefuehle(), new Gesicht(), new Aktionen());


let startButton = document.querySelector('button.start');
startButton.addEventListener('click', statsanzeigen);
startButton.addEventListener('click', timerstate);



function statsanzeigen(){
    let bar = document.querySelector('div.bar');
    bar.innerHTML = `
    <div class="bar-hunger" style="height: ${tamagochi.stats.hunger}%;" id="hunger"></div>
    <div class="bar-water" style="height: ${tamagochi.stats.water}%;" id="water"></div>
    <div class="bar-poop" style="height: ${tamagochi.stats.poop}%;" id="poop"></div>
    <div class="bar-happiness" style="height: ${tamagochi.stats.happiness}%;" id="happiness"></div>
    <div class="bar-lp" style="height: ${tamagochi.stats.lp}%;" id="lp"></div>
    <div class="bar-energie" style="height: ${tamagochi.stats.energie}%;" id="energie"></div>`;
    let val = document.querySelector("div.value"); 
    val.innerHTML = `<div class="stat-tag"><div>Hunger: ${tamagochi.stats.hunger}</div><div>Durst: ${tamagochi.stats.water}</div><div> Gassi: ${tamagochi.stats.poop}</div><div> Freude: ${tamagochi.stats.happiness}</div><div> Gesundheit: ${tamagochi.stats.lp}</div><div> Energie: ${tamagochi.stats.energie}</div></div>`; 
}


let ende = document.querySelector("button.end");
ende.addEventListener("click", beenden);

function beenden(){
    let bar = document.querySelector("div.bar");
    bar.innerHTML = "";
    let val = document.querySelector("div.value");
    val.innerHTML = "";
    tamagochi.stats.resetStats();
    tamagochi.gefuehle.resetGefuehle();
    tamagochi.gesicht.resetGesicht();
    clearInterval(statechange);
}

let statechange;
function timerstate(){
    if(statechange){
        clearInterval(statechange);
    }
    statechange = setInterval(() => { 
        tamagochi.stats.updateStats(); 
        tamagochi.gefuehle.updateGefuehle(tamagochi.stats); 
        tamagochi.gesicht.updateGesicht();
    } , 5000);
}



let schlaf = document.querySelector("button.schlafen");
schlaf.addEventListener("click", tamagochi.aktionen.aktionSchlafen);

let essen = document.querySelector("button.Essen");
essen.addEventListener("click", tamagochi.aktionen.aktionEssen);

let gassie = document.querySelector("button.gassie");
gassie.addEventListener("click", tamagochi.aktionen.aktionGassie);

let trinken = document.querySelector("button.trinken");
trinken.addEventListener("click", tamagochi.aktionen.aktionTrinken);




