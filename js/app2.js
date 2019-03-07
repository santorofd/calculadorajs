window.addEventListener('load',calculadora,false)

function calculadora(){
    
    console.log('termio de cargar la pagina')
    
    
    ///VARIABLES GLOBALES
    
    var contador = 8;
    
    var valorActual = '';
    
    var valorAnterior = '';
    
    var simbolo = '';
    
    var haySimbolo = false;
    
    var simboloArray = [];
    
    simboloArray['mas']='+';
    simboloArray['menos']='-';
    simboloArray['por']='*';
    simboloArray['dividido']='/';
    
    var display = document.getElementById('display');
    
    var hayPunto = false;
    
    ///EVENTOS NUMERICOS
    document.getElementById('0').addEventListener('mouseup',ingresoNumero,false);
    document.getElementById('1').addEventListener('mouseup',ingresoNumero,false);
    document.getElementById('2').addEventListener('mouseup',dibujar2,false);
    document.getElementById('3').addEventListener('mouseup',dibujar2,false);
    document.getElementById('4').addEventListener('mouseup',dibujar2,false);
    document.getElementById('5').addEventListener('mouseup',dibujar2,false);
    document.getElementById('6').addEventListener('mouseup',dibujar2,false);
    document.getElementById('7').addEventListener('mouseup',dibujar2,false);
    document.getElementById('8').addEventListener('mouseup',dibujar2,false);
    document.getElementById('9').addEventListener('mouseup',dibujar2,false);
    
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

    
    ///EVENTOS DE OPERACIONES
    document.getElementById('por').addEventListener('mousedown',transformar,false);
    document.getElementById('menos').addEventListener('mousedown',transformar,false);
    document.getElementById('mas').addEventListener('mousedown',transformar,false);
    document.getElementById('dividido').addEventListener('mousedown',transformar,false);
    
    document.getElementById('por').addEventListener('mouseup',calcular,false);
    document.getElementById('menos').addEventListener('mouseup',calcular,false);
    document.getElementById('mas').addEventListener('mouseup',calcular,false);
    document.getElementById('dividido').addEventListener('mouseup',calcular,false);
    
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
    
    function on(evt){
        console.log('funcion on/c');
        transformar(evt);
        display.innerHTML = '0';
        contador = 8;
        hayPunto = false;
        haySimbolo = false;
        simbolo = '';
        leerDisplay();
        valorAnterior = '';
    }
    
    function leerDisplay(){
        console.log('actualizamos valorActual');
        valorActual = display.innerHTML;
        console.log(valorActual);
    }
    
    leerDisplay();
    
    function actualizarDisplay(cadena){
        display.innerHTML = valorActual + cadena;
        leerDisplay();
    }
    
    
    function ingresoNumero(evt){
        console.log('funcion ingresoNumero...');
        console.log('hay una operacion anterior: '+haySimbolo);
        transformar(evt);
        var numero = evt.path[0].id;
        if(valorActual=='0' && numero == '0'){
            console.log('el valor actual es 0 y el numero presionado es 0... no hago nada');
        }
        else if(valorActual=='0' && numero != '0'){
            console.log('el valor actual es 0 y el numero presionado es '+numero+'... lo escribo en pantalla');
            valorActual = ''
            actualizarDisplay(numero);
            console.log('y decremento el contador..')
            contador--;
        }
        else if(valorActual != '0' && contador > 0 && !haySimbolo){
            console.log('el valor actual es distinto de 0 y el contador es mayor a 0... concateno');
            actualizarDisplay(numero);
            console.log('y decremento el contador..');
            contador--;
        }
        else if(haySimbolo && numero == '0'){
            console.log('presionamos un 0 ');
            valorActual = ''
            actualizarDisplay(numero);
            console.log('y decremento el contador..')
            contador--;
        }
        
    }
    
    function dibujar2(evt){
        transformar(evt);
        console.log('funcion dibujar2...');
        console.log('valor anterior: '+valorAnterior);
        console.log('valor actual: '+valorActual);
        var numero = evt.path[0].id;
        //leerDisplay();
        if(valorActual == '0' && numero != '0'){
            console.log('es el primer numero...');
            valorActual = '';
            actualizarDisplay(numero);
            contador--;
        }
        else if(valorActual != '0' && contador > 0 && !haySimbolo){
            //leerDisplay();
            console.log('concatena...');
            console.log('hay simbolo: '+haySimbolo);
            actualizarDisplay(numero);
            contador--;
        }
        else{
            console.log('hay simbolo o se está presionando el 0 varias veces seguidas...');
            console.log('contador: '+contador);
            valorActual = '';
            actualizarDisplay(numero);
        }
        //leerDisplay();
    }
    
    function punto(evt){
        transformar(evt);
        console.log('punto');
        console.log('hay signo: '+haySimbolo);
        if(!hayPunto){
            if(valorActual == '0'){contador--;}
            hayPunto = true;
            actualizarDisplay('.');
        }
    }
    
    function signo(evt){
        transformar(evt);
        var numero = valorActual;
        if(numero != 0){
            if(numero.charAt(0)!='-'){
                //console.log('el numero es positivo')
                display.innerHTML = '-' + numero;
                leerDisplay();
            }
            else{
            //console.log('el numero es negativo')
                numero = numero.substring(1);
                //actualizarDisplay(numero);
                display.innerHTML = numero;
                leerDisplay();
            }
        }
        
    }
    
    function calcular(evt){
        console.log('entramos a la funcion calcular...');
        transformar(evt);
        var operacion = evt.path[0].id;
        switch(operacion){
            case "mas":
            case "menos":
            case "por":
            case "dividido":
                console.log('operacion: '+operacion);
                console.log('valor anterior: '+valorAnterior);
                console.log('valor actual: '+valorActual);
                valorAnterior = valorActual;
                console.log('nuevo valor para valor anterior: '+valorAnterior);
                haySimbolo = true;
                hayPunto = false;
                contador = 8;
                simbolo = simboloArray[operacion];
                break;
        }
    }
    
    function igual(evt){
        transformar(evt);
        console.log('funcion igual');
        if(simbolo != ''){
            console.log('valor anterior: '+valorAnterior);
            console.log('valor actual: '+valorActual);
            var num1 = parseFloat(valorAnterior);
            var num2 = parseFloat(valorActual);
            var resultado = 0.0;
            switch(simbolo){
                case '+':
                    console.log('suma');
                    resultado = num1 + num2;
                    break;
                case '-':
                    console.log('resta');
                    resultado = num1 - num2;
                    break;
                case '*':
                    console.log('multiplicacion');
                    resultado = num1 * num2;
                    break;
                case '/':
                    console.log('division');
                    if(num1==0 && num2==0){display.innerHTML='error'}
                    if((num1==0 && num2!=0)||(num1!=0 && num2!=0)){resultado=num1/num2}
                    if(num1!=0 && num2==0){display.innerHTML='error'}
                    //resultado = num1 / num2;
                    break;
            }
            display.innerHTML = resultado.toPrecision(8);
            leerDisplay();
            //valorActual = '0';
            contador = 8;
            //valorAnterior = '';
        }
        else{
            console.log('no hay nada para hacer');
        }
    }
    
    ///fin funciones
    
}

//calculadora();