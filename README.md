index. html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Secret Love</title>

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
font-family:Georgia,serif;
background:black;
color:white;
overflow:hidden;
}

.page{
position:absolute;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transition:1s;
}

/* LOCK SCREEN */
#lock{
background:linear-gradient(#000,#200000);
}
input{
padding:12px;
font-size:18px;
border-radius:8px;
border:none;
margin-top:15px;
text-align:center;
}

/* MESSAGE */
#msg{
position:absolute;
font-size:28px;
opacity:0;
transition:2s;
}

/* ENVELOPE */
#envelopePage{display:none}
.envelope{
width:160px;height:110px;
background:#900;border-radius:6px;
position:relative;
animation:pulse 1.5s infinite;
cursor:pointer;
}
.envelope:before{
content:'';
position:absolute;top:-55px;left:0;
border-left:80px solid transparent;
border-right:80px solid transparent;
border-bottom:55px solid #c33;
}
@keyframes pulse{
50%{transform:scale(1.1)}
}

/* LETTER */
#letterPage{
display:none;
background:#120000;
overflow:auto;
padding:20px
}
.letter{
background:#fff0f0;
color:black;
padding:20px;
border-radius:12px;
max-width:600px;
line-height:1.6;
}

/* HEARTS */
.heart{
position:absolute;
color:red;
animation:float 4s linear infinite;
}
@keyframes float{
from{transform:translateY(100vh)}
to{transform:translateY(-10vh)}
}

/* COUNTDOWN */
#countPage{
display:none;
background:radial-gradient(#300000,black);
text-align:center;
}
.count{
font-size:28px;
margin:10px;
}

/* BUTTON */
.btn{
margin-top:20px;
padding:14px 24px;
background:#b30000;
color:white;
border-radius:30px;
text-decoration:none;
box-shadow:0 0 15px red;
font-size:18px;
}
</style>
</head>

<body>

<!-- LOCK SCREEN -->
<div id="lock" class="page">
<h2>🔒 Enter Password</h2>
<input id="pass" placeholder="Password">
</div>

<div id="msg">ammede ponnu araaa 💋💋</div>

<!-- ENVELOPE -->
<div id="envelopePage" class="page">
<div class="envelope" onclick="openLetter()"></div>
<p>Tap to open 💌</p>
</div>

<!-- LETTER -->
<div id="letterPage" class="page">
<div class="letter">
Happy Valentine's Day ponnahhh ❤️💋💋🫂  
<br><br>
eth nee appozha vayika ennu arayilla…  
enthanelum enik ninne bhayankara ishtam a…  
<br><br>
<strong>I LOVE YOU ❤️</strong>
</div>
</div>

<!-- COUNTDOWN + REPLY -->
<div id="countPage" class="page">

<h2>Our Time 💖</h2>

<div class="count" id="timer"></div>

<p>💗 01/03/2025 — She said she loves me</p>
<p>🌸 05/06/2023 — First time saw her in tuition</p>
<p>👶 20/07/2010 — She came into the world</p>

<a class="btn" 
href="https://docs.google.com/forms/d/e/1FAIpQLSc1JncNbHTVKlZooN4NaDi_Ov08J6Q1g-v5PMHlNnZ_mcGp6A/viewform?usp=dialog" 
target="_blank">
Reply to Me 💌
</a>

</div>

<audio id="music" loop>
<source src="https://cdn.pixabay.com/audio/2022/03/15/audio_115b9c9d09.mp3">
</audio>

<script>
let pass=document.getElementById("pass");
let lock=document.getElementById("lock");
let msg=document.getElementById("msg");
let env=document.getElementById("envelopePage");
let letter=document.getElementById("letterPage");
let count=document.getElementById("countPage");
let music=document.getElementById("music");

/* PASSWORD CHECK */
pass.addEventListener("change",()=>{
if(pass.value==="01 03 2025"){
msg.style.opacity=1;
setTimeout(()=>msg.style.opacity=0,2500);
setTimeout(()=>{
lock.style.display="none";
env.style.display="flex";
music.play();
},3500);
}
});

/* OPEN LETTER */
function openLetter(){
env.style.display="none";
letter.style.display="flex";
startHearts();
}

/* HEART ANIMATION */
function startHearts(){
setInterval(()=>{
let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤";
h.style.left=Math.random()*100+"%";
h.style.fontSize=(15+Math.random()*25)+"px";
document.body.appendChild(h);
setTimeout(()=>h.remove(),4000);
},300);
}

/* SWIPE DOWN */
let startY=0;
document.addEventListener("touchstart",e=>startY=e.touches[0].clientY);
document.addEventListener("touchend",e=>{
let endY=e.changedTouches[0].clientY;
if(startY-endY>100 && letter.style.display==="flex"){
letter.style.display="none";
count.style.display="flex";
}
});

/* COUNTDOWN */
let target=new Date("March 1, 2025 00:00:00").getTime();
setInterval(()=>{
let now=new Date().getTime();
let d=target-now;
let days=Math.floor(d/(1000*60*60*24));
let hrs=Math.floor((d%(1000*60*60*24))/(1000*60*60));
let min=Math.floor((d%(1000*60*60))/(1000*60));
let sec=Math.floor((d%(1000*60))/1000);
document.getElementById("timer").innerHTML=
days+" Days "+hrs+" Hrs "+min+" Min "+sec+" Sec";
},1000);
</script>

</body>
</html>
