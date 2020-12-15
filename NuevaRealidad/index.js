window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('oculto');
}

var aniSegunda = 0;
var  aniPie = 0;
var aniNinios = 0;

var parrafoAni1 = 0;
var parrafoAni2 = 0;
var parrafoAni3 = 0;
var parrafoAni4 = 0;
var parrafoAni5 = 0;
var aniEnd = 0;
var anifondo = 0;
var anifondoFinal = 0;
//fondos
var fondo = document.querySelector("div.background");
var fondoFinal = document.querySelector("div.backFinal");

//objetos
var jabon = document.querySelector("img.jabonI");
var barbijo = document.querySelector("img.barbijoI");
var alcohol = document.querySelector("img.alcoholI");
var pie = document.querySelector("img.pieI");
var ninio = document.querySelector("img.ninioI");
var ninia = document.querySelector("img.niniaI");

//parrafos
var parrafo1 = document.querySelector("img.parrafo1I");
var parrafo2 = document.querySelector("img.parrafo2I");
var parrafo3 = document.querySelector("img.parrafo3I");
var parrafo4 = document.querySelector("img.parrafo4I");
var parrafo5 = document.querySelector("img.parrafo5I");

var end = document.querySelector("img.logoI");

if(parrafoAni1==0){
        if(parrafo1){
            parrafo1.className = "parrafo1F"
            parrafoAni1=1;
        }
    }

window.onscroll = function() {
    var y = window.scrollY;
    if(y<600 ){
        document.getElementById("nubes").style.left=y+50+"px";
    }

    if(y>500 && anifondo==0){
        fondo.className = "backgroundF";
    }
    
    
    if(y>800 && parrafoAni2==0){
        parrafo2.className = "parrafo2F"
        parrafo3.className = "parrafo3F"
    }

    console.log(y);
    if(y>900 && aniSegunda==0){
        if (jabon) {
            jabon.className = "jabonF";
            barbijo.className = "barbijoF";
            alcohol.className = "alcoholF"
            aniSegunda=1;
        }
    }

    if(y>1200 && parrafoAni4==0){
        parrafo4.className = "parrafo4F";
        parrafoAni4=1;
    }
    if(y>2700 && anifondoFinal==0){
        fondoFinal.className = "backFinalF";
        anifondoFinal=1;
    }

    if(y>3700 && parrafoAni5==0){
        parrafo5.className = "parrafo5F";
        parrafoAni5=1;
    }


    
    if(y>2100 && aniPie==0){
        if(pie){
            pie.className = "pieF";
            aniPie=1;
        }
    }

    if(y>3500 && aniNinios==0){
        if (ninio) {
            ninio.className = "ninioF";
            ninia.className = "niniaF";
            aniNinios=1;
        }

    }

    if(y>4800 && aniEnd==0){
        end.className = "logoF";
        aniEnd=1;
    }


    if(y<500){
        aniPie=0;
        aniSegunda=0;
        aniNinios = 0;
        aniEnd=0;
        anifondo = 0;
        
        anifondoFinal=0;

        fondo.className = "background";
        fondoFinal.className = "backFinal";
        jabon.className = "jabonI";
        barbijo.className = "barbijoI";
        alcohol.className = "alcoholI";
        pie.className = "pieI";
        ninio.className = "ninioI";
        ninia.className = "niniaI";
        end.className = "logoI";

        parrafo2.className = "parrafo2I"
        parrafo3.className = "parrafo3I"
        parrafo4.className = "parrafo4I"
        parrafo5.className = "parrafo5I"
        parrafoAni2 = 0;
        parrafoAni3 = 0;
        parrafoAni4 = 0;
        parrafoAni5 = 0;
    }
    
};

function animacionNinio(inicio, fin) {
    var el = document.querySelector("img.brazoNinioI");
        if (el) {
            el.className = "brazoNinioF";
        } else {
            el = document.querySelector("img.brazoNinioF");
            el.className = "brazoNinioI";
        }
        return el;
}
var intervalNinio = window.setInterval( animacionNinio, 300);

function animacionMadre(inicio, fin) {
    var el = document.querySelector("img.brazoMamaI");
        if (el) {
            el.className = "brazoMamaF";
        } else {
            el = document.querySelector("img.brazoMamaF");
            el.className = "brazoMamaI";
        }
        return el;
}
var intervalMadre = window.setInterval(animacionMadre,500);
