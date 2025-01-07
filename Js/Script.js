const header = document.getElementById("jumping-header");

function startJumping() {
  header.style.animation = "hop 1s infinite";
}

function stopJumping() {
  header.style.animation = "none";
}

// Start animationen efter 1 sekund
setTimeout(startJumping, 1000);

// Stop animationen efter 5 sekunder (valgfrit)
setTimeout(stopJumping, 5000);
