//menu
function openNav() {
  document.getElementById("subscriptoNav").style.width = "100%";
  document.getElementById("hamburger").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("subscriptoNav").style.width = "0";
  document.getElementById("hamburger").style.marginLeft= "20px";
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
} 
