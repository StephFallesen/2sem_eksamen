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
