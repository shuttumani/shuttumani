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

/* ===== PAGES ===== */
.world{
  position:absolute;
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  transition:transform .8s ease, opacity .8s ease;
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

/* ===== BENCH WORLD ===== */
.bench{
  width:260px;
  height:80px;
  background:#6d4c41;
  border-radius:10px;
  position:relative;
  margin-top:20px;
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

/* ===== MAGIC HEARTS ===== */
.heart{
  position:fixed;
  bottom:-20px;
  font-size:18px;
  animation:float 7s linear infinite;
}
@keyframes float{
  to{transform:translateY(-120vh);opacity:0}
}

/* ===== TEXT STYLE ===== */
.soft{
  text-align:center;
  max-width:85%;
  line-height:1.6;
  opacity:.95;
}
.hint{
  margin-top:30px;
  font-size:14px;
  opacity:.8;
}
</style>
</head>

<body>

<!-- ===== LOCK WORLD ===== -->
<div class="world" id="lock">
  <h2>Enter our date ❤️</h2>
  <input type="password" id="pass" placeholder="DDMMYYYY">
  <button onclick="unlock()">Unlock</button>
</div>

<!-- ===== KISS ===== -->
<div id="kiss">UMMAAA 💋💋</div>

<!-- ===== BENCH WORLD ===== -->
<div class="world" id="bench" style="transform:translateX(100vw)">
  <h2>The bench we shared</h2>
  <div class="bench"></div>
  <p class="soft" style="margin-top:25px">
    In a room full of people,<br>
    we found a quiet place<br>
    just by sitting together.
  </p>
  <p class="hint">Swipe ➡️ or ⬇️</p>
</div>

<!-- ===== LETTER WORLD (PLACEHOLDER) ===== -->
<div class="world" id="letter" style="transform:translateY(100vh)">
  <h2>Unsaid things 💌</h2>
  <p class="soft">
    Some words were never spoken in class.<br>
    They waited here.
  </p>
  <p class="hint">More magic coming…</p>
</div>

<!-- ===== DIARY WORLD (PLACEHOLDER) ===== -->
<div class="world" id="diary" style="transform:translateX(-100vw)">
  <h2>Daily feelings 📖</h2>
  <p class="soft">
    This is where days will be written.<br>
    Slowly. Honestly.
  </p>
  <p class="hint">This will grow every day</p>
</div>

<script>
let current="lock";
let startX,startY;

function unlock(){
  if(pass.value==="01032025"){
    kiss.style.display="flex";
    setTimeout(()=>{
      kiss.style.display="none";
      move("bench");
      hearts();
    },2000);
  }else alert("Wrong password ❤️");
}

function move(target){
  const pos={
    lock:{x:0,y:0},
    bench:{x:0,y:0},
    letter:{x:0,y:100},
    diary:{x:-100,y:0}
  };
  document.querySelectorAll(".world").forEach(w=>{
    w.style.transform=`translate(${pos[target]?.x||100}vw,${pos[target]?.y||0}vh)`;
  });
  current=target;
}

document.addEventListener("touchstart",e=>{
  startX=e.touches[0].clientX;
  startY=e.touches[0].clientY;
});

document.addEventListener("touchend",e=>{
  let dx=e.changedTouches[0].clientX-startX;
  let dy=e.changedTouches[0].clientY-startY;

  if(current==="bench"){
    if(dx<-60) move("diary");
    if(dy<-60) move("letter");
  }
  if(current!=="bench" && dx>60) move("bench");
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
