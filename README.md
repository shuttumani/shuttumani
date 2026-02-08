index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>For My Suttumani ❤️</title>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #050505;
            --heart-red: #ff2e63;
            --soft-pink: #ffcccc;
        }

        body, html {
            margin: 0; padding: 0;
            width: 100%; height: 100%;
            background-color: var(--bg);
            color: white;
            font-family: 'Poppins', sans-serif;
            overflow: hidden;
        }

        /* --- PAGE TRANSITIONS --- */
        .page {
            position: absolute;
            width: 100%; height: 100%;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 40px 20px;
            box-sizing: border-box;
            overflow-y: auto;
            background: var(--bg);
            animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .active { display: flex; }

        /* --- LOCK SCREEN --- */
        #lock-screen { z-index: 1000; justify-content: center; background: black; }
        .intro-fade {
            font-family: 'Dancing Script', cursive;
            font-size: 2rem;
            animation: fadeInOut 3s infinite;
            margin-bottom: 30px;
            color: var(--heart-red);
        }

        #pw-input {
            background: transparent; border: none;
            border-bottom: 2px solid white;
            color: white; text-align: center;
            font-size: 1.5rem; letter-spacing: 4px;
            outline: none; width: 220px;
        }

        /* --- ENVELOPE --- */
        #envelope-page { justify-content: center; }
        .envelope {
            width: 160px; height: 110px;
            background: #b33939; position: relative;
            cursor: pointer; box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            transition: transform 0.3s;
        }
        .envelope:active { transform: scale(0.9); }
        .envelope::after {
            content: ''; position: absolute; top: 0; left: 0;
            border-left: 80px solid transparent; border-right: 80px solid transparent;
            border-top: 60px solid #ff2e63;
        }

        /* --- LETTER STYLING --- */
        .letter-container {
            font-family: 'Dancing Script', cursive;
            font-size: 1.3rem;
            line-height: 1.6;
            color: var(--soft-pink);
            text-align: left;
            padding: 25px;
            background: rgba(255,255,255,0.05);
            border-radius: 20px;
            margin-bottom: 20px;
            border: 1px solid rgba(255,46,99,0.2);
        }

        /* --- PHOTO FRAMES --- */
        .photo-frame {
            width: 100%; max-width: 280px;
            border: 8px solid white;
            border-bottom: 30px solid white;
            transform: rotate(-2deg);
            margin: 20px 0;
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }

        /* --- INTERACTIVE BUTTONS --- */
        .hub-btn {
            width: 85%; padding: 15px; margin: 10px 0;
            background: linear-gradient(45deg, #ff2e63, #b33939);
            border: none; color: white; border-radius: 50px;
            font-weight: 600; text-align: center; font-size: 1rem;
            box-shadow: 0 4px 15px rgba(255,46,99,0.3);
        }

        .back-btn { margin-top: 20px; color: var(--heart-red); text-decoration: underline; cursor: pointer; }

        /* --- COUNTDOWN --- */
        .timer { font-size: 2.2rem; color: var(--heart-red); font-weight: 600; margin: 20px 0; font-variant-numeric: tabular-nums; }

        /* --- DECORATIONS --- */
        .heart {
            position: fixed; color: var(--heart-red);
            pointer-events: none; z-index: 999;
            animation: floatUp 4s linear forwards;
        }
        @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
        }
        @keyframes fadeInOut { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }

        iframe { border-radius: 15px; background: white; margin-top: 10px; }
    </style>
</head>
<body>

    <audio id="bg-music" loop>
        <source src="music.mp3" type="audio/mpeg">
    </audio>

    <div id="lock-screen" class="page active">
        <div class="intro-fade">ammede ponnu araaa💋💋</div>
        <input type="password" id="pw-input" placeholder="DDMMYYYY" maxlength="8">
        <p style="font-size: 0.8rem; margin-top: 15px; opacity: 0.6;">Hint: Our special date ❤️</p>
    </div>

    <div id="envelope-page" class="page">
        <div class="envelope" onclick="openGift()"></div>
        <p style="margin-top:30px; font-family: 'Dancing Script'; font-size: 1.5rem;">Tap to open your heart...</p>
    </div>

    <div id="letter-page" class="page">
        <div class="letter-container">
            Happy Valentine's Day ponnahhh❤💋💋🫂 eth nee appozha vayika ennu arayillla Appozhayalum vayikulooo ninthe first Valentine's Day annu ennu okke ariyaaa nee annu tution nu varo ennu polum arayilla ethu Azhuthumbo pinne ollathu exam okke alle ath Kazhinja kanan polum pattillalo appo enth cheyyum nee vallathum aloichu vechit indooo vaveee enthe oru idea il korach okkee indu ath Njan parayaneee pinne kali akkanda ketta Njan romantic alla ennu paranju nee enthe eduth ethuuu matte parayana oru dhivasam varum daaaa nokkikooo pinne entha sugalle engane okke nadanna mathiyooo vellapozhum enne kurich okke ortholu tta marannu povaruthu nammal mindandu aya entha indava ponnah enthayalum nammal kanum enganelum okke enthelum mindum athokke orapa pinne ammede ponnu aradaaaa 😘🩷❤️💋🫂 exam kazhinju graduation nu enthavavo kalikan poovanel ninak ath scn avum ennu enik ariyaaaaa bhaki Allavarum adipoli ayit avide erikumbo enthe ponnu matharam blaa blaaa blaaaa enthaleeeee nja. Avide annelum ninthe thanne alledaaaaaa enthokke aleeeeee eni korach serious ayit paraya 
            <br><br>
            Atheeee enik ninne bhayankara ishtam a neee yes parayo ennu arayilla ennalum enik entho parayanam ennu thooni neee Chilappo enne angane kandit undavilla ennalum Njan eth eni paranjillel eni annelum eth parayumbo annu paranjel Njan yes paranjene ennu nee Paranja enik veshamam avummm atha eppo parayane enik ninne bhayankara ishtam a "I Love You❤️"
            <br><br>
            Nee ethinu rply thannolu Chilappo eth kelkumbo nee ennod eni mindi ennu varilla angane onnum venda tta ishtam allel ath Paranja mathi scn ella eppo ishtam annu paranju ennu vech kozhapam ellata nammal pazhayath pole thanne veliya vethasam onnum ella nammal thammil ethra kollam ayit ariyaaa pinne angotum engotum ariyathathu onnum ellanu vekkanu Ninak enne ishtam anno ennu arayilla eni eth parayumbozhano athine kurich aloikane ennu polum arayilla enth okke annelum neee enthe koode indel adipoli avum ennu thooni athokke thanne prethekish onnum ella ethokke thanne appo aloichu okke paranjolu tta eppo ninne ishtapedan Karanam ennu okke choicha nee nalla kochanu mariyathak okke nokkum enthelum okke ninnod Paranja nee avide veenolum veliya scn onnnum ella oru kidilan kocha neee athranne pinne elle enthokke okke vannalum 10 kazhinju pooyalum scn onnum indavalle tta enik ninnod olla ishtam poovilla enik aennum nee enthe koch thanneya Neeyum poovilla ennu Njan vishwosikunnu sharkareee. Aloichu okke eni paranjolu tta 
            <br><br>
            Appo veendum paraya I LOVE YOU ❤️
        </div>
        <img src="1245.jpg" class="photo-frame" alt="Our Photo">
        <div class="hub-btn" onclick="showPage('countdown-page')">Swipe Down to Journey ↓</div>
    </div>

    <div id="countdown-page" class="page">
        <h3>Since We Committed</h3>
        <p style="margin: 0; color: var(--heart-red);">01 / 03 / 2025</p>
        <div class="timer" id="timer">00:00:00:00</div>
        
        <div style="text-align: left; width: 90%; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 15px;">
            <p>📍 01/03/2025 - She said back that she loves me</p>
            <hr style="opacity:0.1">
            <p>📍 05/06/2023 - First time I saw her in tuition</p>
            <hr style="opacity:0.1">
            <p>📍 20/07/2010 - When she came into the world</p>
        </div>
        <div class="hub-btn" onclick="showPage('diary-page')">Daily Diary (Swipe Right) →</div>
    </div>

    <div id="diary-page" class="page">
        <h3>Our Daily Diary</h3>
        <p style="font-size: 0.8rem; opacity: 0.7;">Write to me, suttumani...</p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1JncNbHTVKlZooN4NaDi_Ov08J6Q1g-v5PMHlNnZ_mcGp6A/viewform?embedded=true" width="100%" height="550" frameborder="0">Loading…</iframe>
        <div class="hub-btn" onclick="showPage('hub-page')">Open the Hub ↑</div>
    </div>

    <div id="hub-page" class="page">
        <h2 style="font-family: 'Dancing Script';">Our Worlds</h2>
        <div class="hub-btn" onclick="showPage('our-time')">Our Time (Photos)</div>
        <div class="hub-btn" onclick="showPage('memories')">Memories (The Bench)</div>
        <div class="hub-btn" onclick="showPage('one-day')">One Day (Future)</div>
        <div class="hub-btn" onclick="showPage('conclusion')">Final Conclusion ↑</div>
    </div>

    <div id="our-time" class="page">
        <h3>Our Time</h3>
        <img src="1246.jpg" class="photo-frame" alt="Special Moment">
        <p>I want to keep seeing your smile every single day.</p>
        <div class="back-btn" onclick="showPage('hub-page')">← Back to Hub</div>
    </div>

    <div id="memories" class="page">
        <h3>The Tuition Class</h3>
        <div class="letter-container">
            "Those long wooden benches and tables... where we used to sit together, holding hands under the table and sharing every detail of our day. And that secret staircase in school, talking while everyone else was heading to the second floor. Those are my favorite places because you were there."
        </div>
        <div class="back-btn" onclick="showPage('hub-page')">← Back to Hub</div>
    </div>

    <div id="one-day" class="page">
        <h3>Our Future</h3>
        <div class="letter-container">
            One day, it will be our wedding. A beautiful life together, waking up next to you, and growing old. Our together life will be perfect because it's us.
        </div>
        <div class="back-btn" onclick="showPage('hub-page')">← Back to Hub</div>
    </div>

    <div id="conclusion" class="page">
        <div class="letter-container">
            ethokke enthe idea annu athra adipoli anno ennu arayilla Ninak ishtam avoo ennu arayilla enthanelum enik ninne bhayankara ishtam a nayeeee ethokke korach variety annu ennu vechuuu athaaaa nee pinne ammede ponnu alleda suttumaniiii ❤️💋💋💋💋💋 ummahhhh💋💋💋💋 love you 😘😘😘😘😘 appo Randalum angot engotum poovand randaleyum nokki nadaka ketta ummahhhh 💋💋💋
        </div>
        <div class="hub-btn" onclick="finalSurprise()">The Beginning ❤️</div>
    </div>

    <script>
        const music = document.getElementById('bg-music');

        function showPage(id) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            const target = document.getElementById(id);
            target.classList.add('active');
            target.scrollTop = 0;
            if(id === 'letter-page' || id === 'conclusion') startHearts();
        }

        const pwInput = document.getElementById('pw-input');
        pwInput.addEventListener('input', (e) => {
            if(e.target.value === "01032025") {
                showPage('envelope-page');
            }
        });

        function openGift() {
            music.play().catch(() => console.log("Music play blocked by browser"));
            showPage('letter-page');
        }

        function updateTimer() {
            const start = new Date("March 1, 2025 00:00:00").getTime();
            const now = new Date().getTime();
            const diff = now - start;
            
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('timer').innerText = `${d}d ${h}h ${m}m ${s}s`;
        }
        setInterval(updateTimer, 1000);

        function startHearts() {
            const container = document.body;
            const createHeart = () => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = ['❤️','💋','💖','😘','🫂'][Math.floor(Math.random()*5)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                container.appendChild(heart);
                setTimeout(() => heart.remove(), 4000);
            };
            setInterval(createHeart, 400);
        }

        function finalSurprise() {
            alert("I Love you suttumaniiii ❤️ 💋 ummahhhh");
            showPage('letter-page');
        }
    </script>
</body>
</html>



