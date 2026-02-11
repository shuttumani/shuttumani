index.html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Our Story</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: black;
  color: white;
  overflow: hidden;
}

/* Every page */
.page {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Active page */
.page.active {
  display: flex;
}

/* Simple button */
button {
  padding: 10px 20px;
  margin-top: 20px;
  background: hotpink;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
}
/* Floating hearts */
.hearts::before,
.hearts::after {
  content: "❤️";
  position: absolute;
  font-size: 20px;
  animation: float 6s linear infinite;
}

.hearts::after {
  left: 70%;
  animation-delay: 3s;
}

@keyframes float {
  0% { top: 100%; opacity: 0; }
  50% { opacity: 1; }
  100% { top: -10%; opacity: 0; }
}
.envelope {
  position: relative;
  width: 220px;
  height: 150px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.body {
  width: 100%;
  height: 100%;
  background: #e75480;
  border-radius: 10px;
  position: absolute;
}

.flap {
  width: 0;
  height: 0;
  border-left: 110px solid transparent;
  border-right: 110px solid transparent;
  border-bottom: 75px solid #ff6fa5;
  position: absolute;
  top: -75px;
  transition: transform 0.8s ease;
  transform-origin: bottom;
}

.envelope.open .flap {
  transform: rotateX(180deg);
}

.tapText {
  position: absolute;
  bottom: -40px;
  font-size: 14px;
  opacity: 0.8;
}
  
</style>
</head>

<body>

<!-- PAGE 1 -->
<div id="envelopePage" class="page" style="background:#111;">

  <div class="envelope" onclick="openEnvelope()">
    <div class="flap"></div>
    <div class="body"></div>
    <p class="tapText">Tap to open 💌</p>
  </div>

</div>


  <h2 id="introText" style="opacity:0; transition:2s; text-align:center;">
    ammede ponnu araaa 💋💋
  </h2>

  <input 
    type="password" 
    id="passwordInput" 
    placeholder="Enter password"
    style="margin-top:20px; padding:10px; border-radius:8px; border:none; text-align:center;"
  >

  <button onclick="checkPassword()">Unlock</button>

</div>


<!-- PAGE 2 -->
<div id="envelopePage" class="page">
  <h1>Envelope Page</h1>
  <button onclick="show('letterPage')">Go to Letter</button>
</div>

<!-- PAGE 3 -->
<div id="letterPage" class="page">
  <h1>Letter Page</h1>
  <button onclick="show('countdownPage')">Go to Countdown</button>
</div>

<!-- PAGE 4 -->
<div id="countdownPage" class="page">
  <h1>Countdown Page</h1>
  <button onclick="show('lockPage')">Back to Start</button>
</div>

<script>
function show(pageId) {
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(page) {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}
// Fade intro text
window.onload = function() {
  setTimeout(function() {
    document.getElementById("introText").style.opacity = 1;
  }, 500);
};

// Check password
function checkPassword() {
  var input = document.getElementById("passwordInput").value;

  if (input === "01 03 2025") {

    var music = document.getElementById("bgMusic");
    music.play();

    show('envelopePage');

  } else {
    alert("Wrong password 💔");
  }
}
  
}
function openEnvelope() {
  var env = document.querySelector(".envelope");
  env.classList.add("open");

  setTimeout(function() {
    show('letterPage');
  }, 800);
}

</script>

</body>
</html>
