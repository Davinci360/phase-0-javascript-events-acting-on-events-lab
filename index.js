// Your code here
const dodger = document.getElementById("dodger"); 

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
}) // <== whats up with those "})" They only go with document?
document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowRight") 
    moveDodgerRight();
  })


function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
} 

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { 
    dodger.style.left = `${left + 1}px`;
  }
}