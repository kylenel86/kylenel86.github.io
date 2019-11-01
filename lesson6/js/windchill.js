function newChill(){
    var temp = parseFloat(document.getElementById('high').innerHTML);
    var speed = parseFloat(document.getElementById('speed').innerHTML);
    var chill = windChill (temp, speed);
    //var display = result;
    
    document.getElementById('windchill').innerHTML = chill;
    }
    
    
    
        function windChill(temp, speed){
            //var f = 'n/a';
            //var f = speed:
            /*if (temp <= 50 && speed > 3) {  
                f = 32.74 + (0.6215 * temp)-(35.75 * Math.pow(speed,0.16)) + (0.4275 * temp * Math.pow(speed,0.16));
            }*/
            return speed;
    
    }