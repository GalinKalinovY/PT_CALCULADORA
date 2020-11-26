//var maximCaracters = [];//arraylist on tindrem els valors clicats

var operadors = [];//arraylist on tindrem els valors clicats
var operacions =[];//arraylist on tinrem les operacions
var operadorActual="";
const max_length = 8;
var operacioCompleta = concat(operadors, operacions);

function dis(val){
  //el parametre val aporta el valor que hem clicat en cada boto.
  //document.getElementById("resultat").value+=val

  //var maximCaracters = document.getElementById("resultat").value


//controlar numero punts 50. 50.64

    if (operadorActual.length < max_length) { //si hi ha mes de 5 caracters
          operadorActual += val;
          document.getElementById("resultat").value = operadorActual;
    }else{
      alert("El numero maxim de caracters que pots introduïr es de 5");
      console.log("Error numero massa llarg.");
    }


}
function disPunt(val){

        let res = operadorActual.match(/\./g);
        console.log("El numero de punts: ",res);
        if(res === null){
          operadorActual += val;
          document.getElementById("resultat").value = operadorActual;
        }else{
            console.log("Error mes de 1 punt.");
        }
}

function operacio(val){
    console.log(" Operacions abans", operadors.length, operacions.length);

if ( operadors.length  == (operacions.length +1) ){
    console.log("operacions despres", operadors.length, operacions.length);
    console.log("error massa operacions");
}else{

  if (operadorActual != "") {
    operadors.push(operadorActual);
    operacions.push(val);
  }else{
    console.log("operadorActual 0 ",operadorActual);
  }
  //operadors.push(operadorActual);

  operadorActual="";
  console.log("hem clicat operacio", operadors, " ,,",operacions, " ,,",operadorActual);
}
  }

// funcio mira el valor que hem clicat i retorna el resultat.
function resoldre(){

        let i = 0;
        let j = 0;
        let resultatTemp;
        while(operadors[i] && operacions[j] !=""){
            for(let x=0;x < operadors.length; x++){
              console.log("for de operadors ",operadors);
            }
              for(let x1=0; x1 < operacions.length; x1++){
                console.log("for de operadors ",operacions);

              }

            i += 1;
            j += 1;
        }



        /*let x = operadorActual;
        let y = eval(x);
        document.getElementById("resultat").value = y*/
}

function dividir(val) {//agafe tots els numeros anteriors al signe de dividir.
  //Comprobar longitud
  operadorActual += val;
  operadorActual.lengh < max_length;
  console.log("estem a la funcio dividir",operadorActual);
  document.getElementById("resultat").value = operadorActual;
}

//neteijem la pantalla de la calculadora.
function clr(){
        document.getElementById("resultat").value = ""
        operadorActual="";
        operadors = []
        operacions = [];
}






/*
  function dis(val){
    //el parametre val aporta el valor que hem clicat en cada boto.
    //document.getElementById("resultat").value+=val

     var maximCaracters = document.getElementById("resultat").value


      if (maximCaracters.length >= 5) { //si hi ha mes de 5 caracters
        alert("Error el numero maxim de caracters que pots introduïr es de 5");
        //clr();
      }else{
        document.getElementById("resultat").value+=val
      }

  }
*/
