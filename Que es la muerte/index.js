window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('oculto');
}



var parrafoAniHome = true;
var parrafoAni1 = true;
var parrafoAni2 = true;
var parrafoAni3 = true;
var parrafoAni4 = true;
var parrafoAni5 = true;
var parrafoAni6 = true;
var parrafoAni7 = true;

//bebe
var bebeAni = true;
//iluminacion
var iluminacionAni = true;
//floresIzq
var floresIzqAni= true;
//floresDer
var floresDerAni= true;
//logo
var logAni =true;


//fondos
//var fondo = document.querySelector("div.background");
//var fondoFinal = document.querySelector("div.backFinal");

//objetos
var bebe = document.querySelector("img.bebeF");
var iluminacion = document.querySelector("img.iluminacion");
var floresIzq = document.querySelector("img.floresIzq");
var floresDer = document.querySelector("img.floresDer");

//parrafos

var parrafoHome = document.querySelector("img.parrafo1Home");
var parrafo1 = document.querySelector("img.parrafo1I");
var parrafo2 = document.querySelector("img.parrafo2I");
var parrafo3 = document.querySelector("img.parrafo3I");
var parrafo4 = document.querySelector("img.parrafo4I");
var parrafo5 = document.querySelector("img.parrafo5I");
var parrafo6 = document.querySelector("img.parrafo6I");
var parrafo7 = document.querySelector("img.parrafo7I");

var end = document.querySelector("img.logoI");

if(parrafoAniHome){
        if(parrafoHome){
            parrafoHome.className = "parrafo1HomeF"
            parrafoAniHome=false;
        }
    }
if(bebeAni){
    bebe.className = "bebeI";
   bebeAni=false;
}
window.onscroll = function() {
    var y = window.scrollY;
    console.log(y);
    if(y<700&&y>500 ){
        document.getElementById("bebe").style.left=y+50+"px";
        
    }
    
    
   if(y>100 && parrafoAni1){
        parrafo1.className = "parrafo1F";
        parrafo2.className = "parrafo2F";
        parrafoAni1 = false;
    }

    if(y>900 && parrafoAni3){
        parrafo3.className = "parrafo3F";   
        parrafo4.className = "parrafo4F";
        parrafoAni3 = false;
    }
    if(y>2200 && iluminacionAni){
        iluminacion.className = "iluminacionF";
        parrafo5.className = "parrafo5F";
        parrafoAni3= false;
    }
    if(y>3200 && parrafoAni6){
        parrafo6.className = "parrafo6F";
        parrafoAni6 = false;
        floresDer.className = "floresDerF";
        floresIzq.className = "floresIzqF";
    }

    if(y>4250 && parrafoAni7){
        parrafo7.className = "parrafo7F";
        parrafoAni7 = false;
    }
    if(y>5000 && logAni){
        end.className = "logoF";
        logAni = false;
    }



    if(y<500){
        parrafoAniHome = true;
        parrafoAni1 = true;
        parrafoAni2 = true;
        parrafoAni3 = true;
        parrafoAni4 = true;
        parrafoAni5 = true;
        parrafoAni6 = true;
        parrafoAni7 = true;
        //bebe
        bebeAni = true;
        //iluminacion
        iluminacionAni = true;
        //floresIzq
        floresIzqAni= true;
        //floresDer
        floresDerAni= true;
        //logo
        logAni =true;

        parrafo1.className = "parrafo1I";
        parrafo2.className = "parrafo2I";
        parrafo3.className = "parrafo3I";   
        parrafo4.className = "parrafo4I";
        iluminacion.className = "iluminacion";
        parrafo5.className = "parrafo5I";
        parrafo6.className = "parrafo6I";
        parrafo7.className = "parrafo7I";
        end.className = "logoI";
        floresDer.className="floresDer";
        floresIzq.className="floresIzq";
        bebe.removeAttribute("style");
    }

};
