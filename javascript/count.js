





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
