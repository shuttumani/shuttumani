index. html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Our Quiet Timeline</title>

<style>
*{margin:0;padding:0;box-sizing:border-box}

body{
  font-family: 'Georgia', serif;
  background: linear-gradient(to bottom,#fdecef,#f8cdda);
  color:#fff;
  overflow:hidden;
}

.section{
  position:fixed;
  inset:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:24px;
  transition:transform .9s ease;
}

h1,h2{
  font-weight:normal;
  margin-bottom:14px;
}

p{
  max-width:420px;
  line-height:1.7;
  opacity:.95;
}

.hint{
  margin-top:32px;
  font-size:13px;
  opacity:.7;
}

/* INPUT */
input,button{
  padding:12px 18px;
  border-radius:22px;
  border:none;
  margin-top:12px;
  font-size:16px;
}
button{
  background:#ff6f91;
  color:#fff;
}

/* HEARTS */
.heart{
  position:fixed;
  bottom:-20px;
  font-size:16px;
  animation:float 8s linear infinite;
}
@keyframes float{
  to{transform:translateY(-120vh);opacity:0}
}

/* GREEN ENDING */
#end{
  background:linear-gradient(to bottom,#c8e6c9,#81c784);
  color:#1b5e20;
}
</style>
</head>

<body>

<!-- LOCK -->
<div class="section" id="lock" style="transform:translateX(0)">
  <h2>Enter the day it began</h2>
  <input id="pass" type="password" placeholder="DDMMYYYY">
  <button onclick="unlock()">Enter</button>
</div>

<!-- MOMENT -->
<div class="section" id="moment" style="transform:translateX(100vw)">
  <h1>A Quiet Moment</h1>
  <p>
    In the middle of noise,<br>
    something calm appeared.<br><br>
    No announcements.<br>
    No witnesses.<br>
    Just presence.
  </p>
  <div class="hint">Swipe ➡️</div>
</div>

<!-- LETTER -->
<div class="section" id="letter" style="transform:translateY(100vh)">
  <h1>Unsent Words</h1>
  <p>
    Not everything was said.<br>
    Not everything had to be.<br><br>
    Some words live better<br>
    when they are saved.
  </p>
  <div class="hint">Swipe ⬇️</div>
</div>

<!-- FUTURE -->
<div class="section" id="future" style="transform:translateX(-100vw)">
  <h1>What This Becomes</h1>
  <p>
    This is not a memory box.<br>
    This is a growing place.<br><br>
    Days will be added.<br>
    Photos will arrive.<br>
    Time will write the rest.
  </p>
  <div class="hint">Swipe ➡️</div>
</div>

<!-- END -->
<div class="section" id="end" style="transform:translateY(100vh)">
  <h1>This Doesn’t End</h1>
  <p>
    Some things are not finished.<br>
    They simply continue,<br>
    quietly.
  </p>
</div>

<script>
let current="lock",startX,startY;

function unlock(){
  if(pass.value==="01032025"){
    show("moment");
    hearts();
  } else alert("Try again ❤️");
}

function show(id){
  lock.style.transform   = id==="lock"   ? "translateX(0)" : "translateX(-100vw)";
  moment.style.transform= id==="moment" ? "translateX(0)" : "translateX(100vw)";
  letter.style.transform= id==="letter" ? "translateY(0)" : "translateY(100vh)";
  future.style.transform= id==="future" ? "translateX(0)" : "translateX(-100vw)";
  end.style.transform   = id==="end"    ? "translateY(0)" : "translateY(100vh)";
  current=id;
}

document.addEventListener("touchstart",e=>{
  startX=e.touches[0].clientX;
  startY=e.touches[0].clientY;
});

document.addEventListener("touchend",e=>{
  let dx=e.changedTouches[0].clientX-startX;
  let dy=e.changedTouches[0].clientY-startY;

  if(current==="moment" && dx<-60) show("future");
  if(current==="moment" && dy<-60) show("letter");
  if(current==="future" && dx>60) show("end");
  if(current!=="lock" && dx>60 && current!=="end") show("moment");
});

function hearts(){
  setInterval(()=>{
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="💚";
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),8000);
  },700);
}
</script>

</body>
</html>
