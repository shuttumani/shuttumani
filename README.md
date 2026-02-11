index.html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shuttumani</title>

  <style>
    body{
      margin:0;
      background:black;
      color:white;
      font-family:Arial, sans-serif;
      text-align:center;
      overflow:hidden;
    }

    /* Pages */
    .page{
      display:none;
      position:fixed;
      inset:0;
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
      padding:15px;
      font-size:18px;
      border-radius:10px;
      border:none;
      width:min(320px, 85vw);
      text-align:center;
    }

    button{
      padding:15px 25px;
      font-size:18px;
      border:none;
      border-radius:10px;
      background:#ff4da6;
      color:white;
      margin-top:6px;
    }
    .btnDark{ background:#222; }

    /* Hearts */
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
    .envelopeWrap{
      position:relative;
      width:240px;
      height:165px;
      margin-top:10px;
      cursor:pointer;
      user-select:none;
    }
    .envBody{
      position:absolute; inset:0;
      background:#e75480;
      border-radius:14px;
      box-shadow:0 10px 30px rgba(0,0,0,.4);
    }
    .envFlap{
      position:absolute;
      left:0; top:-78px;
      width:0; height:0;
      border-left:120px solid transparent;
      border-right:120px solid transparent;
      border-bottom:78px solid #ff6fa5;
      transform-origin:bottom;
      transition:transform .75s ease;
    }
    .envelopeWrap.open .envFlap{
      transform:rotateX(180deg);
    }
    .tapText{
      position:absolute;
      width:100%;
      bottom:-36px;
      opacity:.85;
      font-size:14px;
    }

    /* Scroll pages */
    .scrollPage{
      overflow-y:auto;
      -webkit-overflow-scrolling:touch;
      padding-bottom:35px;
    }

    .card{
      max-width:720px;
      margin:0 auto;
      text-align:left;
      line-height:1.7;
      font-size:17px;
      background:#0f0f0f;
      border-radius:16px;
      padding:18px;
    }

    .title{
      margin:10px 0 14px;
      text-align:center;
    }

    .timer{
      font-size:18px;
      margin:10px 0 0;
      opacity:.95;
    }

    .countBox{
      max-width:720px;
      margin:18px auto 0;
      text-align:left;
      line-height:1.9;
      font-size:15px;
      background:#0f0f0f;
      border-radius:16px;
      padding:16px;
    }
  </style>
</head>

<body>

  <!-- MUSIC (put music.mp3 in same folder) -->
  <audio id="bgMusic" loop>
    <source src="music.mp3" type="audio/mpeg">
  </audio>

  <!-- LOCK PAGE -->
  <div id="lockPage" class="page active">
    <div class="center">
      <h1>shuttumani 💋</h1>
      <input type="password" id="passwordInput" placeholder="Enter date (01032025)">
      <button onclick="checkPassword()">Unlock</button>
    </div>
  </div>

  <!-- ENVELOPE PAGE -->
  <div id="envelopePage" class="page">
    <div class="center">
      <h2>Love Letter 💌</h2>

      <div class="envelopeWrap" id="env" onclick="openLetter()">
        <div class="envFlap"></div>
        <div class="envBody"></div>
        <div class="tapText">Tap to open 💌</div>
      </div>

      <button class="btnDark" onclick="show('lockPage')">Back 🔒</button>
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
      Nee ethinu rply thannolu Chilappo eth kelkumbo nee ennod eni mindi ennu varilla angane onnum venda tta ishtam allel ath Paranja mathi scn ella eppo ishtam annu paranju ennu vech kozhapam ellata nammal pazhayath pole thanne veliya vethasam onnum ella nammal thammil ethra kollam ayit ariyaaa pinne angotum engotum ariyathathu onnum ellanu vekkanu Ninak enne ishtam anno ennu arayilla eni eth parayumbozhano athine kurich aloikane ennu polum arayilla enth okke annelum neee enthe koode indel adipoli avum ennu thooni athokke thanne prethekish onnum ella ethokke thanne appo aloichu okke paranjolu tta eppo ninne ishtapedan Karanam ennu okke choicha nee nalla kochanu mariyathak okke nokkum enthelum okke ninnod Paranja nee avide veenolum veliya scn onnnum ella oru kidilan kocha neee athranne pinne elle enthokke okke vannalum 10 kazhinju pooyalum scn onnum indavalle tta enik ninnod olla ishtam poovilla enik  aennum nee enthe koch thanneya Neeyum poovilla ennu Njan vishwosikunnu sharkareee. Aloichu okke eni paranjolu tta  
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

    <div style="max-width:720px;margin:14px auto 30px;display:flex;justify-content:center;">
      <button class="btnDark" onclick="show('letterPage')">Back ❤️</button>
    </div>
  </div>

  <script>
    function show(pageId){
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      const el = document.getElementById(pageId);
      if(el) el.classList.add('active');
      window.scrollTo(0,0);
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
      const env = document.getElementById("env");
      env.classList.add("open");
      setTimeout(() => show("letterPage"), 650);
    }

    // Floating hearts
    setInterval(function(){
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "❤️";
      heart.style.left = (Math.random()*100) + "%";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 800);

    // Countdown since 01-03-2025
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

