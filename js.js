function everySecond() {
  writeDate();
}

window.setInterval(function(){
  everySecond();
}, 1000);

window.onload = function() {
  everySecond();
};

function writeDate() {
    var d = new Date();
    var hours = "";
    var minutes = "";
    var seconds = "";
    
    if (d.getHours() < 10) {
        hours = "0" + d.getHours();
    } else {
        hours = d.getHours();
    }
    
    if (d.getMinutes() < 10) {
        minutes = "0" + d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }
    
    if (d.getSeconds() < 10) {
        seconds = "0" + d.getSeconds();
    } else {
        seconds = d.getSeconds();
    }
    
    var time = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("DateDate").innerHTML = d.toDateString();
    document.getElementById("DateTime").innerHTML = time;
}