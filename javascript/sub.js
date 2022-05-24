
document.getElementById("Overly").addEventListener("click", function(){
 var e =document.getElementsByClassName("modalbox");

        e[0].style.display = 'block';

})	;
document.getElementById("close").addEventListener("click", function(){
   var e =document.getElementsByClassName("modalbox");
 e[0].style.display= 'none';
});
