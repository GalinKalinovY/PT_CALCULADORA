//var maximCaracters = [];//arraylist on tindrem els valors clicats

var operadors = [];//arraylist on tindrem els valors clicats
var operacions =[];
var operadorActual="";
const max_length = 8;

function dis(val){
  //el parametre val aporta el valor que hem clicat en cada boto.
  //document.getElementById("resultat").value+=val

  //var maximCaracters = document.getElementById("resultat").value


//controlar numero punts 50. 50.64

    if (operadorActual.length < max_length) { //si hi ha mes de 5 caracters

      operadorActual += val;
      document.getElementById("resultat").value = operadorActual;

      //clr();
    }else{
      //alert("Error el numero maxim de caracters que pots introduïr es de 5");
      console.log("Eoror numero massa llarg");
    }

}

function operacio(val){
  //el parametre val aporta el valor que hem clicat en cada boto.
  //document.getElementById("resultat").value+=val
  operador.push(operadorActual);
  operacions.push(valor);
  operadorActual="";
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









// funcio mira el valor que hem clicat i retorna el resultat.
function resoldre(){
        let x = document.getElementById("resultat").value
        let y = eval(x)
        document.getElementById("resultat").value = y
}

//neteijem la pantalla de la calculadora.
function clr(){
        document.getElementById("resultat").value = ""
}
