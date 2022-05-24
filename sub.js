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
