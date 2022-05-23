var x = document.getElementById("monthly");
var y = document.getElementById("yearly");
var btn = document.getElementById("btn");

function yearly() {
    x.style.left = "-1200px";
    y.style.left = "30px";
    btn.style.left = "110px";
}

function monthly() {
    x.style.left = "30px";
    y.style.left = "1200px";
    btn.style.left = "0";
}