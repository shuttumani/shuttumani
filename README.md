index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>❤️</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Georgia,serif}
body{background:black;color:white;height:100vh;overflow:hidden}

/* LOCK SCREEN */
#lock{
  position:fixed;
  inset:0;
  background:black;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  z-index:10;
}
#lock h2{margin-bottom:15px}
#lock input{
  padding:10px;
  font-size:18px;
  border-radius:6px;
  border:none;
  text-align:center;
}
#lock button{
  margin-top:15px;
  padding:10px 30px;
  background:#ff4d6d;
  color:white;
  border:none;
  border-radius:6px;
  font-size:16px;
}

/* MAIN */
#main{
  display:none;
  position:fixed;
  inset:0;
  background:linear-gradient(#000,#1a001a);
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

/* POPUP */
#popup{
  font-size:22px;
  margin-bottom:25px;
  animation:fade 4s forwards;
}
@keyframes fade{
  0%{opacity:0}
  20%{opacity:1}
  80%{opacity:1}
  100%{opacity:0}
}

/* ENVELOPE */
#envelope{
  width:150px;
  height:100px;
  background:#8b0000;
  border-radius:8px;
  position:relative;
}
#envelope::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:55%;
  background:#a00000;
  clip-path:polygon(0 0,50% 65%,100% 0);
}

/* HEARTS */
.heart{
  position:fixed;
  bottom:-20px;
  animation:float 6s linear infinite;
}
@keyframes float{
  from{transform:translateY(0);opacity:1}
  to{transform:translateY(-110vh);opacity:0}
}

/* LETTER */
#letter{
  display:none;
  position:fixed;
  inset:0;
  background:#0b0010;
  flex-direction:column;
}
#content{
  flex:1;
  padding:20px;
  overflow-y:auto;
  line-height:1.9;
  -webkit-overflow-scrolling:touch;
}
#back{
  padding:15px;
  text-align:center;
  background:#300020;
}
  #backBtn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 10px 16px;
  background: rgba(255, 0, 100, 0.8);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  z-index: 9999;
  }
  #countdownPage {
  padding: 20px;
  background: linear-gradient(#000, #12000a);
  overflow-y: auto;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.timer {
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
}

.memories {
  line-height: 1.8;
  font-size: 15px;
}

.memory {
  margin: 20px 0;
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

.memory:nth-child(2){animation-delay:.4s}
.memory:nth-child(3){animation-delay:.8s}
.memory:nth-child(4){animation-delay:1.2s}

@keyframes fadeIn {
  to { opacity: 1; }
}

.ending {
  margin-top: 30px;
  text-align: center;
  font-style: italic;
}
  
</style>
</head>

<body>

<!-- LOCK -->
<div id="lock">
  <h2>Enter Password</h2>
  <input id="pass" placeholder="DDMMYYYY">
  <button onclick="unlock()">Unlock</button>
</div>

<!-- MAIN -->
<div id="main">
  <div id="popup">ammede ponnu araaaa 💋</div>
  <div id="envelope" onclick="openLetter()"></div>
</div>

<!-- LETTER -->
<div id="letter">
<div id="content">
<p>eth nee appozha vayika ennu arayillla Appozhayalum vayikulooo ninthe first Valentine's Day annu ennu okke ariyaaa nee annu tution nu varo ennu polum arayilla ethu Azhuthumbo pinne ollathu exam okke alle ath Kazhinja kanan polum pattillalo appo enth cheyyum nee vallathum aloichu vechit indooo vaveee enthe oru idea il korach okkee indu ath Njan parayaneee pinne kali akkanda ketta Njan romantic alla ennu paranju nee enthe eduth ethuuu matte parayana oru dhivasam varum daaaa nokkikooo pinne entha sugalle engane okke nadanna mathiyooo vellapozhum enne kurich okke ortholu tta marannu povaruthu nammal mindandu aya entha indava ponnah enthayalum nammal kanum enganelum okke enthelum mindum athokke orapa pinne ammede ponnu aradaaaa 😘🩷❤️💋🫂
</p>
<p>exam kazhinju graduation nu enthavavo kalikan poovanel ninak ath scn avum ennu enik ariyaaaaa bhaki Allavarum adipoli ayit avide erikumbo enthe ponnu matharam blaa blaaa blaaaa enthaleeeee nja. Avide annelum ninthe thanne alledaaaaaa enthokke aleeeeee eni korach serious ayit paraya</p>
<p>Atheeee enik ninne bhayankara ishtam a neee yes parayo ennu arayilla ennalum enik entho parayanam ennu thooni neee Chilappo enne angane kandit undavilla ennalum Njan eth eni paranjillel eni annelum eth parayumbo annu paranjel Njan yes paranjene ennu nee Paranja enik veshamam avummm atha eppo parayane enik ninne bhayankara ishtam a "I Love You❤️"
</p>
<p>Nee ethinu rply thannolu Chilappo eth kelkumbo nee ennod eni mindi ennu varilla angane onnum venda tta ishtam allel ath Paranja mathi scn ella eppo ishtam annu paranju ennu vech kozhapam ellata nammal pazhayath pole thanne veliya vethasam onnum ella nammal thammil ethra kollam ayit ariyaaa pinne angotum engotum ariyathathu onnum ellanu vekkanu
</p>
<p>Ninak enne ishtam anno ennu arayilla eni eth parayumbozhano athine kurich aloikane ennu polum arayilla enth okke annelum neee enthe koode indel adipoli avum ennu thooni athokke thanne prethekish onnum ella</p>

<p>ethokke thanne appo aloichu okke paranjolu tta eppo ninne ishtapedan Karanam ennu okke choicha nee nalla kochanu mariyathak okke nokkum enthelum okke ninnod Paranja nee avide veenolum veliya scn onnnum ella oru kidilan kocha neee</p>
<p>athranne pinne elle enthokke okke vannalum 10 kazhinju pooyalum scn onnum indavalle tta enik ninnod olla ishtam poovilla enik aennum nee enthe koch thanneya Neeyum poovilla ennu Njan vishwosikunnu sharkareee. Aloichu okke eni paranjolu tta</p>

<p style="text-align:center;font-size:24px;margin-top:30px;">
<strong>Appo veendum paraya I LOVE YOU ❤️</strong>
</p>
<button id="backBtn" onclick="goBack()">← Back</button>

</div>
<!-- STEP 2 : COUNTDOWN PAGE -->
<div id="countdownPage" class="page" style="display:none;">
  <h2 class="title">❤️ Our Little Forever Moments ❤️</h2>

  <div id="timer" class="timer"></div>

  <div class="memories">
    <p>Time keeps moving… but some moments stay 🤍</p>
    
</div>
<!-- STEP 2 : COUNTDOWN PAGE -->
<div id="countdownPage" class="page" style="display:none;">
  <h2 class="title">❤️ Our Little Forever Moments ❤️</h2>

  <div id="timer" class="timer"></div>

  <div class="memories">
    <p>Time keeps moving… but some moments stay 🤍</p>
  </div>
    <div class="memory">
      ✨ <b>01 • 03 • 2025</b><br>
      The day my heart finally heard what it was waiting for ❤️
    </div>

    <div class="memory">
      ✨ <b>05 • 06 • 2023</b><br>
      A normal tuition day that quietly changed everything
    </div>

    <div class="memory">
      ✨ <b>20 • 07 • 2010</b><br>
      The day the world became more beautiful 🌸
    </div>

    <p class="ending">
      Every second above is not just time passing…<br>
      it’s us, moving forward, together 🫂❤️
    </p>
  </div>
</div>


<script>
function unlock(){
  if(document.getElementById("pass").value==="01032025"){
    document.getElementById("lock").style.display="none";
    document.getElementById("main").style.display="flex";
    hearts();
  }
}

function hearts(){
  for(let i=0;i<15;i++){
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(12+Math.random()*16)+"px";
    document.body.appendChild(h);
  }
}

function openLetter(){
  document.getElementById("main").style.display="none";
  document.getElementById("letter").style.display="flex";
}

function goBack(){
  document.getElementById("letter").style.display="none";
  document.getElementById("main").style.display="flex";
}
  function goBack() {
  document.getElementById("letterPage").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
  }
  function updateCountdown() {
  const startDate = new Date("2025-03-01T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor(diff / (1000*60*60)) % 24;
  const minutes = Math.floor(diff / (1000*60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById("timer").innerHTML =
    `⏳ Together for<br>
     <b>${days}</b> days
     <b>${hours}</b> hours
     <b>${minutes}</b> minutes
     <b>${seconds}</b> seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
  let startY = 0;

document.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
  if (startY - e.changedTouches[0].clientY > 80) {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("countdownPage").style.display = "block";
  }
});
  
</script>

</body>
</html>

