console.log('esto aparece igual...');

window.addEventListener('load',calculadora,false)

function calculadora(){
    
    console.log('termio de cargar la pagina')
    
    //VARIBLES 
    
    var contador = 8;
    var display = document.getElementById('display');
    var hayPunto = false;
    var hayOper = false;
    var hayIgual = false;
    var operando1 = 0;
    var operando2 = 0;
    var resultado = 0;
    
    var simboloArray = [];
    simboloArray['mas']='+';
    simboloArray['menos']='-';
    simboloArray['por']='*';
    simboloArray['dividido']='/';
    
    var simbolo = '';
    
    ///EVENTOS NUMERICOS
    
    document.getElementById('0').addEventListener('click',nueva,false);
    
    /*
    document.getElementById('0').addEventListener('mouseup',dibujarDisplay,false);
    document.getElementById('1').addEventListener('mouseup',dibujarDisplay,false);
    document.getElementById('2').addEventListener('mouseup',dibujarDisplay,false);
    document.getElementById('3').addEventListener('mouseup',dibujarDisplay,false);
    document.getElementById('4').addEventListener('mouseup',dibujarDisplay,false);
    document.getElementById('5').addEventListener('mouseup',dibujarDisplay,false);
    document.getElementById('6').addEventListener('mouseup',dibujarDisplay,false);
    document.getElementById('7').addEventListener('mouseup',dibujarDisplay,false);
    document.getElementById('8').addEventListener('mouseup',dibujarDisplay,false);
    document.getElementById('9').addEventListener('mouseup',dibujarDisplay,false);
    
    document.getElementById('0').addEventListener('mousedown',transformar,false);
    document.getElementById('1').addEventListener('mousedown',transformar,false);
    document.getElementById('2').addEventListener('mousedown',transformar,false);
    document.getElementById('3').addEventListener('mousedown',transformar,false);
    document.getElementById('4').addEventListener('mousedown',transformar,false);
    document.getElementById('5').addEventListener('mousedown',transformar,false);
    document.getElementById('6').addEventListener('mousedown',transformar,false);
    document.getElementById('7').addEventListener('mousedown',transformar,false);
    document.getElementById('8').addEventListener('mousedown',transformar,false);
    document.getElementById('9').addEventListener('mousedown',transformar,false);
    
    //document.getElementById('1').addEventListener('mouseup',transformar,false);
    */

    ///EVENTOS DE OPERACIONES
    document.getElementById('por').addEventListener('mousedown',transformar,false);
    document.getElementById('menos').addEventListener('mousedown',transformar,false);
    document.getElementById('mas').addEventListener('mousedown',transformar,false);
    document.getElementById('dividido').addEventListener('mousedown',transformar,false);
    
    document.getElementById('por').addEventListener('mouseup',operacion('*'),false);
    document.getElementById('menos').addEventListener('mouseup',operacion('-'),false);
    document.getElementById('mas').addEventListener('mouseup',operacion('*'),false);
    document.getElementById('dividido').addEventListener('mouseup',operacion('/'),false);
    
    ///OTROS EVENTOS
    document.getElementById('punto').addEventListener('mouseup',punto,false);
    document.getElementById('on').addEventListener('mouseup',on,false);
    document.getElementById('sign').addEventListener('mouseup',signo,false);
    document.getElementById('igual').addEventListener('mouseup',igual,false);
    
    document.getElementById('punto').addEventListener('mousedown',transformar,false);
    document.getElementById('on').addEventListener('mousedown',transformar,false);
    document.getElementById('sign').addEventListener('mousedown',transformar,false);
    document.getElementById('igual').addEventListener('mousedown',transformar,false);
    
    ///FUNCIONES
    
    function nueva(evt){
        console.log(evt)
    }
    
    
    function transformar(evt){
        //console.log('entramos en la funcion transformar');
        var evento = evt.type;
        var id = evt.path[0].id;
        var elemento = document.getElementById(id);
        
        //console.log('evento: '+evento);
        if(evento == 'mousedown'){
            //console.log(elemento);
            elemento.setAttribute("style", "transform:scale(0.95,0.95)");
        }
        else{
            //console.log(elemento);
            elemento.setAttribute("style", "transform:scale(1,1)");
        }
    }
    
    /*
    function dibujarDisplay(evt){
        console.log('entramos en la funcion dibujarDisplay');
        transformar(evt);
        var numero = evt.path[0].id;
        var valorPantalla = display.innerHTML;
        console.log('valor en pantalla: '+valorPantalla);
        console.log('numero: '+numero);
        if(valorPantalla == '0' && numero != '0'){
            console.log('el primer numero')
            display.innerHTML = numero;
            contador--;
            console.log('contador: '+contador);
        }
        else if(valorPantalla != '0' && valorPantalla != '' && contador > 0){
            console.log('concateno')
            display.innerHTML = valorPantalla+numero;
            contador--;
        }else if(valorPantalla == ''){
            console.log('hay operacion y es el primer numero');
            display.innerHTML = numero;
            console.log('contador: '+contador);
        }
    }
    */
    
    function dibujarDisplay(evt){
        console.log('entramos en la funcion dibujarDisplay');
        transformar(evt);
        console.log(evt);
        /*
        var numero = evt.path[0].id;

        if(!hayIgual){
            var valorPantalla = display.innerHTML;
            if(valorPantalla == '0' && numero != '0'){
                console.log('el primer numero')
                display.innerHTML = numero;
                contador--;
                console.log('contador: '+contador);
            }
            else if(valorPantalla != '0' && valorPantalla != '' && contador > 0){
                console.log('concateno')
                display.innerHTML = valorPantalla+numero;
                contador--;
            }else if(valorPantalla == ''){
                console.log('hay operacion y es el primer numero');
                display.innerHTML = numero;
                console.log('contador: '+contador);
            }
        }
        else{
            display.innerHTML = numero;
            hayIgual = false;
            contador = 8;
        }
        */
    }
    
    function on(evt){
        console.log('funcion on/c');
        transformar(evt);
        display.innerHTML = '0';
        contador = 8;
        hayPunto = false;
        hayOper = false;
        operando1 = 0;
        operando2 = 0;
        resultado = 0;
        simbolo = '';
    }
    
    function punto(evt){
        console.log('entramos en la funcion punto');
        transformar(evt);
        var valorPantalla = display.innerHTML;
        if(!hayPunto){
            if(valorPantalla == '0' || valorPantalla == ''){
                valorPantalla = 0;
                contador--;
            }
            display.innerHTML = valorPantalla+'.';
            hayPunto = true;
        }
    }
    
    function signo(evt){
        transformar(evt);
        var numero = display.innerHTML;
        if(numero != 0){
            if(numero.charAt(0)!='-'){
                display.innerHTML = '-' + numero;
            }
            else{
                numero = numero.substring(1);
                display.innerHTML = numero;
            }
        }
    }
    
    function operacion(evt){
        console.log('entramos a la funcion operacion...');
        transformar(evt);
        var operacion = evt.path[0].id;
        switch(operacion){
            case "mas":
            case "menos":
            case "por":
            case "dividido":
                console.log('operacion: '+operacion);
                operando1 = Number(display.innerHTML);
                display.innerHTML = '';
                hayPunto = false;
                hayOper = true;
                contador = 8;
                simbolo = simboloArray[operacion];
                console.log('Simbolo de la operacion: '+simbolo)
                /*
                console.log('valor anterior: '+valorAnterior);
                console.log('valor actual: '+valorActual);
                valorAnterior = valorActual;
                console.log('nuevo valor para valor anterior: '+valorAnterior);
                haySimbolo = true;
                hayPunto = false;
                contador = 8;
                simbolo = simboloArray[operacion];
                */
                break;
        }
    }
    
    function igual(){
        console.log('ingresamos a la funcion igual');
        operando2 = Number(display.innerHTML);
        hayIgual = true;
        if(hayOper && operando2 != ''){
            console.log('operacion pendiente: '+simbolo);
            switch(simbolo){
                    case '+':
                        console.log('hay que sumar '+operando1+'+'+operando2);
                        resultado = operando1 + operando2;
                        operando1 = operando2;
                        operando2 = resultado;
                        break;
                    case '-':console.log('hay que restar'+operando1+'-'+operando2);
                    break;
                    case '*':console.log('hay que multiplicar'+operando1+'*'+operando2);
                    break;
                    case '/':console.log('hay que dividir'+operando1+'/'+operando2);
                    break;
            }
            display.innerHTML = resultado;
        }
        else{
            console.log('operacion mal formada')
        }
    }
    
}

//calculadora();