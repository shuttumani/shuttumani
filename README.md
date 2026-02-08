index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shuttumani ❤️</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family: 'Georgia', serif;}
body{
  background:black;
  color:white;
  overflow:hidden;
}

.section{
  position:fixed;
  inset:0;
  display:none;
  padding:20px;
}

.section.active{display:block;}

.center{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
  text-align:center;
}

button{
  padding:12px 20px;
  border:none;
  border-radius:20px;
  background:white;
  color:black;
  font-size:16px;
  margin-top:20px;
}

input{
  padding:12px;
  border-radius:10px;
  border:none;
  margin-top:15px;
  font-size:16px;
  text-align:center;
}

.hearts{
  position:absolute;
  inset:0;
  pointer-events:none;
}
.heart{
  position:absolute;
  animation: float 6s linear infinite;
  color:red;
}
@keyframes float{
  from{transform:translateY(100vh);opacity:1}
  to{transform:translateY(-10vh);opacity:0}
}

.scroll{
  overflow-y:auto;
  height:100%;
  padding-bottom:40px;
}

h1,h2{margin-bottom:15px}
p{margin-bottom:12px;line-height:1.6}
.small{opacity:0.8;font-size:14px}
</style>
</head>

<body>

<audio id="music" loop>
  <source src="music.mp3" type="audio/mpeg">
</audio>

<!-- 1 LOCK SCREEN -->
<div class="section active" id="lock">
  <div class="center">
    <h1>🔒 ammede ponnu araaaa 💋</h1>
    <input type="password" id="pass" placeholder="Enter date">
    <button onclick="unlock()">Unlock</button>
    <p class="small">Hint: 01-03-2025</p>
  </div>
</div>

<!-- 2 LETTER -->
<div class="section" id="letter">
  <div class="hearts" id="hearts"></div>
<div class="scroll">
  <h2>💌 For You</h2>

  <p>
eth nee appozha vayika ennu arayillla.  
Appozhayalum vayikulooo.  
ninthe first Valentine's Day annu ennu okke ariyaaa.  
nee annu tution nu varo ennu polum arayilla.  
ethu azhuthumbo pinne ollathu exam okke alle.  
ath kazhinja kanan polum pattillalo.  
appo enth cheyyum nee vallathum aloichu vechit indooo vaveee.
  </p>

  <p>
enthe oru idea il korach okkee indu.  
ath njan parayaneee.  
pinne kali akkanda ketta.  
njan romantic alla ennu paranju nee enthe eduth ethuuu.  
matte parayana oru dhivasam varum daaaa nokkikooo.
  </p>

  <p>
pinne entha sugalle.  
engane okke nadanna mathiyooo.  
vellapozhum enne kurich okke ortholu tta.  
marannu povaruthu.  
nammal mindandu aya entha indava ponnah.
  </p>

  <p>
enthayalum nammal kanum.  
enganelum okke enthelum mindum.  
athokke orapa.  
pinne ammede ponnu aradaaaa 😘🩷❤️💋🫂
  </p>

  <p>
exam kazhinju graduation nu enthavavo kalikan poovanel ninak ath scn avum ennu enik ariyaaaaa.  
bhaki allavarum adipoli ayit avide erikumbo enthe ponnu matharam blaa blaaa blaaaa enthaleeeee nja.
  </p>

  <p>
avide annelum ninthe thanne alledaaaaaa.  
enthokke aleeeeee.  
eni korach serious ayit paraya.
  </p>

  <p>
atheeee enik ninne bhayankara ishtam a neee.  
yes parayo ennu arayilla.  
ennalum enik entho parayanam ennu thooni neee.
  </p>

  <p>
chilappo enne angane kandit undavilla.  
ennalum njan eth eni paranjillel.  
eni annelum eth parayumbo annu paranjel njan yes paranjene ennu nee paranja enik veshamam avummm.
  </p>

  <p>
atha eppo parayane.  
enik ninne bhayankara ishtam a.  
<strong>"I Love You ❤️"</strong>
  </p>

  <p>
nee ethinu rply thannolu.  
chilappo eth kelkumbo nee ennod eni mindi ennu varilla.  
angane onnum venda tta.
  </p>

  <p>
ishtam allel ath paranja mathi.  
scn ella.  
eppo ishtam annu paranju ennu vech kozhapam ellata.
  </p>

  <p>
nammal pazhayath pole thanne.  
veliya vethasam onnum ella.  
nammal thammil ethra kollam ayit ariyaaa.
  </p>

  <p>
pinne angotum engotum ariyathathu onnum ellanu vekkanu.  
ninak enne ishtam anno ennu arayilla.  
eni eth parayumbozhano athine kurich aloikane ennu polum arayilla.
  </p>

  <p>
enth okke annelum neee enthe koode indel adipoli avum ennu thooni.  
athokke thanne.  
prethekish onnum ella.
  </p>

  <p>
ethokke thanne appo aloichu okke paranjolu tta.  
eppo ninne ishtapedan karanam ennu okke choicha.
  </p>

  <p>
nee nalla kochanu.  
mariyathak okke nokkum.  
enthelum okke ninnod paranja nee avide veenolum veliya scn onnnum ella.
  </p>

  <p>
oru kidilan kocha neee athranne.  
pinne elle enthokke okke vannalum.  
10 kazhinju pooyalum scn onnum indavalle tta.
  </p>

  <p>
enik ninnod olla ishtam poovilla.  
enik aennum nee enthe koch thanneya.  
neeyum poovilla ennu njan vishwosikunnu sharkareee.
  </p>
  
  <p>
aloichu okke eni paranjolu tta.
  </p>

  <p style="text-align:center; font-size:20px; margin-top:30px;">
    ❤️ <strong>I LOVE YOU</strong> ❤️
  </p>

</div>


<!-- 3 CONFESSION FEEL -->
<div class="section" id="feel">
  <div class="center">
    <h1>❤️</h1>
    <p>Stay here… feel this… nothing to rush.</p>
  </div>
</div>

<!-- 4 COUNTDOWN -->
<div class="section" id="countdown">
  <div class="center">
    <h2>We committed on</h2>
    <h1>01-03-2025</h1>
    <h2 id="timer"></h2>
    <p>
• 01-03-2025 — The day your words became my courage<br>
• 05-06-2023 — The first time I saw you<br>
• 20-07-2010 — The day the world prepared you
    </p>
  </div>
</div>
<button onclick="show('reply')" style="margin-top:30px;">
  Write me a reply 💗
</button>

<!-- 📝 STEP 6 REPLY FORM -->
<div id="reply" class="page scroll">
  <h2 style="text-align:center;">💌 Your reply</h2>
  <p style="text-align:center;">Write anything you feel. I’ll read it 🤍</p>

  <iframe 
    src="https://docs.google.com/forms/d/e/1FAIpQLSc1JncNbHTVKlZooN4NaDi_Ov08J6Q1g-v5PMHlNnZ_mcGp6A/viewform?embedded=true"
    width="100%" 
    height="800" 
    frameborder="0">
    Loading…
  </iframe>
</div>


<!-- 5 DAILY DIARY -->
<div class="section" id="diary">
  <div class="center">
    <h2>📖 One Message a Day</h2>
    <p class="small">Your space. Calm. Safe.</p>
  </div>
</div>

<!-- 6 OPTIONS HUB -->
<div class="section" id="hub">
  <div class="center">
    <button onclick="show('ourtime')">Our Time</button>
    <button onclick="show('memories')">Memories</button>
    <button onclick="show('oneday')">One Day</button>
  </div>
</div>

<!-- 7 OPTION PAGES -->
<div class="section" id="ourtime">
  <div class="center"><p>Photos & moments will live here.</p></div>
</div>

<div class="section" id="memories">
  <div class="center">
    <p>Tution class… bench… staircase whispers…</p>
  </div>
</div>

<div class="section" id="oneday">
  <div class="center">
    <p>Wedding… future… peaceful togetherness.</p>
  </div>
</div>

<!-- 8 PRIVATE UPLOAD -->
<div class="section" id="upload">
  <div class="center">
    <p>Private photo space (future backend).</p>
  </div>
</div>

<!-- 9 CREATIVE SURPRISE -->
<div class="section" id="surprise">
  <div class="center">
    <p>Something only we understand.</p>
  </div>
</div>

<!-- 10 END -->
<div class="section" id="end">
  <div class="center">
    <h1>I Love You shuttumaniii 💋</h1>
  </div>
</div>

<script>
let order = [
  'letter','feel','countdown','diary','hub',
  'ourtime','memories','oneday','surprise','end'
];
let current = -1;
let startY = null;

function unlock(){
  if(pass.value==="01032025"){
    show(order[0]);
    document.getElementById('music').play();
    hearts();
  }
}

function show(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  current = order.indexOf(id);
}

document.addEventListener('touchstart',e=>startY=e.touches[0].clientY);
document.addEventListener('touchend',e=>{
  let endY=e.changedTouches[0].clientY;
  if(startY-endY>80 && current<order.length-1){
    show(order[current+1]);
  }
});

function hearts(){
  setInterval(()=>{
    let h=document.createElement('div');
    h.className='heart';
    h.innerText='❤️';
    h.style.left=Math.random()*100+'%';
    h.style.fontSize=(12+Math.random()*20)+'px';
    document.getElementById('hearts').appendChild(h);
    setTimeout(()=>h.remove(),6000);
  },500);
}

function countdown(){
  let d=new Date("2025-03-01");
  setInterval(()=>{
    let now=new Date();
    let diff=now-d;
    let days=Math.floor(diff/86400000);
    timer.innerText=days+" days together";
  },1000);
}
countdown();
</script>

</body>
</html>



