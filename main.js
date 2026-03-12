let feltoltGomb = document.getElementById("feltolt");
let kiirGomb = document.getElementById("kiir");
let osszeadGomb = document.getElementById("osszead");
let parosDbGomb = document.getElementById("parosdb");
let oszthatoGomb = document.getElementById("oszthato");
let egyesGomb = document.getElementById("egyes");
let legnagyobbGomb = document.getElementById("legnagyobb");

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
    let osszeg = 0;
    for (let index = 0; index < 50; index++) {
        osszeg += veletlentomb[index];
    }
    alert(osszeg);
}

osszeadGomb.addEventListener("click", osszead)

function parosDb(){
    let db= 0;
    for (let index = 0; index < 50; index++) {
        if(veletlentomb[index] % 2 == 0){
            db +=1;
        }
    }
    alert(db);
}

parosDbGomb.addEventListener("click", parosDb)

function oszthato(){
    let oszt = 0;
    for (let index = 0; index < 50; index++) {
        if(veletlentomb[index] % 3 == 0){
            oszt += 1;
        }
    }
    alert(oszt) 
}

oszthatoGomb.addEventListener("click", oszthato)

function egyes(){
    i = 0;
    let vanBenneEgyes = false;
    while (i < veletlentomb.length && !vanBenneEgyes) {
        if(veletlentomb[i] === 1){
            vanBenneEgyes = true;
        }
        i += 1;
    }
    alert(vanBenneEgyes)
}

egyesGomb.addEventListener("click", egyes)

function legnagyobb(){
    let max = 0;
    for (let index = 0; index < veletlentomb.length; index++) {
        if (veletlentomb[index] > max){
            max = veletlentomb[index];
        }
    }
    alert(max);
}

legnagyobbGomb.addEventListener("click", legnagyobb)