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
  font-family:Arial;
  text-align:center;
}

.page{
  display:none;
  height:100vh;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}

.active{
  display:flex;
}

input{
  padding:15px;
  font-size:18px;
  border-radius:10px;
  border:none;
  margin-top:20px;
}

button{
  padding:15px 25px;
  font-size:18px;
  border:none;
  border-radius:10px;
  background:#ff4da6;
  color:white;
  margin-top:10px;
}
.heart{
  position:fixed;
  bottom:-10px;
  font-size:20px;
  animation: floatUp 5s linear infinite;
  opacity:0.7;
}

@keyframes floatUp{
  0%{transform:translateY(0);}
  100%{transform:translateY(-110vh);}
}

</style>
</head>

<body>

<!-- LOCK SCREEN -->
<div id="lockPage" class="page active">
  <h1>shuttumani 💋</h1>
  <input type="password" id="passwordInput" placeholder="Enter date">
  <button onclick="checkPassword()">Unlock</button>
</div>

<!-- ENVELOPE PAGE -->
<div id="envelopePage" class="page">
  <h2>Love Letter 💌</h2>
  <button onclick="openLetter()">Open</button>
</div>

<!-- LETTER PAGE -->
<div style="height:70vh; overflow-y:auto; padding:20px; font-size:18px; line-height:1.6;">

eth nee appozha vayika ennu arayillla Appozhayalum vayikulooo ninthe first Valentine's Day annu ennu okke ariyaaa nee annu tution nu varo ennu polum arayilla ethu Azhuthumbo pinne ollathu exam okke alle ath Kazhinja kanan polum pattillalo appo enth cheyyum nee vallathum aloichu vechit indooo vaveee enthe oru idea il korach okkee indu ath Njan parayaneee pinne kali akkanda ketta Njan romantic alla ennu paranju nee enthe eduth ethuuu matte parayana oru dhivasam varum daaaa nokkikooo pinne entha sugalle engane okke nadanna mathiyooo vellapozhum enne kurich okke ortholu tta marannu povaruthu nammal mindandu aya entha indava ponnah enthayalum nammal kanum enganelum okke enthelum mindum athokke orapa pinne ammede ponnu aradaaaa 😘🩷❤️💋🫂 exam kazhinju graduation nu enthavavo kalikan poovanel ninak ath scn avum ennu enik ariyaaaaa bhaki Allavarum adipoli ayit avide erikumbo enthe ponnu matharam blaa blaaa blaaaa enthaleeeee nja. Avide annelum ninthe thanne alledaaaaaa enthokke aleeeeee eni korach serious ayit paraya  

Atheeee enik ninne bhayankara ishtam a neee yes parayo ennu arayilla ennalum enik entho parayanam ennu thooni neee Chilappo enne angane kandit undavilla ennalum Njan eth eni paranjillel eni annelum eth parayumbo annu paranjel Njan yes paranjene ennu nee Paranja enik veshamam avummm atha eppo parayane enik ninne bhayankara ishtam a "I Love You❤️"

Nee ethinu rply thannolu Chilappo eth kelkumbo nee ennod eni mindi ennu varilla angane onnum venda tta ishtam allel ath Paranja mathi scn ella eppo ishtam annu paranju ennu vech kozhapam ellata nammal pazhayath pole thanne veliya vethasam onnum ella nammal thammil ethra kollam ayit ariyaaa pinne angotum engotum ariyathathu onnum ellanu vekkanu Ninak enne ishtam anno ennu arayilla eni eth parayumbozhano athine kurich aloikane ennu polum arayilla enth okke annelum neee enthe koode indel adipoli avum ennu thooni athokke thanne prethekish onnum ella ethokke thanne appo aloichu okke paranjolu tta eppo ninne ishtapedan Karanam ennu okke choicha nee nalla kochanu mariyathak okke nokkum enthelum okke ninnod Paranja nee avide veenolum veliya scn onnnum ella oru kidilan kocha neee athranne pinne elle enthokke okke vannalum 10 kazhinju pooyalum scn onnum indavalle tta enik ninnod olla ishtam poovilla enik aennum nee enthe koch thanneya Neeyum poovilla ennu Njan vishwosikunnu sharkareee. Aloichu okke eni paranjolu tta  

Appo veendum paraya I LOVE YOU ❤️

</div>


<audio id="bgMusic" loop>
  <source src="music.mp3" type="audio/mpeg">
</audio>

<script>
function show(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
}

function checkPassword(){
  var input=document.getElementById("passwordInput").value;
  if(input==="01032025"){
    document.getElementById("bgMusic").play();
    show("envelopePage");
  }else{
    alert("Wrong password 💔");
  }
}

function openLetter(){
  show("letterPage");
}
setInterval(function(){
  var heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"%";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
},800);
  
</script>

</body>
</html>

