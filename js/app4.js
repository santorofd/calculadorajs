/*
CURSO: BIG DATA
MODULO: JAVASCRIPT
EVALUACION FINAL
EJERCICIO: CALCULADORA
ALUMNO: SANTORO FERNANDO DANIEL
FECHA: 7/3/2019

*/

window.addEventListener('load',calculadora,false);

function calculadora(){
    console.log('termino de cargar la pagina...')
    
    var num1 = 0.0;
    var num2 = 0.0;
    var tmp1 = 0.0;
    var tmp2 = 0.0;
    
    var resultado = 0.0;
    var resultadoParcial = 0.0;
    
    var operacionAnterior = '+';
    var operacionActual = '';
    
    var hayPunto = false;
    var huboIgual = false;
    
    var operacionPendiente = false;
    
    var contador = 7;
    
    var display = document.getElementById('display');
    
    var simboloArray = [];
    
    simboloArray['mas']='+';
    simboloArray['menos']='-';
    simboloArray['por']='*';
    simboloArray['dividido']='/';
    simboloArray['igual']='=';
    
    var signo = '';
    
    document.getElementsByClassName('teclado')[0].addEventListener('mousedown',transformar,false);
    document.getElementsByClassName('teclado')[0].addEventListener('mouseup',transformar,false);
    
    function transformar(evt){
        
        /*
        console.log("este es el evento que se ejecuto: "+evt.type);
        console.log(evt.target.id);
        */
        var elemento = document.getElementById(evt.target.id);
        //console.log(elemento);
        var evento = evt.type;
        
        if(elemento != null){  
            if(evento == 'mouseup'){
                elemento.setAttribute("style", "transform:scale(1,1)");
                switch(elemento.id){
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        ingresoNumero(elemento.id);
                        break;
                    case'mas':
                    case'menos':
                    case'por':
                    case'dividido':
                        /*
                        num2 = parseFloat(display.innerHTML);
                        
                        if(!isNaN(num2)){
                            console.log('numero 1: '+num1);
                            console.log('numero 2: '+num2);
                            operacionActual = '+'
                            display.innerHTML = '';
                            resultadoParcial = num1 + num2;
                            num1 = resultadoParcial;
                            console.log('resultado parcial: '+resultadoParcial)
                            hayPunto = false;
                            contador = 7;
                            console.log('hay una operacion pendiente...');
                        }
                        
                        huboIgual = false;
                        */
                        
                        if(huboIgual){
                            huboIgual = false;
                        }
                        
                        var valorActual = parseFloat(display.innerHTML);
                        if(!isNaN(valorActual)){
                            if(!operacionPendiente){
                                num1 = valorActual;
                                
                                operacionPendiente = true;
                            }
                            else{
                                console.log('1+1+...')
                                num2 = valorActual;
                                tmp1 = calculoOperAnt(signo,num1,num2);
                                num1 = tmp1;
                                console.log('resultados parciales: '+tmp1);
                            }
                            display.innerHTML = '';
                            hayPunto = false;
                            contador = 7;
                            
                        }
                        signo = simboloArray[elemento.id]
                        console.log('signo: '+signo)
                        console.log('numero1: '+num1)
                        break;
                    case'on':
                        on();
                        break;
                    case'sign':
                        cambioSigno();
                        break;
                    case'punto':
                        punto();
                        break;
                    case'igual':
                        console.log('funcion igual');
                        var valorActual = parseFloat(display.innerHTML);
                        console.log('numero en pantalla: '+valorActual);
                        if(!isNaN(valorActual)){
                            if(operacionPendiente){
                                /*
                                switch(signo){
                                    case '+':
                                        resultado=sumar(num1,valorActual);
                                        break;
                                    case '-':
                                        resultado=restar(num1,valorActual);
                                        break;
                                    case '*':
                                        resultado=multiplicar(num1,valorActual);
                                        break;
                                    case '/':
                                        resultado=dividir(num1,valorActual);
                                        break;
                                        
                                }
                                */
                                resultado = calculoOperAnt(signo,num1,valorActual);
                                operacionPendiente = false;
                                num2 = valorActual;
                                //display.innerHTML = resultado;
                                display.innerHTML = ((resultado * 100) / 100).toFixed(2);
                                huboIgual = true;
                            }
                            else if(huboIgual){
                                var tmp3;
                                console.log('se volvio a presionar = despues de un =...');
                                console.log('signo: '+signo);
                                console.log('numero 2: '+num2);
                                tmp2 = parseFloat(display.innerHTML);
                                tmp3 = calculoOperAnt(signo,num2,tmp2);
                                display.innerHTML = ''
                                display.innerHTML = ((tmp3*100)/100).toFixed(2);
                            }
                            else{
                                console.log('no hay operacion pendiente o falta un termino para la operacion...')
                            }
                            
                        }
                        else{
                            console.log('la pantalla esta en blanco')
                        }
                        break;
                }
            }
            else{
                //console.log(elemento);
                elemento.setAttribute("style", "transform:scale(0.95,0.95)");
            }
            
        }
        
    }
    
    function ingresoNumero(num){
        
        
        if(!huboIgual){
            var valorActual = display.innerHTML;
            if(!isNaN(parseFloat(valorActual))){
                console.log('hay un numero en pantalla...')
                if(valorActual == '0'){
                    if(num != '0'){
                        valorActual = num;
                    }
                }

                else if(valorActual != '0' && contador > 0){
                    valorActual = valorActual + num;
                    contador--;
                }
            }
            else{
                console.log('la pantalla esta vacia...')
                valorActual = num;
                contador = 7;
            }
        
            display.innerHTML = valorActual;
        }
        else{
            on();
            display.innerHTML = num;
        }
        
        
        
    }
    
    function on(){
        display.innerHTML = 0;
        hayPunto = false;
        operacionPendiente = false;
        contador = 7;
        num1 = 0;
        num2 = 0;
        resultadoParcial = 0;
        resultado = 0;
        huboIgual = false;
    }
    
    function cambioSigno(){
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
    
    function punto(){
        console.log('funcion punto');
        var valorActual = display.innerHTML;
        if(!hayPunto){
            if(isNaN(parseFloat(valorActual))){
                valorActual='0';
            }
            display.innerHTML = valorActual+'.';
            hayPunto = true;
        }
    }
    
    function sumar(num1, num2){
        console.log('entramos a la funcion sumar...');
        return num1 + num2;
    }
    
    function restar(num1, num2){
        console.log('entramos a la funcion restar...');
        return num1 - num2;
    }
     function multiplicar(num1, num2){
         console.log('entramos a la funcion multiplicar');
         return num1 * num2;
     }
    function dividir(num1, num2){
        console.log('entramos a la funcion dividir');
        return num1 / num2;
    }
    
    function calculoOperAnt(signo,num1,num2){
        var resultado;
        switch(signo){
            case '+':
                resultado=sumar(num1,num2);
                break;
            case '-':
                resultado=restar(num1,num2);
                break;
            case '*':
                resultado=multiplicar(num1,num2);
                break;
            case '/':
                resultado=dividir(num1,num2);
                break;
        }
        return resultado;
    }
}