const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

const loadImg = document.getElementById('loadImg');
const bubble =  document.querySelector('#bubble_sfx');

const plankton = document.getElementById('plankton');
const planktonCloseUp = document.getElementById('closeUpPlankton');

bubble.volume = 0.3;

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

loadImg.onclick = function() {
  loadImg.style.zIndex = "-200";
  document.querySelector('#bgm').play();
}

plankton.onmouseover = function() {
  planktonCloseUp.style.opacity = 1;
}

plankton.onmouseleave = function() {
  planktonCloseUp.style.opacity = 0;
}

document.querySelectorAll('.creature').forEach((i) => i.addEventListener('mouseover', () => bubble.play()));