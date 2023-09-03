var SetaEsquerda =window.document.getAnimations("setaesquerda")
var Leonardo =window.document.getElementById("Leonardo")
var Samanta =window.document.getElementById("Samanta")
var Bruna =window.document.getElementById("Bruna")
var SetaDireita =window.document.getElementById("setadireita")

function RolarParaDireita(){
SetaEsquerda.style="display:flex; margin-top: 55px"
Leonardo.style ="display:none"
Bruna.style ="display:flex"
SetaDireita.style="display:none" 


}
function RolarParaEsquerda(){
    SetaEsquerda.style="display:none" 
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    SetaDireita.style="display:flex; margin-top: 55px"
}

