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

</body>
</html>
