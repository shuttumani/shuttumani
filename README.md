index.html
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>For You</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Georgia', serif;
}

body{
  background:black;
  color:white;
  overflow:hidden;
}

/* LOCK SCREEN */
#lockScreen{
  position:fixed;
  inset:0;
  background:black;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

#lockScreen h1{
  font-size:40px;
  margin-bottom:10px;
}

#lockScreen p{
  opacity:0.7;
  margin-bottom:20px;
}

#lockInput{
  padding:12px;
  font-size:18px;
  background:none;
  border:1px solid white;
  color:white;
  text-align:center;
  width:160px;
}

/* MAIN PAGE */
#main{
  display:none;
  height:100vh;
  text-align:center;
  padding-top:100px;
}

#letter{
  font-size:80px;
  cursor:pointer;
}

/* LETTER PAGE */
#letterPage{
  display:none;
  position:fixed;
  inset:0;
  background:black;
  padding:20px;
}

#letterContent{
  height:85vh;
  overflow-y:auto;
  line-height:1.7;
  font-size:18px;
}

#backBtn{
  position:fixed;
  bottom:20px;
  left:50%;
  transform:translateX(-50%);
  padding:10px 20px;
  border:1px solid white;
  cursor:pointer;
}

/* SWIPE DOWN INFO */
#info{
  display:none;
  margin-top:40px;
  opacity:0.7;
}
</style>
</head>

<body>

<!-- LOCK SCREEN -->
<div id="lockScreen">
  <h1 id="date"></h1>
  <p>Enter Password</p>
  <input id="lockInput" placeholder="••••••••">
</div>

<!-- MAIN -->
<div id="main">
  <div id="letter">💌</div>
  <div id="info">
    <p id="today"></p>
    <p>Countdown : •• ••</p>
  </div>
</div>

<!-- LETTER PAGE -->
<div id="letterPage">
  <div id="letterContent">
    <p>
    orapa pinne ammede ponnu aradaaaa 😘💗  
    exam kazhinju graduation nu enthavavo kalikan poovanell ninak ath scn avum ennu enik ariyaaaa  
    bhaki allavarum adipoli ayit avide erikumbo enthe ponnu matharam blaa blaaa blaaaa enthaleeee nja  
    Avide annelum ninthe thanne alledaaaaa enthokke aleeeee eni korach serious ayit paraya atheeee  
    enik ninne bhayangara ishtam a neee yes parayo ennu arayilla ennallum enik entho parayanam ennu thooni  
    neee chilappo enne angane kandit undavilla ennallum njaan eth eni paranjillel eni annelum eth parayumbo  
    annu paranjal njaan yes paranjene ennu nee paranja enik veshmam avummm  
    atha eppo parayane enik ninne bhayangara ishtam a "I Love You❤️"  
    Nee ethinu rply thannolu chilappo eth kelkumbo nee ennod eni mindi ennu varilla  
    angane onnum venda tta ishtam allel ath paranja mathi scn ella  
    eppo ishtam annu paranju ennu vech kozhapam ellata nammal pazhayath pole thanne veliya vethasam onnum ella  
    nammal thammil ethra kollam ayit ariyaaa pinne angottum engottum ariyathathu onnum ellanu  
    Ninak enne ishtam anno ennu arayilla eni eth parayumbozhano athine kurich aloikane ennu polum arayilla  
    enth okke annelum neee enthe koode indel adipoli avum
    </p>
  </div>
  <div id="backBtn">Back</div>
</div>

<script>
const lockInput = document.getElementById("lockInput");
const lockScreen = document.getElementById("lockScreen");
const main = document.getElementById("main");
const letter = document.getElementById("letter");
const letterPage = document.getElementById("letterPage");
const backBtn = document.getElementById("backBtn");
const info = document.getElementById("info");

lockInput.addEventListener("input",()=>{
  if(lockInput.value==="01032025"){
    lockScreen.style.display="none";
    main.style.display="block";
  }
});

letter.onclick=()=>{
  main.style.display="none";
  letterPage.style.display="block";
};

backBtn.onclick=()=>{
  letterPage.style.display="none";
  main.style.display="block";
};

let startY=0;
main.addEventListener("touchstart",e=>startY=e.touches[0].clientY);
main.addEventListener("touchend",e=>{
  if(startY - e.changedTouches[0].clientY > 50){
    info.style.display="block";
  }
});

document.getElementById("date").innerText=new Date().toDateString();
document.getElementById("today").innerText=new Date().toDateString();
</script>

</body>
</html>

