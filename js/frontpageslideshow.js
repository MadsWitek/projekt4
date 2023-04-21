//Denne funktion bruges til at finde det ønskede element
function feedback(x){
    return document.getElementById(x);
}

//variabler for bubble array, bubble index & setInterval()
let ba, bi=0, intrvl;

//bca - bubble content Array
let bca = [
    '<div class="slide-indhold"><h2><b>WORKSHOP I WORDPRES</b></h2><br><p>1 semester · workshop · wordpres<br><br>Jeg vil rigtig gerne have mere vejledning i wordpres, da jeg føler vi fik en meget kort introduktion til det. Er der stemning for at lave en workshop på tværs af semestrene?</p></div>',
    '<div class="slide-indhold"><h2><b>FLERE UNDERVISNINGSTIMER I HTML & CSS</b></h2><br><p>1 semester · Almen undervisning · HTML & CSS<br><br> Jeg er lige startet på 1 semester og synes at HTML & CSS er svært. Det gik op for mig at vi kun har 5 lektioner til at lære det hvilket ikke er særlig langt tid. Kunne det være relevant med mere undervisning i HTML & CSS? Hvad tænker i?</p></div>',
    '<div class="slide-indhold"><h2><b>MERE VEJLEDNING & FEEDBACK I LØBET AF PROJEKTER</b></h2><br><p>2 semester · Vejledning · Teori <br><br>Jeg vil rigtig gerne have mere vejledning og feedback i løbet af projekterne. Lige nu føler jeg at det hele ligger meget samlet og ikke særlig spredt ud? Er der andre der har det på sammme måde? <br></p></div>',
    '<div class="slide-indhold"><h2><b>MERE UNDERVISNING I SCRUM</b></h2><br><p>1 semester · Almen undervisning · Scrum <br><br>Jeg synes det kunne være fedt hvis vi kunne få lidt mere undervisning i scrum og projekstyring, da jeg synes det er lidt forvirrrende. Hvad tænker i?</p></div>',  
];

function slideshow(bi){
    //fade-out tekst
    feedback("indhold").style.opacity = 0;

    //loop hen over bobblerne + skift baggrundsfarve
    for(let i=0; i < ba.length; i++){
        ba[i].style.background = "rgba (0,0,0.1)";
    }


//skifter baggrundsfarven på den bobble der er i fokus til at være mørkere end de andre
ba[bi].style.background = "#999";

//timer så koden skifter efter 300ms
setTimeout(function(){
    //skift indholdet 
    feedback("indhold").innerHTML = bca[bi];
    //fade-in tekst
    feedback("indhold").style.opacity = 1;
}, 300);
}

//Ny funktionen som skal køre hver 5 sekund
function bubbleslide(){
   //øger bubble index tallet
    bi++; 
    //hvis bubble index er i lig med det totale antal bobbler
    if (bi==ba.length){
        bi= 0; //nulstiller bubble index til 0 så den laver et loop tilbage til starten
    }
    slideshow(bi);
}

//tilføjer en event så slideshow starter når documentet er loadet 
window.addEventListener("load", function(){
    //forbinder til ... array
    ba = feedback("slideshow").children,
    //indstiller hastigheden på interval timingen til slideshowet
    intrvl = setInterval (bubbleslide, 5000);
});  