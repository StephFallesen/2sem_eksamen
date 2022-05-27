//menu

//FUNKTIONS FORKLARING - Function by declaretation
//funktionen defineres ved brug af et function keyword
//dernæst funktionsnavnet og afsluttes med ().
//Når man klikker knappen fra HTML'en sker der et event (onclick) og vi får
// ID'et subscriptoNav, hviket bliver styled til at fylde 100% af siden.
function openNav() {
  document.getElementById("subscriptoNav").style.width = "100%";
  document.getElementById("hamburger").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("subscriptoNav").style.width = "0";
  document.getElementById("hamburger").style.marginLeft= "20px";
}

function closeNav() {
  document.getElementById("subscriptoNav").style.width = "0";
  document.getElementById("hamburger").style.marginLeft= "20px";
}


    /* Search button */
function searchFunction1() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function searchFunction2() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let div = document.getElementById("myDropdown");
  let a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// Countdown
// Set the date we're counting down to

//VARIABEL FORKLARINNG - Function by expression:
//let giver mulighed for at erklære variabler, der er begrænset
//til omfanget af et scope eller et udtryk, som det bruges på,
//i modsætning til nøgleordet var, som erklærer en variabel globalt
//eller lokalt til en hel funktion uanset scopet.
//Let er derfor block scooped. (block er tuborg klammer)
// Vi bruger den fordi det er den nyeste metode at deklarede funktioner.

//Derfor erklæres variablen med let og kaldes countDownDate, hvorefter
//datoen skrives og get time henter den nuværende tid.
let countDownDate = new Date("June 31, 2022 12:00:00").getTime();

// opdaterer countdown for hvert sekund.
let x = setInterval(function() {

  // Skaber er variabel og henter dags dato + tid.
  let now = new Date().getTime();

  // finder forskellen mellem datoen der tælles ned til og
  //fratrækker dags dato og tid.
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("count").innerHTML = days + " DAYS : " + hours + " HOURS : "
  + minutes + " MINUTES : " + seconds + " SEKUNDS";

  // Kontrolstruktur hvis countdown er nået den ønskede dato:
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "UPDATE COMPLETED";
  }
}, 1000);
