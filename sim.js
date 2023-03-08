var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var posX = 40;
  var posY = 350;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (posX == 350) {
      clearInterval(id);
    } else {
      posX++;
      //posY++;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}

const play_btn = document.getElementById("play-btn");
play_btn.addEventListener("click", myMove);