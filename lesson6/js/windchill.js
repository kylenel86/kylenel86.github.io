function newChill(){
    var temp = parseFloat(document.getElementById('high').innerHTML);
    var speed = parseFloat(document.getElementById('speed').innerHTML);
    var chill = windChill (temp, speed);
    
    document.getElementById('windchill').innerHTML = chill;
    }
    
        function windChill(temp, speed){
            var f = 'N/A';
            if (temp <= 50 && speed > 3) {  
                f = 32.74 + (0.6215 * temp)-(35.75 * Math.pow(speed,0.16)) + (0.4275 * temp * Math.pow(speed,0.16));
                f = Math.round(f* 100) / 100;
            }
            return f;
    
    }