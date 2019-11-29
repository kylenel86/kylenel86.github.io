function pancakeDay(){
    var wd = new Date().getDay();
    
    if (wd == 5) {
        document.getElementById("pancakes").innerHTML = "Come join us for pancakes in the park!  Preston Downtown Park, 9 A.M. EVERY Saturday!";
        document.getElementById('pancakes').style.display="block";
    }
    }
    pancakeDay();