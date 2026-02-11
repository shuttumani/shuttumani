index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Shuttumani</title>

<style>
  body{
    margin:0;
    background:#000;
    color:#fff;
    font-family:Arial, sans-serif;
    overflow:hidden;
    text-align:center;
  }

  /* Pages */
  .page{
    position:fixed;
    inset:0;
    display:none;
    padding:20px;
    box-sizing:border-box;
  }
  .page.active{ display:block; }

  .center{
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:12px;
  }

  input{
    padding:14px;
    font-size:18px;
    border-radius:10px;
    border:none;
    text-align:center;
    width:min(320px, 85vw);
  }

  button{
    padding:14px 22px;
    font-size:18px;
    border:none;
    border-radius:12px;
    background:#ff4da6;
    color:#fff;
    cursor:pointer;
  }
  .btnDark{ background:#222; }

  /* Scroll pages */
  .scrollPage{
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
  }

  .card{
    max-width:720px;
    margin:0 auto;
    text-align:left;
    line-height:1.7;
    font-size:17px;
    background:#0f0f0f;
    border-radius:14px;
    padding:18px;
  }

  .title{
    margin:10px 0 14px;
    text-align:center;
  }

  .countBox{
    max-width:720px;
    margin:18px auto 0;
    text-align:left;
    line-height:1.9;
    font-size:15px;
    background:#0f0f0f;
    border-radius:14px;
    padding:16px;
  }

  .timer{
    font-size:18px;
    margin:10px 0 0;
    opacity:.95;
  }

  /* Floating hearts */
  .heart{
    position:fixed;
    bottom:-10px;
    font-size:20px;
    animation: floatUp 5s linear infinite;
    opacity:0.7;
    pointer-events:none;
    z-index:1;
  }
  @keyframes floatUp{
    0%{transform:translateY(0);}
    100%{transform:translateY(-110vh);}
  }

  /* Envelope */
  .newEnvelope{
    position:relative;
    width:260px;
    height:170px;
    cursor:pointer;
    margin-top:10px;
  }
  .newEnvelope .body{
    position:absolute;
    inset:0;
    background:#d6336c;
    border-radius:12px;
    box-shadow:0 10px 30px rgba(0,0,0,0.4);
    z-index:2;
  }
  .newEnvelope .topFlap{
    position:absolute;
    top:0;
    left:0;
    width:0;
    height:0;
    border-left:130px solid transparent;
    border-right:130px solid transparent;
    border-top:85px solid #ff6b9e;
    transform-origin:top;
    transition:transform 0.8s ease;
    z-index:4;
  }
  .newEnvelope .paper{
    position:absolute;
    top:20px;
    left:10px;
    right:10px;
    bottom:10px;
    background:#fff0f6;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:28px;
    color:#d6336c;
    transform:translateY(40px);
    transition:transform 0.8s ease;
    z-index:3;
  }
  .newEnvelope.open .topFlap{ transform:rotateX(180deg); }
  .newEnvelope.open .paper{ transform:translateY(-20px); }
  /* ===== Tuition Animation ===== */
.tuitionScene{
  position:relative;
  height:200px;
  border-radius:16px;
  background:linear-gradient(180deg, rgba(255,77,136,.10), rgba(255,255,255,.03));
  border:1px solid rgba(255,77,136,.18);
  overflow:hidden;
}
.board{
  position:absolute;
  top:14px; left:14px; right:14px;
  height:46px;
  border-radius:12px;
  background:rgba(0,0,0,.35);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  letter-spacing:.5px;
  opacity:.9;
}
.desk{
  position:absolute;
  left:20px; right:20px;
  bottom:48px;
  height:18px;
  border-radius:12px;
  background:rgba(255,255,255,.10);
}
.me,.her{
  position:absolute;
  bottom:56px;
  width:54px;
  height:90px;
}
.me{ left:32%; animation: lean 2.2s ease-in-out infinite; }
.her{ left:56%; animation: lean 2.2s ease-in-out infinite reverse; }

.me .head, .her .head{
  width:26px; height:26px;
  border-radius:50%;
  background:rgba(255,255,255,.85);
  margin:0 auto;
}
.me .body, .her .body{
  width:34px; height:48px;
  border-radius:16px;
  background:rgba(255,77,136,.55);
  margin:8px auto 0;
}

.heartPop{
  position:absolute;
  left:50%;
  bottom:78px;
  transform:translateX(-50%);
  font-size:18px;
  opacity:0;
  animation: pop 2.2s ease-in-out infinite;
}

@keyframes pop{
  0%,40%{ opacity:0; transform:translateX(-50%) translateY(10px) scale(.8); }
  60%{ opacity:1; transform:translateX(-50%) translateY(-8px) scale(1); }
  100%{ opacity:0; transform:translateX(-50%) translateY(-16px) scale(1.1); }
}
@keyframes lean{
  0%,100%{ transform:translateY(0) rotate(0deg); }
  50%{ transform:translateY(-2px) rotate(2deg); }
                                }
  /* ===== Future Animation ===== */
.futureScene{
  position:relative;
  height:220px;
  border-radius:16px;
  background:linear-gradient(180deg, rgba(255,77,136,.12), rgba(255,255,255,.03));
  border:1px solid rgba(255,77,136,.18);
  overflow:hidden;
  text-align:center;
}
.ringPulse{
  position:absolute;
  top:16px; left:50%;
  transform:translateX(-50%);
  font-size:28px;
  animation:ring 1.6s ease-in-out infinite;
}
@keyframes ring{
  0%,100%{ transform:translateX(-50%) scale(1); filter:drop-shadow(0 0 0 rgba(255,77,136,0)); }
  50%{ transform:translateX(-50%) scale(1.12); filter:drop-shadow(0 0 14px rgba(255,77,136,.55)); }
}

.couple{
  position:absolute;
  bottom:68px;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  gap:14px;
  align-items:flex-end;
  animation: cuddle 2.4s ease-in-out infinite;
}
@keyframes cuddle{
  0%,100%{ transform:translateX(-50%) translateY(0); }
  50%{ transform:translateX(-50%) translateY(-3px); }
}
.cHead{
  width:22px;height:22px;border-radius:50%;
  background:rgba(255,255,255,.85);
}
.cBody{
  width:30px;height:42px;border-radius:16px;
  background:rgba(255,77,136,.55);
  margin-top:6px;
}

.kids{
  position:absolute;
  bottom:46px;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  gap:14px;
  opacity:.95;
}
.kid{
  font-size:20px;
  animation:kidJump 1.8s ease-in-out infinite;
}
.kid:nth-child(2){ animation-delay:.35s; }
@keyframes kidJump{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-8px); }
}

.home{
  position:absolute;
  bottom:10px;
  left:50%;
  transform:translateX(-50%);
  font-size:22px;
  opacity:.9;
}

.futureScene .txt{
  position:absolute;
  top:62px;
  left:50%;
  transform:translateX(-50%);
  opacity:.85;
  font-size:14px;
}
</style>
</head>

<body>

<audio id="bgMusic" loop>
  <source src="music.mp3" type="audio/mpeg" />
</audio>

<!-- LOCK PAGE -->
<div id="lockPage" class="page active">
  <div class="center">
    <h1>shuttumani 💋</h1>
    <input type="password" id="passwordInput" placeholder="Enter date">
    <button onclick="checkPassword()">Unlock</button>
  </div>
</div>

<!-- ENVELOPE PAGE -->
<div id="envelopePage" class="page">
  <div class="center">
    <h2 style="margin-bottom:10px;">Love Letter 💌</h2>

    <div class="newEnvelope" onclick="openLetter()">
      <div class="topFlap"></div>
      <div class="body"></div>
      <div class="paper">💖</div>
    </div>

    <p style="opacity:0.8;">Tap the envelope to open 💌</p>
  </div>
</div>

<!-- LETTER PAGE -->
<div id="letterPage" class="page scrollPage">
  <h2 class="title">For You ❤️</h2>

  <div class="card">
    eth nee appozha vayika ennu arayillla Appozhayalum vayikulooo ninthe first Valentine's Day annu ennu okke ariyaaa nee annu tution nu varo ennu polum arayilla ethu Azhuthumbo pinne ollathu exam okke alle ath Kazhinja kanan polum pattillalo appo enth cheyyum nee vallathum aloichu vechit indooo vaveee enthe oru idea il korach okkee indu ath Njan parayaneee pinne kali akkanda ketta Njan romantic alla ennu paranju nee enthe eduth ethuuu matte parayana oru dhivasam varum daaaa nokkikooo pinne entha sugalle engane okke nadanna mathiyooo vellapozhum enne kurich okke ortholu tta marannu povaruthu nammal mindandu aya entha indava ponnah enthayalum nammal kanum enganelum okke enthelum mindum athokke orapa pinne ammede ponnu aradaaaa 😘🩷❤️💋🫂 exam kazhinju graduation nu enthavavo kalikan poovanel ninak ath scn avum ennu enik ariyaaaaa bhaki Allavarum adipoli ayit avide erikumbo enthe ponnu matharam blaa blaaa blaaaa enthaleeeee nja. Avide annelum ninthe thanne alledaaaaaa enthokke aleeeeee eni korach serious ayit paraya
    <br><br>
    Atheeee enik ninne bhayankara ishtam a neee yes parayo ennu arayilla ennalum enik entho parayanam ennu thooni neee Chilappo enne angane kandit undavilla ennalum Njan eth eni paranjillel eni annelum eth parayumbo annu paranjel Njan yes paranjene ennu nee Paranja enik veshamam avummm atha eppo parayane enik ninne bhayankara ishtam a "I Love You❤️"
    <br><br>
    Nee ethinu rply thannolu Chilappo eth kelkumbo nee ennod eni mindi ennu varilla angane onnum venda tta ishtam allel ath Paranja mathi scn ella eppo ishtam annu paranju ennu vech kozhapam ellata nammal pazhayath pole thanne veliya vethasam onnum ella nammal thammil ethra kollam ayit ariyaaa pinne angotum engotum ariyathathu onnum ellanu vekkanu Ninak enne ishtam anno ennu arayilla eni eth parayumbozhano athine kurich aloikane ennu polum arayilla enth okke annelum neee enthe koode indel adipoli avum ennu thooni athokke thanne prethekish onnum ella ethokke thanne appo aloichu okke paranjolu tta eppo ninne ishtapedan Karanam ennu okke choicha nee nalla kochanu mariyathak okke nokkum enthelum okke ninnod Paranja nee avide veenolum veliya scn onnnum ella oru kidilan kocha neee athranne pinne elle enthokke okke vannalum 10 kazhinju pooyalum scn onnum indavalle tta enik ninnod olla ishtam poovilla enik aennum nee enthe koch thanneya Neeyum poovilla ennu Njan vishwosikunnu sharkareee. Aloichu okke eni paranjolu tta
    <br><br>
    Appo veendum paraya I LOVE YOU ❤️
  </div>

  <div style="max-width:720px;margin:14px auto 30px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
    <button onclick="show('countdownPage')">Our Date 💞</button>
    <button class="btnDark" onclick="show('envelopePage')">Back 💌</button>
  </div>
</div>

<!-- COUNTDOWN PAGE -->
<div id="countdownPage" class="page scrollPage">
  <h2 class="title" style="color:#ff4d88;">We committed on</h2>
  <h1 style="margin:0 0 6px;">01 • 03 • 2025 💖</h1>
  <div id="countdownTimer" class="timer"></div>

  <div class="countBox">
    <p>💗 01-03-2025 — The Day We Became “Us”
    This was not just a date on the calendar. This was the day feelings turned into something real. The day we stopped standing on two different sides and slowly started walking in the same direction. From this day, your happiness became my peace, your sadness became my concern, and your presence became my comfort. 01-03-2025 is not just when we committed… it is the day my heart officially chose you.</p>

    <p>💗 05-06-2023 — The First Time I Saw You
    I still don’t know if you noticed me that day in tuition class… but I remember noticing you. Maybe it was just another normal day for the world, but for me, it quietly became special. I didn’t know that the girl sitting there would later become someone who would change my thoughts, my feelings, and my future. That first sight was simple… but it was the beginning of everything.</p>

    <p>💗 20-07-2010 — The Day the World Became Beautiful
    Long before I knew you… before tuition, before conversations, before feelings… this was the day you came into this world. And I sometimes think how lucky this world is to have you in it. Because without this day, there would be no smiles from you, no talks with you, no “us.” 20-07-2010 is special not just because you were born… but because that’s the day the person I would one day love started her journey.</p>
  </div>

  <div style="max-width:720px;margin:14px auto 30px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
    <button onclick="show('diaryPage')">Diary 📖</button>
    <button class="btnDark" onclick="show('letterPage')">Back ❤️</button>
  </div>
</div>

<!-- DIARY PAGE -->
<div id="diaryPage" class="page scrollPage">
  <h2 class="title" style="color:#ff4d88;">Daily Diary 📖</h2>

  <div class="card" style="text-align:center;">
    <h3 style="margin-top:0;">Today’s message from me 💗</h3>

    <p style="line-height:1.9;">
      Today… I just want you to know that you mean a lot to me.
      Even small talks with you make my day better.
      Whatever happens, I’m always here for you. ❤️
    </p>

    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
      <button onclick="openReplyForm()">Reply Today 💌</button>
      <button onclick="show('optionsPage')">Our World 🌙</button>
      <button class="btnDark" onclick="show('countdownPage')">Back ❤️</button>
    </div>
  </div>
</div>

<!-- OPTIONS HUB -->
<div id="optionsPage" class="page scrollPage">
  <h2 class="title" style="color:#ff4d88;">Our World 🌙💗</h2>

  <div class="card" style="text-align:center;">
    <p style="opacity:.9;margin-top:0;">Choose one…</p>

    <div style="display:flex;flex-direction:column;gap:12px;max-width:420px;margin:0 auto;">
      <button onclick="show('ourTimePage')">Our Time 📸</button>
      <button onclick="show('memoriesPage')">Memories 🪵</button>
      <button onclick="show('oneDayPage')">One Day 💍</button>
    </div>

    <div style="margin-top:18px;">
      <button class="btnDark" onclick="show('diaryPage')">Back 📖</button>
    </div>
  </div>
</div>

<!-- OUR TIME PAGE -->
<div id="ourTimePage" class="page scrollPage">
  <h2 class="title" style="color:#ff4d88;">Our Time 📸</h2>
  <div class="card">
    <p style="margin-top:0;">
      This page is for our photos… little moments, silly selfies, random clicks — everything that feels like “us”.
    </p>
    <p style="opacity:.85;">📌 Next step: we will add a photo gallery grid.</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
      <button class="btnDark" onclick="show('optionsPage')">Back 🌙</button>
    </div>
  </div>
</div>


<!-- MEMORIES PAGE -->
<div id="memoriesPage" class="page scrollPage">
  <h2 class="title" style="color:#ff4d88;">Memories 🪵</h2>

  <div class="card">
    <div class="tuitionScene">
      <div class="board">Tuition 🖍️</div>

      <div class="desk"></div>

      <div class="me">
        <div class="head"></div>
        <div class="body"></div>
      </div>

      <div class="her">
        <div class="head"></div>
        <div class="body"></div>
      </div>

      <div class="heartPop">💗</div>
    </div>

    <p style="margin-top:14px;">
      I still remember that tuition class… the long wooden bench… and you sitting there like it’s nothing.
      But for me… that was the first time my heart started keeping memories.
    </p>

    <p>
      Even when we acted normal in front of everyone… my mind was only saying one thing:
      “Please let this moment never end.”
    </p>

    <p style="opacity:.9;">
      Some places become special not because of the place…  
      but because YOU were there.
    </p>

    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
      <button class="btnDark" onclick="show('optionsPage')">Back 🌙</button>
    </div>
  </div>
</div>

<!-- ONE DAY PAGE -->
<div id="oneDayPage" class="page scrollPage">
  <h2 class="title" style="color:#ff4d88;">One Day 💍</h2>

  <div class="card">
    <div class="futureScene">
      <div class="ringPulse">💍</div>

      <div class="couple">
        <div class="cHead"></div><div class="cBody"></div>
        <div class="cHead"></div><div class="cBody"></div>
      </div>

      <div class="kids">
        <div class="kid">👶</div>
        <div class="kid">🧒</div>
      </div>

      <div class="home">🏡</div>
      <div class="txt">A peaceful life… with you.</div>
    </div>

    <p style="margin-top:14px;">
      One day… not in a dream… in real life…  
      I want a home where your laugh is the happiest sound.
    </p>

    <p style="opacity:.9;">
      I don’t want perfect life…  
      I want a life with you. 🩷
    </p>

    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
      <button class="btnDark" onclick="show('optionsPage')">Back 🌙</button>
    </div>
  </div>
</div>

<script>
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc1JncNbHTVKlZooN4NaDi_Ov08J6Q1g-v5PMHlNnZ_mcGp6A/viewform?usp=dialog";

  function show(pageId){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    const page = document.getElementById(pageId);
    if(page) page.classList.add('active');
    if(page && page.classList.contains("scrollPage")) page.scrollTop = 0;
  }

  function checkPassword(){
    const entered = document.getElementById("passwordInput").value.trim();
    if(entered === "01032025"){
      const music = document.getElementById("bgMusic");
      if(music) music.play().catch(()=>{});
      show("envelopePage");
    } else {
      alert("Wrong date 💔");
    }
  }

  function openLetter(){
    const env = document.querySelector(".newEnvelope");
    if(env) env.classList.add("open");
    setTimeout(() => show("letterPage"), 900);
  }

  function openReplyForm(){
    // Opens Google Form in new tab (best working on mobile)
    window.open(FORM_URL, "_blank");
  }

  // hearts
  setInterval(function(){
    const heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"%";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),5000);
  },800);

  // countdown since 01-03-2025
  (function startCountdown(){
    const target = new Date("2025-03-01T00:00:00").getTime();
    setInterval(() => {
      const now = Date.now();
      const diff = now - target;

      const days = Math.floor(diff / (1000*60*60*24));
      const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
      const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
      const secs = Math.floor((diff % (1000*60)) / 1000);

      const el = document.getElementById("countdownTimer");
      if(el) el.innerHTML = `${days} days 💕 ${hours} hrs 💕 ${mins} mins 💕 ${secs} sec together`;
    }, 1000);
  })();
</script>

</body>
</html>

