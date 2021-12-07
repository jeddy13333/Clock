function currenTime() {
    var date = new Date();/* Creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* Adding time to the div */
   var t = setTimeout(function(){ currenTime() }, 1000); /* Setting timer */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else{
        return k;
    }
}

currenTime(); /* Calling currentTIme() function to initiate the process */