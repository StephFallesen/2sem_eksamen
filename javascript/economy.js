let x = document.getElementById("monthly");
let y = document.getElementById("yearly");
let btn = document.getElementById("btn");

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

function myFunction() {
	let price = document.getElementById("input-total").value;
    let price1 = document.getElementById("input-total1").value;
    let price2 = document.getElementById("input-total2").value;
    let price3 = document.getElementById("input-total3").value;
    let price4 = document.getElementById("input-total4").value;
    let price5 = document.getElementById("input-total5").value;
    let price6 = document.getElementById("input-total6").value;
    let price7 = document.getElementById("input-total7").value;
	let total = +price + +price1 + +price2 + +price3 + +price4 + +price5 + +price6 + +price7;
	document.getElementById("total-price").innerHTML = total;
}