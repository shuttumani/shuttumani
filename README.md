<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Shuttumani Chat 💗</title>

<style>
  body{margin:0;background:#000;color:#fff;font-family:Arial,sans-serif;overflow:hidden;}
  .page{position:fixed;inset:0;display:none;}
  .page.active{display:flex;}

  /* Lock + Login */
  .center{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px;padding:18px;box-sizing:border-box;text-align:center;}
  h1{margin:0;color:#ff4da6;}
  .hint{opacity:.85;max-width:520px;line-height:1.5;}
  input{
    padding:14px;font-size:18px;border:none;border-radius:12px;width:min(340px,85vw);
    text-align:center;outline:none;background:#111;color:#fff;border:1px solid #222;
  }
  button{padding:14px 22px;font-size:18px;border:none;border-radius:12px;background:#ff4da6;color:#fff;cursor:pointer;}
  .btnDark{background:#222;border:1px solid #333;}

  /* Chat */
  #chatPage{flex-direction:column;}
  .header{
    height:66px;padding:0 14px;display:flex;align-items:center;justify-content:space-between;
    background:#0f0f0f;border-bottom:1px solid #222;box-sizing:border-box;
  }
  .who{display:flex;flex-direction:column;gap:2px;}
  .title{font-size:18px;}
  .status{font-size:13px;opacity:.85;color:#bbb;}
  #messages{
    flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;
  }
  .bubble{
    max-width:78%;padding:10px 12px;border-radius:14px;line-height:1.4;font-size:16px;
    word-wrap:break-word;border:1px solid rgba(255,255,255,.06);
  }
  .me{align-self:flex-end;background:#ff4da6;}
  .her{align-self:flex-start;background:#1a1a1a;}
  .meta{font-size:12px;opacity:.75;margin-top:4px}
  .composer{
    height:74px;padding:10px;background:#0f0f0f;border-top:1px solid #222;
    display:flex;gap:10px;align-items:center;box-sizing:border-box;
  }
  #msgInput{flex:1;text-align:left;}
</style>
</head>

<body>

<!-- STEP 1A: LOCK -->
<div id="lockPage" class="page active">
  <div class="center">
    <h1>Private 💗</h1>
    <div class="hint">“ammede ponnu araaa 💋💋”</div>

    <input id="lockPass" type="password" placeholder="Enter date (01032025)"
           inputmode="numeric" autocomplete="off"
           onkeydown="if(event.key==='Enter'){ unlock(); }">
    <button type="button" onclick="unlock()">Unlock</button>
  </div>
</div>

<!-- STEP 1B: LOGIN -->
<div id="loginPage" class="page">
  <div class="center">
    <h1>Login 💌</h1>
    <div class="hint">Only you two can enter. (Email + Password)</div>

    <input id="email" type="email" placeholder="Email" autocomplete="off">
    <input id="password" type="password" placeholder="Password" autocomplete="off"
           onkeydown="if(event.key==='Enter'){ login(); }">

    <button type="button" onclick="login()">Enter Chat</button>
    <button type="button" class="btnDark" onclick="show('lockPage')">Back</button>

    <div id="loginError" style="opacity:.9;color:#ffb3d9;min-height:18px;"></div>
  </div>
</div>

<!-- STEP 1C: CHAT -->
<div id="chatPage" class="page">
  <div class="header">
    <div class="who">
      <div class="title">Shuttumani 💗 Chat</div>
      <div class="status" id="statusText">Connecting…</div>
    </div>
    <button class="btnDark" onclick="logout()">Logout</button>
  </div>

  <div id="messages"></div>

  <div class="composer">
    <input id="msgInput" placeholder="Type message…"
           onkeydown="if(event.key==='Enter'){ sendMsg(); }">
    <button onclick="sendMsg()">Send</button>
  </div>
</div>

<script type="module">
  // ✅ Stable Firebase Web SDK (modular)
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

  // ✅ Your config (as you pasted)
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
  const db = getFirestore(app);

  // ---------- Page system ----------
  window.show = function(pageId){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    const el = document.getElementById(pageId);
    if(!el){ alert("Missing page: " + pageId); return; }
    el.classList.add("active");
    window.scrollTo(0,0);
  };

  window.unlock = function(){
    const pass = document.getElementById("lockPass").value.trim();
    if(pass === "01032025") show("loginPage");
    else alert("Wrong date 💔");
  };

  // ---------- Auth ----------
  const loginError = document.getElementById("loginError");

  window.login = async function(){
    loginError.textContent = "";
    const email = document.getElementById("email").value.trim();
    const pw = document.getElementById("password").value;
    if(!email || !pw){ loginError.textContent = "Enter email and password."; return; }

    try{
      await signInWithEmailAndPassword(auth, email, pw);
      // onAuthStateChanged will move to chat
    }catch(e){
      loginError.textContent = e?.message || "Login failed";
    }
  };

  window.logout = async function(){
    await signOut(auth);
    show("loginPage");
  };

  // ---------- Chat ----------
  const messagesEl = document.getElementById("messages");
  const statusText = document.getElementById("statusText");
  const msgInput = document.getElementById("msgInput");

  let unsub = null;

  function renderMsg({text, uid, email, ts}, myUid){
    const wrap = document.createElement("div");
    const bubble = document.createElement("div");
    bubble.className = "bubble " + (uid === myUid ? "me" : "her");
    bubble.textContent = text || "";

    const meta = document.createElement("div");
    meta.className = "meta";
    const time = ts?.toDate ? ts.toDate().toLocaleString() : "";
    meta.textContent = (uid === myUid ? "You" : (email || "Her")) + (time ? " • " + time : "");

    bubble.appendChild(meta);
    wrap.appendChild(bubble);
    messagesEl.appendChild(wrap);
  }

  function scrollBottom(){
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function startListening(myUid){
    if(unsub) unsub();
    messagesEl.innerHTML = "";

    const q = query(collection(db, "messages"), orderBy("ts","asc"), limit(200));

    unsub = onSnapshot(q, (snap)=>{
      messagesEl.innerHTML = "";
      snap.forEach(doc=>{
        renderMsg(doc.data(), myUid);
      });
      scrollBottom();
    }, (err)=>{
      statusText.textContent = "Firestore error (check rules) ⚠️";
      console.error(err);
    });
  }

  window.sendMsg = async function(){
    const user = auth.currentUser;
    if(!user){ alert("Not logged in"); return; }

    const text = msgInput.value.trim();
    if(!text) return;

    msgInput.value = "";

    try{
      await addDoc(collection(db, "messages"), {
        text,
        uid: user.uid,
        email: user.email || "",
        ts: serverTimestamp()
      });
    }catch(e){
      alert("Send failed (check Firestore rules)");
      console.error(e);
    }
  };

  // ---------- Auth state ----------
  onAuthStateChanged(auth, (user)=>{
    if(user){
      show("chatPage");
      statusText.textContent = "Logged in as: " + (user.email || "user");
      startListening(user.uid);
    }else{
      if(unsub) unsub();
      statusText.textContent = "Not logged in";
    }
  });
</script>

</body>
</html>
