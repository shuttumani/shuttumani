# index. html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>For Meghana ❤️</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body {
  margin: 0;
  font-family: 'Georgia', serif;
  background: linear-gradient(135deg, #ffdde1, #ee9ca7);
  color: #4b1c2d;
  text-align: center;
}
.container { padding: 30px; }
.card {
  background: rgba(255,255,255,0.9);
  border-radius: 25px;
  padding: 30px;
  max-width: 650px;
  margin: auto;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}
input {
  padding: 12px;
  width: 80%;
  border-radius: 15px;
  border: 1px solid #ccc;
}
button {
  padding: 12px 30px;
  border-radius: 20px;
  border: none;
  background: #ff4d6d;
  color: white;
  font-size: 16px;
}
#content { display: none; }
 .heart {
  position: fixed;
  bottom: -20px;
  font-size: 20px;
  color: #ff4d6d;
  animation: floatUp 6s linear infinite;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1.5);
    opacity: 0;
  }
}
 
</style>
</head>

<body>
<div class="container">

<div class="card" id="login">
  <h2>🔐 Only for Meghana</h2>
  <p>Enter our special date 💗</p>
  <input type="password" id="password" placeholder="01032025">
  <br><br>
  <button onclick="unlock()">Enter</button>
  <p id="error" style="color:red;"></p>
</div>

<div class="card" id="content">
  <h1>Happy Valentine’s Day Meghana ❤️</h1>
  <p>
    On 01/03/2025, we chose each other.<br>
    This page is my promise of love.
  </p>

  <audio id="music" loop>
    <source src="music.mp3" type="audio/mpeg">
  </audio>
<div onclick="openLetter()" style="
  margin: 30px auto;
  font-size: 40px;
  cursor: pointer;
">
💌
<p style="font-size:16px;">Tap the letter</p>
</div>

<div id="letter" style="
  display:none;
  background:#fff0f3;
  padding:25px;
  border-radius:20px;
  max-width:600px;
  margin:auto;
  box-shadow:0 10px 25px rgba(0,0,0,0.2);
  animation: fadeIn 1s;
">
  <h2>My Love ❤️</h2>
  <p>
    <!-- ✍️ YOUR LOVE TEXT GOES HERE -->
    Meghana,<br><br>
    From the moment you came into my life,
    everything felt warmer, calmer, and more meaningful.
    I don’t promise perfection —
    but I promise love, honesty, and forever choosing you.
    <br><br>
    Happy Valentine’s Day, my heart.
  </p>
</div>

  <p>Forever yours,<br><b>— shuttumaniii ❤️</b></p>
</div>

</div>

<script>
function unlock() {
  if (document.getElementById("password").value === "01032025") {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("music").play();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}
</script>
<audio id="loveSong" loop>
  <source src="music.mp3" type="audio/mpeg">
</audio>

<button onclick="playMusic()" style="
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 18px;
  background: #ff4d6d;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 14px;
">
🎶 Play Music
</button>

<script>
function playMusic() {
  document.getElementById("loveSong").play();
}
</script>
<script>
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 800);
</script>
<style>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>

<script>
function openLetter() {
  document.getElementById("letter").style.display = "block";
}
</script>

</body>
</html>
