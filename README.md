index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For You ❤️</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
body{
  background:#000;
  color:#fff;
  height:100vh;
  overflow:hidden;
}

/* Lock Screen */
#lockScreen{
  position:fixed;
  inset:0;
  background:linear-gradient(180deg,#000,#1a001a);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

/* Popup text */
#popup{
  font-size:22px;
  opacity:0;
  animation:popupFade 5s forwards;
  margin-bottom:20px;
}

@keyframes popupFade{
  0%{opacity:0;transform:scale(0.8)}
  20%{opacity:1;transform:scale(1)}
  80%{opacity:1}
  100%{opacity:0}
}

/* Hearts */
.heart{
  position:absolute;
  color:#ff4d6d;
  font-size:16px;
  animation:float 6s linear infinite;
}

@keyframes float{
  from{transform:translateY(100vh);opacity:1}
  to{transform:translateY(-10vh);opacity:0}
}

/* Envelope */
#envelope{
  width:140px;
  height:90px;
  background:#8b0000;
  margin-top:30px;
  position:relative;
  cursor:pointer;
  border-radius:6px;
}
#envelope::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:50%;
  background:#a00000;
  clip-path:polygon(0 0,50% 60%,100% 0);
}

/* Letter Page */
#letterPage{
  position:fixed;
  inset:0;
  background:#0b0010;
  display:none;
  flex-direction:column;
}

#letterContent{
  padding:20px;
  overflow-y:auto;
  flex:1;
  line-height:1.7;
  font-size:16px;
}

#backBtn{
  padding:12px;
  background:#300020;
  text-align:center;
  cursor:pointer;
}

/* Scrollbar */
#letterContent::-webkit-scrollbar{
  width:5px;
}
#letterContent::-webkit-scrollbar-thumb{
  background:#ff4d6d;
}
</style>
</head>

<body>

<!-- MUSIC -->
<audio id="music" loop>
  <source src="https://files.catbox.moe/8y1n6v.mp3" type="audio/mpeg">
</audio>

<!-- LOCK SCREEN -->
<div id="lockScreen">
  <div id="popup">ammede ponnu araaaa 💋</div>
  <div id="envelope"></div>
</div>

<!-- LETTER PAGE -->
<div id="letterPage">
  <div id="letterContent">
eth nee appozha vayika ennu arayillla Appozhayalum vayikulooo ninthe first Valentine's Day annu ennu okke ariyaaa nee annu tution nu varo ennu polum arayilla ethu Azhuthumbo pinne ollathu exam okke alle ath Kazhinja kanan polum pattillalo appo enth cheyyum nee vallathum aloichu vechit indooo vaveee enthe oru idea il korach okkee indu ath Njan parayaneee pinne kali akkanda ketta Njan romantic alla ennu paranju nee enthe eduth ethuuu matte parayana oru dhivasam varum daaaa nokkikooo pinne entha sugalle engane okke nadanna mathiyooo vellapozhum enne kurich okke ortholu tta marannu povaruthu nammal mindandu aya entha indava ponnah enthayalum nammal kanum enganelum okke enthelum mindum athokke orapa pinne ammede ponnu aradaaaa 😘🩷❤️💋🫂

exam kazhinju graduation nu enthavavo kalikan poovanel ninak ath scn avum ennu enik ariyaaaaa bhaki Allavarum adipoli ayit avide erikumbo enthe ponnu matharam blaa blaaa blaaaa enthaleeeee nja. Avide annelum ninthe thanne alledaaaaaa enthokke aleeeeee eni korach serious ayit paraya

Atheeee enik ninne bhayankara ishtam a neee…  
I LOVE YOU ❤️
  </div>
  <div id="backBtn">← Back</div>
</div>

<script>
// Hearts generator
for(let i=0;i<20;i++){
  let h=document.createElement("div");
  h.className="heart";
  h.innerHTML="❤️";
  h.style.left=Math.random()*100+"vw";
  h.style.animationDuration=4+Math.random()*4+"s";
  document.body.appendChild(h);
}

// Envelope click
document.getElementById("envelope").onclick=()=>{
  document.getElementById("lockScreen").style.display="none";
  document.getElementById("letterPage").style.display="flex";
  document.getElementById("music").play();
}

// Back
document.getElementById("backBtn").onclick=()=>{
  document.getElementById("letterPage").style.display="none";
  document.getElementById("lockScreen").style.display="flex";
}
</script>

</body>
</html>

