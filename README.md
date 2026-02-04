index. html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For Meghana ❤️</title>

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family: Georgia, serif;
  background: linear-gradient(135deg,#ffafbd,#ffc3a0);
  color:#fff;
  overflow:hidden;
}

/* PAGES */
.page{
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:absolute;
  top:0;left:0;
  transition:transform .6s ease;
}
.hidden{display:none}

/* LOCK */
input,button{
  padding:12px;
  border-radius:20px;
  border:none;
  margin-top:10px;
  font-size:16px;
}
button{background:#ff6b81;color:#fff}

/* KISS */
#kiss{
  position:fixed;
  inset:0;
  background:linear-gradient(135deg,#ff758c,#ff7eb3);
  display:none;
  justify-content:center;
  align-items:center;
  font-size:60px;
  z-index:10;
  animation:pop 2s ease;
}
@keyframes pop{
  0%{transform:scale(.3);opacity:0}
  50%{transform:scale(1.3);opacity:1}
  100%{transform:scale(1);opacity:1}
}

/* LETTER */
.envelope{font-size:70px;cursor:pointer;animation:bounce 2s infinite}
@keyframes bounce{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-15px)}
}
.letter{
  background:#fff;
  color:#333;
  padding:25px;
  border-radius:20px;
  max-width:90%;
  display:none;
}

/* HEARTS */
.heart{
  position:fixed;
  bottom:-20px;
  color:red;
  font-size:20px;
  animation:float 6s linear infinite;
}
@keyframes float{
  to{transform:translateY(-120vh);opacity:0}
}

/* CHAT */
.msg{
  background:rgba(255,255,255,.2);
  padding:10px 15px;
  border-radius:15px;
  margin:8px;
  max-width:80%;
}
.left{align-self:flex-start}
.right{align-self:flex-end;background:rgba(255,255,255,.35)}
</style>
</head>

<body>

<!-- PAGE 1 : LOCK -->
<div class="page" id="page1">
  <h2>Enter Our Date ❤️</h2>
  <input type="password" id="pass" placeholder="DDMMYYYY">
  <button onclick="unlock()">Unlock</button>
</div>

<!-- KISS -->
<div id="kiss">UMMAAA 💋💋</div>

<!-- PAGE 2 : LETTER -->
<div class="page hidden" id="page2">
  <h2>Touch the letter 💌</h2>
  <div class="envelope" onclick="openLetter()">💌</div>
  <div class="letter" id="letter">
    <h3>My Love ❤️</h3>
    <p>
      Meghana,<br><br>
      Even when you are not near me,  
      my heart knows exactly where you are.  
      01-03-2025 is the day my forever began.<br><br>
      No distance, no silence, no days apart  
      can ever change what I feel for you.
    </p>
    <br>
    <strong>Faithfully yours,<br>shuttumaniii ❤️</strong>
  </div>
  <p style="margin-top:20px">Swipe ⬇️</p>
</div>

<!-- PAGE 3 : DIARY -->
<div class="page hidden" id="page3">
  <h2>📖 My Daily Feelings</h2>

  <!-- COPY THIS BLOCK DAILY -->
  <div class="msg left">
    <strong>01-03-2025</strong><br>
    Today my heart chose you again.
  </div>

  <div class="msg left">
    <strong>Today</strong><br>
    I wish you could feel how much I miss you.
  </div>

  <p>Swipe ➡️</p>
</div>

<!-- PAGE 4 : CHAT -->
<div class="page hidden" id="page4">
  <h2>💬 From My Heart</h2>

  <div class="msg left">I thought of you today.</div>
  <div class="msg left">I smiled without knowing why.</div>

  <!-- HER REPLY SPACE -->
  <div class="msg right">❤️</div>

  <p>Swipe ⬅️ or ⬆️</p>
</div>

<script>
let current=1;
let startX,startY;

function unlock(){
  if(pass.value==="01032025"){
    kiss.style.display="flex";
    setTimeout(()=>{
      kiss.style.display="none";
      show(2);
      hearts();
    },2000);
  }else alert("Wrong password ❤️");
}

function show(n){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById("page"+n).classList.remove("hidden");
  current=n;
}

function openLetter(){
  document.querySelector(".envelope").style.display="none";
  letter.style.display="block";
}

document.addEventListener("touchstart",e=>{
  startX=e.touches[0].clientX;
  startY=e.touches[0].clientY;
});

document.addEventListener("touchend",e=>{
  let dx=e.changedTouches[0].clientX-startX;
  let dy=e.changedTouches[0].clientY-startY;
  if(Math.abs(dx)>50){
    if(dx<0 && current<4) show(current+1);
    if(dx>0 && current>1) show(current-1);
  }
  if(dy< -50 && current<4) show(current+1);
});

function hearts(){
  setInterval(()=>{
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6000);
  },500);
}
</script>

</body>
</html>
