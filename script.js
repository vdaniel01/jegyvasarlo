/* INPUT */
let felnott = document.getElementById("felnott");
let diak = document.getElementById("diak");
let jegyek = document.getElementById("jegyek");
let torol = document.getElementById("torol");
let jegyekAra = document.getElementById("jegyekAra");
let megerosit = document.getElementById("megerosit");
let jegyekSzama = document.getElementById("jegyekSzama");

megerosit.addEventListener("click", init);
felnott.addEventListener("click", hozzaAdFelnott);
diak.addEventListener("click", hozzaAdDiak);
torol.addEventListener("click", nullaz);


/* VÁSÁRLÁS */
let vasarlas = document.getElementById("vasarlas");
let eredmenyKiir = document.getElementById("eredmeny");
vasarlas.addEventListener("click", eredmeny);

felnott = 0
diak = 0


function init(){
    if(jegyekSzama.value > 0){
    document.getElementById("maradek").innerHTML = `${jegyekSzama.value} db jegyet szeretnék vásárolni`;}
    else{
        document.getElementById("maradek").innerHTML = "Kérem válasszon valódi értéket!";
        
    }
}

function nullaz(){
    felnott = 0;
    diak = 0;
    jegyek.innerHTML = "";
    jegyekAra.innerHTML = "";
    eredmenyKiir.innerHTML = "";
}

function hozzaAdFelnott(){
    if((jegyekSzama.value-(felnott+diak))&& jegyekSzama.value > 0)
    felnott++
    jegyek.innerHTML = `${felnott} felnőtt jegy és ${diak} diákjegy`
    jegyekAra.innerHTML = `Összesen: ${felnott*2500+diak*1700}Ft`
    
}
function hozzaAdDiak(){
    if(jegyekSzama.value-(felnott+diak)&& jegyekSzama.value > 0)
    diak++
    jegyek.innerHTML = `${felnott} felnőtt jegy és ${diak} diákjegy`
    jegyekAra.innerHTML = `Összesen: ${felnott*2500+diak*1700}Ft`

}

function eredmeny(){
    if((felnott >0 || diak >0) && ((felnott+diak)==jegyekSzama.value)){
    eredmenyKiir.innerHTML = "SIKERES TRANZAKCIÓ &check;"
    eredmenyKiir.style.color = "#B5FED9"}
}