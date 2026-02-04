index. html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>The Bench We Shared ❤️</title>

<style>
*{margin:0;padding:0;box-sizing:border-box}

body{
  font-family: 'Georgia', serif;
  background: radial-gradient(circle at top,#ffd6e8,#ff9aa2);
  color:#fff;
  overflow:hidden;
}

/* ===== WORLDS ===== */
.world{
  position:fixed;
  inset:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:20px;
  text-align:center;
  transition:transform .8s ease;
  will-change: transform;
}

/* ===== LOCK ===== */
#lock input,#lock button{
  padding:12px 18px;
  border-radius:25px;
  border:none;
  margin-top:12px;
  font-size:16px;
}
#lock button{
  background:#ff5f7e;
  color:#fff;
}

/* ===== KISS ===== */
#kiss{
  position:fixed;
  inset:0;
  background:linear-gradient(135deg,#ff7eb3,#ff758c);
  display:none;
  justify-content:center;
  align-items:center;
  font-size:64px;
  z-index:10;
  animation:kissPop 2s ease;
}
@keyframes kissPop{
  0%{transform:scale(.3);opacity:0}
  50%{transform:scale(1.4);opacity:1}
  100%{transform:scale(1);opacity:1}
}

/* ===== BENCH ===== */
.bench{
  width:260px;
  height:80px;
  background:#6d4c41;
  border-radius:10px;
  position:relative;
  margin:20px 0;
}
.bench:before,.bench:after{
  content:'';
  position:absolute;
  width:12px;
  height:60px;
  background:#5d4037;
  bottom:-60px;
}
.bench:before{left:40px}
.bench:after{right:40px}

/* ===== TEXT ===== */
.soft{
  max-width:85%;
  line-height:1.6;
  opacity:.95;
}
.hint{
  margin-top:30px;
  font-size:14px;
  opacity:.8;
}

/* ===== HEARTS ===== */
.heart{
  position:fixed;
  bottom:-20px;
  font-size:18px;
  animation:float 7s linear infinite;
}
@keyframes float{
  to{transform:translateY(-120vh);opacity:0}
}
</style>
</head>

<body>

<!-- LOCK -->
<div class="world" id="lock" style="transform:translateX(0)">
  <h2>Enter our date ❤️</h2>
  <input type="password" id="pass" placeholder="DDMMYYYY">
  <button onclick="unlock()">Unlock</button>
</div>

<!-- KISS -->
<div id="kiss">UMMAAA 💋💋</div>

<!-- BENCH -->
<div class="world" id="bench" style="transform:translateX(100vw)">
  <h2>The bench we shared</h2>
  <div class="bench"></div>
  <p class="soft">
    In a room full of people,<br>
    we found a quiet place<br>
    just by sitting together.
  </p>
  <p class="hint">Swipe ➡️ or ⬇️</p>
</div>

<!-- LETTER -->
<div class="world" id="letter" style="transform:translateY(100vh)">
  <h2>Unsaid things 💌</h2>
  <p class="soft">
    Some words were never spoken.<br>
    They waited here.
  </p>
  <p class="hint">Swipe ➡️ to go back</p>
</div>

<!-- DIARY -->
<div class="world" id="diary" style="transform:translateX(-100vw)">
  <h2>Daily feelings 📖</h2>
  <p class="soft">
    This is where days will be written.<br>
    Slowly. Honestly.
  </p>
  <p class="hint">Swipe ➡️ to return</p>
</div>

<script>
let current="lock";
let startX,startY;

function unlock(){
  if(pass.value==="01032025"){
    kiss.style.display="flex";
    setTimeout(()=>{
      kiss.style.display="none";
      show("bench");
      hearts();
    },2000);
  } else {
    alert("Wrong password ❤️");
  }
}

function show(page){
  lock.style.transform   = page==="lock"  ? "translateX(0)" : "translateX(-100vw)";
  bench.style.transform  = page==="bench" ? "translateX(0)" : "translateX(100vw)";
  letter.style.transform = page==="letter"? "translateY(0)" : "translateY(100vh)";
  diary.style.transform  = page==="diary" ? "translateX(0)" : "translateX(-100vw)";
  current = page;
}

document.addEventListener("touchstart",e=>{
  startX=e.touches[0].clientX;
  startY=e.touches[0].clientY;
});

document.addEventListener("touchend",e=>{
  let dx=e.changedTouches[0].clientX-startX;
  let dy=e.changedTouches[0].clientY-startY;

  if(current==="bench"){
    if(dx<-60) show("diary");
    if(dy<-60) show("letter");
  } else if(dx>60){
    show("bench");
  }
});

function hearts(){
  setInterval(()=>{
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),7000);
  },600);
}
</script>

</body>
</html>
