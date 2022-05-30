//menu
function openNav() {
  document.getElementById("subscriptoNav").style.width = "100%";
  document.getElementById("hamburger").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("subscriptoNav").style.width = "0";
  document.getElementById("hamburger").style.marginLeft= "20px";
}


//* text animation
const textEl = document.querySelector('.text-anim');
const textElStr = textEl.innerText;
const textCharArr = textElStr.split('');

textEl.innerText = '';

for (let i=0; i<textCharArr.length; i++){
  textEl.innerHTML += '<span1>' + textCharArr[i] + '</span1>';
}

let count = 0;
let timer = setInterval(startAnimation, 50);

function startAnimation(){
  const span1 = textEl.querySelectorAll('span1')[count];
  span1.classList.add('fade');
  count++;

  if (count === textCharArr.length){
    stopAnimation();
    return;
  }
}

function stopAnimation(){
  clearInterval(timer);
  timer = null;
}
