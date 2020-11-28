var operadors = [];//arraylist on tindrem els valors clicats
var operacions =[];//arraylist on tinrem les operacions
var operadorActual="";
const max_length = 5;
var operacioCompleta = [];//guardarem tots els operadors i operacions per poder ver el eval().
var resultatOperacio = [];//guardem el resultat de la operacioCompleta.


function dis(val){
  //el parametre val aporta el valor que hem clicat en cada boto.

    if (operadorActual.length < max_length) { //si hi ha mes de 5 caracters
          operadorActual += val;
          document.getElementById("resultatCientific").value = operadorActual;
    }else{
      alert("El numero maxim de caracters que pots introduïr es de 5");
      console.log("Error numero massa llarg.",operadorActual.length);
    }


}
function disPunt(val){

        let res = operadorActual.match(/\./g);
        console.log("El numero de punts: ",res);
        if(res === null){
          operadorActual += val;
          document.getElementById("resultatCientific").value = operadorActual;
        }else{
            console.log("Error mes de 1 punt.");
            alert("Recorda només pots posar 1 punt.");
        }
}

function operacio(val){
    console.log(" Operacions abans", operadors.length, operacions.length);

      if ( operadors.length  === (operacions.length +1) ){
            console.log("operacions despres", operadors.length, operacions.length);
            console.log("error massa operacions");
      }else{

          if (operadorActual !== "") {
              operadors.push(operadorActual);
              operacions.push(val);
          }else{
              console.log("operadorActual 0 ",operadorActual);
              alert("Massa operacions clicades!.");
          }
            operadorActual="";
            console.log("hem clicat operacio", operadors, " ,,",operacions, " ,,",operadorActual);
      }
}
// funcio mira el valor que hem clicat i retorna el resultat.
function resoldre(){
        let resultatTemp;
        let i=0;

            if(operadors[i] === resultatTemp){
                operacioCompleta = operadorActual + operacions;
                operacioCompleta += operadorActual;
                resultatTemp = eval(operacioCompleta);
                document.getElementById("resultatCientific").value = resultatTemp;
            }else{
                operacioCompleta = operadors + operacions;
                operacioCompleta += operadorActual;

                resultatTemp = eval(operacioCompleta);
                document.getElementById("resultatCientific").value = resultatTemp;
                //resultat += y;
                console.log("operacioCompleta: ",operacioCompleta);
                console.log("operadors: ",operadors);
                console.log("operacions: ",operacions);
                operadorActual = resultatTemp;
                operadors.push(operadorActual);
                console.log("operadorActual: ",operadorActual);
            i+=1;
          }
          operacions=[];
          operadors=[];
}


function sqrt() {
  operadors=[];
  var resultat = Math.sqrt(operadorActual);
  document.getElementById("resultatCientific").value = resultat;
  operadorActual=resultat;
  console.log(operadors);
  //operacions.push(val);
}



function cos() {
  operadors=[];
  var resultat = Math.cos(operadorActual);
  document.getElementById("resultatCientific").value = resultat;
  operadorActual=resultat;
  console.log(operadors);

}

function sin(form) {
  operadors=[];
  var resultat = Math.sin(operadorActual);
  document.getElementById("resultatCientific").value = resultat;
  operadorActual=resultat;
  console.log(operadors);
}

function tan() {
  operadors=[];
  var resultat = Math.tan(operadorActual);
  document.getElementById("resultatCientific").value = resultat;
  operadorActual=resultat;
  console.log(operadors);
}


//neteijem la pantalla de la calculadora.
function clr(){
        document.getElementById("resultatCientific").value = "";
        operadorActual="";
        operadors = [];
        operacions = [];
}




function guardar() {
  var resoluciox = window.screen.width * window.devicePixelRatio;
  var resolucioy = window.screen.height * window.devicePixelRatio;
  var alc = document.getElementById("alcada").value;
  var amp = document.getElementById("amplada").value;

  if((resoluciox /2) >= alc && (resolucioy/2)>= amp){
    /*Guardem les dades en el localStorage*/
    localStorage.setItem("alcada", alc);
    localStorage.setItem("amplada", amp);
    console.log("resoluciox maxima: ",resoluciox/2);
    console.log("resolucioy maxima: ",resolucioy/2);
  }else{
    console.log("resolucio massa gran per poder redimencionar");
    alert("Resolució massa gran per poder posicionar la taula!");
  }
  /*netegem el camp*/
  document.getElementById("alcada").value = "";
  document.getElementById("amplada").value = "";
}

function carregar() {
  var alc = localStorage.getItem("alcada");
  var amp = localStorage.getItem("amplada");
  var taula = document.getElementById("taulaCalculadoraCientifica");
  taula.style.bottom = alc+"px";
  taula.style.left = amp+"px";

  document.getElementById("alcada").value = alc;
  document.getElementById("amplada").value = amp;
  localStorage.clear();

}
