let feltoltGomb = document.getElementById("feltolt");
let kiirGomb = document.getElementById("kiir");
let osszeadGomb = document.getElementById("osszead");
let parosDbGomb = document.getElementById("parosdb");
let oszthatoGomb = document.getElementById("oszthato");

const veletlentomb = new Array()

function feltolt(){
    for (let index = 0; index < 50; index++) {
        let vel = Math.floor(Math.random()*100)+1;
        veletlentomb[index]=vel;
    }
}

feltoltGomb.addEventListener("click", feltolt)

function kiir(){
    let szoveg = ""
    for (let index = 0; index < 50; index++) {
        szoveg += (veletlentomb[index] + " ")
        if (index % 5 == 4){
            szoveg +="\r\n";
        }
    }
    alert(szoveg);
}

kiirGomb.addEventListener("click", kiir)

function osszead(){
    var osszeg = 0;
    for (var index = 0; index < 50; index++) {
        osszeg += veletlentomb[index];
    }
    alert(osszeg);
}

osszeadGomb.addEventListener("click", osszead)

function parosDb(){
    var db= 0;
    for (var index = 0; index < 50; index++) {
        if(veletlentomb[index] % 2 == 0){
            db +=1;
        }
    }
    alert(db);
}

parosDbGomb.addEventListener("click", parosDb)

function oszthato(){
    var oszt = 0;
    for (let index = 0; index < 50; index++) {
        if(veletlentomb[index] % 3 == 0){
            oszt += 1;
        }
    }
    alert(oszt) 
}

oszthatoGomb.addEventListener("click", oszthato)