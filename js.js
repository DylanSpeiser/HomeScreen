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
    var hourString = "";
    var minutes = "";
    var seconds = "";
    
    if (d.getHours() == 0) {
        hourString = "12";
    } else if (d.getHours() > 0 && d.getHours() < 10) {
        hourString = "0"+(d.getHours());
    } else if (d.getHours() >= 10 && d.getHours() <= 12) {
        hourString = d.getHours();
    } else if (d.getHours() > 12 && d.getHours() < 23) {
        hourString = "0" + (d.getHours() - 12);
    } else if (d.getHours() == 23) {
        hourString = "11";
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
    
    var time = hourString + ":" + minutes + ":" + seconds;
    
    document.getElementById("DateDate").innerHTML = d.toDateString();
    document.getElementById("DateTime").innerHTML = time;
}