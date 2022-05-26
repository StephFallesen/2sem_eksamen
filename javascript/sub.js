//menu
function openNav() {
  document.getElementById("subscriptoNav").style.width = "100%";
  document.getElementById("hamburger").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("subscriptoNav").style.width = "0";
  document.getElementById("hamburger").style.marginLeft= "20px";
}

//Overlay
document.getElementById("Overly").addEventListener("click", function(){
 let e =document.getElementsByClassName("modalbox");

        e[0].style.display = 'block';

})	;
document.getElementById("close").addEventListener("click", function(){
   let e =document.getElementsByClassName("modalbox");
 e[0].style.display= 'none';
});

//Dropdown Category
function dropDown() {
  document.getElementById('cte').classList.toggle("show")
}

//ARRAY FORKLARING!
//Et array er en ordered liste af værdier. Disse værdier er elementer.
// Et array starter med at tælle fra 0, 1, 2, 3 mm.
let categoryArray = new Array("Category", "Development", "Design", "Management", "Marketing");

  let dropdown = document.getElementById('cte');


//LOOP FORKLARINNG
//Dette er et for - loop hvilket ses på definition FOR. 
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
