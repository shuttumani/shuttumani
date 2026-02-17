<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Shuttumani Chat</title>
<style>
  body{margin:0;background:#000;color:#fff;font-family:Arial;text-align:center}
  .wrap{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:14px;padding:20px;box-sizing:border-box}
  .card{width:min(420px,92vw);background:#0f0f0f;border:1px solid #222;border-radius:16px;padding:16px}
  input{width:100%;padding:14px;border:none;border-radius:12px;font-size:16px;margin-top:10px;box-sizing:border-box;text-align:center}
  button{width:100%;padding:14px;border:none;border-radius:12px;background:#ff4da6;color:#fff;font-size:16px;margin-top:12px;cursor:pointer}
  .hide{display:none}
  .msg{opacity:.9;line-height:1.6}
</style>
</head>
<body>

<div class="wrap">
  <h1 style="margin:0;color:#ff4da6;">shuttumani 💋</h1>

  <!-- LOCK CARD -->
  <div id="lockCard" class="card">
    <div class="msg">“ammede ponnu araaa 💋💋”</div>
    <input id="lockInput" type="password" placeholder="Enter lock (01032025)" inputmode="numeric" />
    <button id="unlockBtn" type="button">Unlock</button>
    <div id="lockErr" style="margin-top:10px;color:#ff5c5c;display:none;">Wrong lock 💔</div>
  </div>

  <!-- LOGIN CARD -->
  <div id="loginCard" class="card hide">
    <div class="msg">Login to chat 💌</div>
    <input id="email" type="email" placeholder="Email" autocomplete="username" />
    <input id="pass" type="password" placeholder="Password" autocomplete="current-password" />
    <button id="loginBtn" type="button">Login</button>
    <div id="loginErr" style="margin-top:10px;color:#ff5c5c;display:none;"></div>
  </div>
</div>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

  // ✅ PASTE YOUR FIREBASE CONFIG HERE (replace this object)
  const firebaseConfig = {
    apiKey: "AIzaSyDJ5nrd-sCZNvCsg3THxXhewT0cBzkDoCI",
    authDomain: "shuttumani-chat.firebaseapp.com",
    projectId: "shuttumani-chat",
    storageBucket: "shuttumani-chat.firebasestorage.app",
    messagingSenderId: "1033302224383",
    appId: "1:1033302224383:web:952bdfed407ab257cf0bca"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // lock
  const lockCard = document.getElementById("lockCard");
  const loginCard = document.getElementById("loginCard");
  const lockInput = document.getElementById("lockInput");
  const unlockBtn = document.getElementById("unlockBtn");
  const lockErr = document.getElementById("lockErr");

  unlockBtn.onclick = () => {
    const v = lockInput.value.trim();
    if(v === "01032025"){
      lockErr.style.display="none";
      lockCard.classList.add("hide");
      loginCard.classList.remove("hide");
    } else {
      lockErr.style.display="block";
    }
  };

  // login
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const loginBtn = document.getElementById("loginBtn");
  const loginErr = document.getElementById("loginErr");

  loginBtn.onclick = async () => {
    loginErr.style.display="none";
    try{
      await signInWithEmailAndPassword(auth, email.value.trim(), pass.value);
      window.location.href = "chat.html";
    }catch(e){
      loginErr.textContent = e.message;
      loginErr.style.display="block";
    }
  };

  // if already logged in → go chat directly
  onAuthStateChanged(auth, (user)=>{
    if(user){
      window.location.href = "chat.html";
    }
  });
</script>

</body>
</html>
