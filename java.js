var player = document.querySelector(".player");
player.style.left = "0px";
player.style.left = "0px";

function loop() {
  if (keyboard(39)) {
    player.style.left = parseInt(player.style.left) + 5 + "px";
  }
  if (keyboard(37)) {
    player.style.left = parseInt(player.style.left) - 5 + "px";
  }
  if (keyboard(40)) {
    player.style.top = parseInt(player.style.top) - 5 + "px";
  }
  if (keyboard(38)) {
    player.style.top = parseInt(player.style.top) + 5 + "px";
  }
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
