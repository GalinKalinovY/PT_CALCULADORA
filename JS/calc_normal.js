function dis(val){
//el parametre val aporta el valor que hem clicat.
        document.getElementById("resultat").value+=val
}

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
