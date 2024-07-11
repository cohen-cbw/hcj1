class Tamagochi{
    constructor(stats, gefuehle, gesicht){
        this.stats = stats;
        this.gefuehle = gefuehle;
        this.gesicht = gesicht;
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
        }
        if(Stats.happiness <= 45 || Stats.hunger < 20 ||  Stats.water < 20 || Stats.lp > 20){
            this.wuetend = false;
            this.traurig = true;
            this.schelmich = false;
            this.gluecklich = false;
            this.zufrieden = false;
        }
        if(Stats.happiness >= 60 && Stats.poop >= 70 && Stats.water >= 60 && Stats.hunger >= 60 && Stats.lp >= 50){
            this.wuetend = false;
            this.traurig = false;
            this.schelmich = true;
            this.gluecklich = false;
            this.zufrieden = false;
        }
        if(Stats.happiness >= 80 && Stats.poop >= 50 && Stats.hunger <= 50 && Stats.water <= 50 && Stats.lp > 50 && Stats.energie >50){
            this.wuetend = false;
            this.traurig = false;
            this.schelmich = false;
            this.gluecklich = true;
            this.zufrieden = false;
        }
        if(Stats.happiness >= 80 && Stats.poop >= 50 && Stats.hunger <= 50 && Stats.water <= 50 && Stats.lp > 50 && Stats.energie <= 50){
            this.wuetend = false;
            this.traurig = false;
            this.schelmich = false;
            this.gluecklich = false;
            this.zufrieden = true;
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
        if(this.hunger >= 5 || this.water >= 5){
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
class Aktionen{
    constructor(spielen = false, gassie = false, essen = false, trinken = false, schlafen = false, ergern = false){
        this.spielen = spielen;
        this.gassie = gassie;
        this.essen = essen;
        this.trinken = trinken;
        this.schlafen = schlafen;
        this.ergern = ergern;
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
}


let tamagochi = new Tamagochi(new Stats(), new Gefuehle(), new Gesicht());


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
    } , 10000);
}



let schlaf = document.querySelector("button.schlafen");

schlaf.addEventListener("click", schlafen);

function schlafen(){
    image.setAttribute("src", "../Tamagochi/res/heart_eyes_cat.png");
}




var reaction = {
    herzen : false,
    kuessen : false,
    totlachen: false,
    errschrocken : false,
}