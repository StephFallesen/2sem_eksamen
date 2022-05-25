//menu
function openNav() {
  document.getElementById("subscriptoNav").style.width = "100%";
  document.getElementById("hamburger").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("subscriptoNav").style.width = "0";
  document.getElementById("hamburger").style.marginLeft= "20px";
}

//Dropdown Category
function dropDown() {
  document.getElementById('cte').classList.toggle("show")
}
let categoryArray = new Array("Category", "Development", "Design", "Management", "Marketing");

  let dropdown = document.getElementById('cte');

  for (let i = 0; i < categoryArray.length; ++i) {
    dropdown[dropdown.length] = new Option(categoryArray[i])
  }

  //Dropdown Payment
  function moneyFunc() {
    document.getElementById('pay').classList.toggle("show")
  }
  let paymentArray = new Array("Paymentplan", "Monthly", "Yearly");

    let money = document.getElementById('pay');

    for (let i = 0; i < paymentArray.length; ++i) {
      money[money.length] = new Option(paymentArray[i])
    }


// Countdown
// Set the date we're counting down to
let countDownDate = new Date("June 31, 2022 12:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " DAYS : " + hours + " HOURS : "
  + minutes + " MINUTES : " + seconds + " SEKUNDS";

  // Kontrolstruktur hvis countdown er nået den ønskede dato:
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "UPDATE COMPLETED";
  }
}, 1000);









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