var display = document.getElementById('display')

function on(){
    display.innerHTML=0
}

document.getElementById('on').addEventListener('click',on,false)

function cambioSigno(){
    var valor = display.innerHTML;
    if(valor.charAt[0] != "-"){console.log("el numero es positivo")}}


document.getElementById('sign').addEventListener('click',cambioSigno,false)