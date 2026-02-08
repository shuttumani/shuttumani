index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For Ammede Ponnu ❤️</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family: 'Segoe UI', sans-serif;}
body{
  background:#000;
  color:#fff;
  overflow:hidden;
}

/* COMMON */
.screen{
  position:absolute;
  inset:0;
  display:none;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.active{display:flex;}
button{padding:10px 20px;border:none;border-radius:20px;}

/* HEARTS */
.heart{
  position:absolute;
  color:red;
  font-size:14px;
  animation:float 6s linear infinite;
}
@keyframes float{
  from{transform:translateY(100vh);opacity:1;}
  to{transform:translateY(-10vh);opacity:0;}
}

/* STEP 1 LOCK */
#lock h1{animation:fade 3s infinite;}
@keyframes fade{
  0%,100%{opacity:0}
  50%{opacity:1}
}
input{
  margin-top:20px;
  padding:10px;
  border-radius:10px;
  border:none;
  text-align:center;
}

/* STEP 2 ENVELOPE */
#envelope button{
  background:#c00;
  color:white;
  font-size:18px;
}

/* STEP 3 LETTER */
#letter{
  padding:20px;
  overflow-y:auto;
  align-items:flex-start;
}
#letter p{
  white-space:pre-wrap;
  line-height:1.6;
}
#letter button{
  position:fixed;
  bottom:20px;
  left:20px;
}

/* STEP 4 COUNTDOWN */
#countdown h2{margin-bottom:20px;}
ul{margin-top:20px;}

/* STEP 5 OPTIONS */
.card{
  background:#111;
  padding:20px;
  margin:10px;
  border-radius:15px;
  width:80%;
  text-align:center;
}
</style>
</head>

<body>

<audio id="music" src="music.mp3" loop></audio>

<!-- STEP 1 -->
<div id="lock" class="screen active">
  <h1>ammede ponnu araaa 💋💋</h1>
  <input id="pass" placeholder="Enter Password">
</div>

<!-- STEP 2 -->
<div id="envelope" class="screen">
  <button onclick="openLetter()">💌 Open Letter</button>
</div>

<!-- STEP 3 -->
<div id="letter" class="screen">
<p>
eth nee appozha vayika ennu arayillla Appozhayalum vayikulooo ninthe first Valentine's Day annu ennu okke ariyaaa nee annu tution nu varo ennu polum arayilla ethu Azhuthumbo pinne ollathu exam okke alle ath Kazhinja kanan polum pattillalo appo enth cheyyum nee vallathum aloichu vechit indooo vaveee enthe oru idea il korach okkee indu ath Njan parayaneee pinne kali akkanda ketta Njan romantic alla ennu paranju nee enthe eduth ethuuu matte parayana oru dhivasam varum daaaa nokkikooo pinne entha sugalle engane okke nadanna mathiyooo vellapozhum enne kurich okke ortholu tta marannu povaruthu nammal mindandu aya entha indava ponnah enthayalum nammal kanum enganelum okke enthelum mindum athokke orapa pinne ammede ponnu aradaaaa 😘🩷❤️💋🫂 exam kazhinju graduation nu enthavavo kalikan poovanel ninak ath scn avum ennu enik ariyaaaaa bhaki Allavarum adipoli ayit avide erikumbo enthe ponnu matharam blaa blaaa blaaaa enthaleeeee nja. Avide annelum ninthe thanne alledaaaaaa enthokke aleeeeee eni korach serious ayit paraya 
Atheeee enik ninne bhayankara ishtam a neee yes parayo ennu arayilla ennalum enik entho parayanam ennu thooni neee Chilappo enne angane kandit undavilla ennalum Njan eth eni paranjillel eni annelum eth parayumbo annu paranjel Njan yes paranjene ennu nee Paranja enik veshamam avummm atha eppo parayane enik ninne bhayankara ishtam a "I Love You❤️"
Nee ethinu rply thannolu Chilappo eth kelkumbo nee ennod eni mindi ennu varilla angane onnum venda tta ishtam allel ath Paranja mathi scn ella eppo ishtam annu paranju ennu vech kozhapam ellata nammal pazhayath pole thanne veliya vethasam onnum ella nammal thammil ethra kollam ayit ariyaaa pinne angotum engotum ariyathathu onnum ellanu vekkanu Ninak enne ishtam anno ennu arayilla eni eth parayumbozhano athine kurich aloikane ennu polum arayilla enth okke annelum neee enthe koode indel adipoli avum ennu thooni athokke thanne prethekish onnum ella ethokke thanne appo aloichu okke paranjolu tta eppo ninne ishtapedan Karanam ennu okke choicha nee nalla kochanu mariyathak okke nokkum enthelum okke ninnod Paranja nee avide veenolum veliya scn onnnum ella oru kidilan kocha neee athranne pinne elle enthokke okke vannalum 10 kazhinju pooyalum scn onnum indavalle tta enik ninnod olla ishtam poovilla enik  aennum nee enthe koch thanneya Neeyum poovilla ennu Njan vishwosikunnu sharkareee. Aloichu okke eni paranjolu tta 

Appo veendum paraya  
I LOVE YOU ❤️
</p>
<button onclick="backToEnvelope()">← Back</button>
</div>

<!-- STEP 4 -->
<div id="countdown" class="screen">
  <h2 id="timer"></h2>
  <ul>
    <li>01/03/2025 – She said she loves me ❤️</li>
    <li>05/06/2023 – First time I saw you in tuition</li>
    <li>20/07/2010 – The day you came into this world 🌍</li>
  </ul>
</div>

<!-- STEP 5 -->
<div id="options" class="screen">
  <div class="card">Our Time</div>
  <div class="card">Memories</div>
  <div class="card">One Day</div>
</div>

<script>
/* HEARTS */
setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart";
  h.innerText="❤️";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(10+Math.random()*20)+"px";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
},500);

/* LOCK */
document.getElementById("pass").addEventListener("keyup",e=>{
  if(e.target.value==="01032025"){
    document.getElementById("music").play();
    show("envelope");
  }
});

function openLetter(){show("letter")}
function backToEnvelope(){show("envelope")}

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* SWIPES */
let startY;
document.addEventListener("touchstart",e=>startY=e.touches[0].clientY);
document.addEventListener("touchend",e=>{
  let endY=e.changedTouches[0].clientY;
  if(startY-endY>50) show("options");
  if(endY-startY>50) show("countdown");
});

/* COUNTDOWN */
const target=new Date("2025-03-01");
setInterval(()=>{
  const now=new Date();
  const diff=target-now;
  if(diff>0){
    const d=Math.floor(diff/86400000);
    document.getElementById("timer").innerText=`${d} days to go ❤️`;
  }
},1000);
</script>

</body>
</html>


