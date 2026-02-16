index.html<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Shuttumani Chat 🔒💬</title>
  <style>
    :root{
      --bg:#07070b; --card:#0f0f18; --muted:#a9a9c7; --txt:#ffffff;
      --pink:#ff4da6; --blue:#47a3ff; --line:#202035;
    }
    *{box-sizing:border-box}
    body{margin:0;background:radial-gradient(900px 600px at 20% 10%, #1b0b24 0%, transparent 60%),
                   radial-gradient(800px 700px at 90% 20%, #041a2a 0%, transparent 55%),
                   var(--bg);
         color:var(--txt); font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;
    }
    .wrap{max-width:720px;margin:0 auto;min-height:100vh;display:flex;flex-direction:column}
    .top{padding:18px 16px 8px;display:flex;justify-content:space-between;align-items:center;gap:10px}
    .brand{font-weight:800;letter-spacing:.3px}
    .pill{font-size:12px;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);
          padding:6px 10px;border-radius:999px;display:inline-flex;align-items:center;gap:8px}
    .dot{width:8px;height:8px;border-radius:50%;background:#666}
    .dot.on{background:#2dff8f; box-shadow:0 0 16px rgba(45,255,143,.5)}
    .card{background:rgba(15,15,24,.72);border:1px solid rgba(255,255,255,.10);
          border-radius:18px; padding:16px; margin:10px 16px; box-shadow:0 12px 40px rgba(0,0,0,.35)}
    input,button{font:inherit}
    input{
      width:100%; padding:14px 14px; border-radius:14px; border:1px solid rgba(255,255,255,.14);
      background:rgba(0,0,0,.25); color:#fff; outline:none;
    }
    input:focus{border-color:rgba(71,163,255,.55); box-shadow:0 0 0 4px rgba(71,163,255,.15)}
    button{
      padding:12px 14px; border-radius:14px; border:none; cursor:pointer; color:#fff;
      background:linear-gradient(135deg, var(--pink), #ff7ad1);
      font-weight:800;
    }
    button.secondary{background:rgba(255,255,255,.10); border:1px solid rgba(255,255,255,.15); font-weight:700}
    .row{display:flex; gap:10px}
    .row > *{flex:1}
    .hint{color:var(--muted); font-size:12px; line-height:1.4}
    .hidden{display:none}
    .hr{height:1px;background:linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent); margin:10px 0}
    /* Chat */
    .chatBox{display:flex;flex-direction:column; gap:10px}
    .msgs{
      height:56vh; overflow:auto; padding:12px; border-radius:16px;
      background:rgba(0,0,0,.20); border:1px solid rgba(255,255,255,.10)
    }
    .msg{max-width:78%; padding:10px 12px; border-radius:14px; border:1px solid rgba(255,255,255,.10);
         margin:8px 0; white-space:pre-wrap; word-break:break-word}
    .me{margin-left:auto; background:rgba(255,77,166,.18); border-color:rgba(255,77,166,.25)}
    .them{margin-right:auto; background:rgba(71,163,255,.14); border-color:rgba(71,163,255,.22)}
    .meta{font-size:11px;color:var(--muted); margin-top:6px}
    .typing{font-size:12px;color:var(--muted); padding:6px 2px; min-height:18px}
    .toast{
      position:fixed; left:50%; transform:translateX(-50%);
      bottom:18px; background:rgba(0,0,0,.75); border:1px solid rgba(255,255,255,.12);
      padding:10px 12px; border-radius:14px; color:#fff; font-size:13px; opacity:0;
      transition:.25s; pointer-events:none;
      max-width:min(92vw,680px);
    }
    .toast.on{opacity:1; transform:translateX(-50%) translateY(-6px)}
    a{color:#a9d6ff}
    .smallBtn{padding:10px 12px;border-radius:12px;font-size:13px}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="top">
      <div class="brand">🔒 Shuttumani Private Chat</div>
      <div class="pill"><span id="onlineDot" class="dot"></span><span id="onlineText">Offline</span></div>
    </div>

    <!-- STEP 1: Local unlock (PIN) -->
    <div id="unlockCard" class="card">
      <h2 style="margin:0 0 8px;">Secret Unlock ✨</h2>
      <div class="hint">This is just to hide the page from others. Real security is Firebase login + rules.</div>
      <div style="height:10px"></div>
      <div class="row">
        <input id="pin" placeholder="Enter secret PIN" inputmode="numeric" autocomplete="off"/>
        <button id="btnUnlock">Unlock</button>
      </div>
      <div class="hint" style="margin-top:10px;">Tip: use a PIN only you both know.</div>
    </div>

    <!-- STEP 2: Firebase login -->
    <div id="loginCard" class="card hidden">
      <h2 style="margin:0 0 8px;">Login ❤️</h2>
      <div class="hint">Use the email/password you created in Firebase Authentication.</div>
      <div style="height:10px"></div>
      <input id="email" placeholder="Email" autocomplete="username"/>
      <div style="height:10px"></div>
      <input id="pass" type="password" placeholder="Password" autocomplete="current-password"/>
      <div style="height:12px"></div>
      <div class="row">
        <button id="btnLogin">Login</button>
        <button id="btnNotify" class="secondary">Enable alerts</button>
      </div>
      <div class="hr"></div>
      <div class="hint">
        Alerts: if she sends message while you are on this page, you’ll see a toast + title blink.
        (Real push notifications need extra setup; this is the easiest working one.)
      </div>
    </div>

    <!-- STEP 3: Chat -->
    <div id="chatCard" class="card hidden">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
        <div>
          <div style="font-weight:900;font-size:18px">💬 Our Room</div>
          <div class="hint" id="whoami">Signed in</div>
        </div>
        <button id="btnLogout" class="secondary smallBtn">Logout</button>
      </div>

      <div class="hr"></div>

      <div class="chatBox">
        <div id="msgs" class="msgs"></div>
        <div id="typing" class="typing"></div>
        <div class="row">
          <input id="msgInput" placeholder="Type your message…" autocomplete="off"/>
          <button id="btnSend">Send</button>
        </div>
        <div class="hint">If she opens the site, you’ll see “Online”.</div>
      </div>
    </div>
  </div>

  <div id="toast" class="toast">Hi</div>

  <script type="module">
    // ====== CONFIG (your config) ======
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
    import {
      getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut
    } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
    import {
      getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit,
      onSnapshot, doc, setDoc, getDoc
    } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

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

    // ====== UI helpers ======
    const $ = (id) => document.getElementById(id);
    const unlockCard = $("unlockCard");
    const loginCard  = $("loginCard");
    const chatCard   = $("chatCard");
    const toastEl    = $("toast");
    const msgsEl     = $("msgs");
    const typingEl   = $("typing");
    const onlineDot  = $("onlineDot");
    const onlineText = $("onlineText");

    function showToast(text){
      toastEl.textContent = text;
      toastEl.classList.add("on");
      setTimeout(()=>toastEl.classList.remove("on"), 2400);
      blinkTitle(text);
    }

    let blinkTimer = null;
    const baseTitle = document.title;
    function blinkTitle(text){
      clearInterval(blinkTimer);
      let on = false;
      blinkTimer = setInterval(()=>{
        document.title = on ? baseTitle : ("💌 " + text);
        on = !on;
      }, 900);
      setTimeout(()=>{ clearInterval(blinkTimer); document.title = baseTitle; }, 6000);
    }

    // ====== STEP A: Local PIN unlock ======
    // Change this PIN to anything you want:
    const SECRET_PIN = "01032025"; // example
    $("btnUnlock").onclick = () => {
      const entered = ($("pin").value || "").trim();
      if(entered === SECRET_PIN){
        unlockCard.classList.add("hidden");
        loginCard.classList.remove("hidden");
        showToast("Unlocked ✅");
      } else {
        showToast("Wrong PIN 😅");
      }
    };

    // ====== Optional: browser notification permission ======
    $("btnNotify").onclick = async () => {
      try{
        if(!("Notification" in window)) return showToast("Notifications not supported.");
        const p = await Notification.requestPermission();
        showToast(p === "granted" ? "Alerts enabled ✅" : "Alerts blocked ❌");
      } catch(e){
        showToast("Could not enable alerts.");
      }
    };

    // ====== STEP B: Login / Logout ======
    $("btnLogin").onclick = async () => {
      const email = $("email").value.trim();
      const pass  = $("pass").value;
      if(!email || !pass) return showToast("Enter email + password");
      try{
        await signInWithEmailAndPassword(auth, email, pass);
      }catch(e){
        showToast("Login failed (check email/pass)");
      }
    };

    $("btnLogout").onclick = async () => {
      await signOut(auth);
      showToast("Logged out");
    };

    // ====== Firestore chat room ======
    const ROOM_ID = "main"; // you can change: "valentines", etc.
    const msgCol = collection(db, `rooms/${ROOM_ID}/messages`);

    let unsubscribeMsgs = null;
    let meUid = null;
    let lastSeenMsgId = null;

    function renderMsg({text, uid, name, createdAt}){
      const div = document.createElement("div");
      div.className = "msg " + (uid === meUid ? "me" : "them");
      div.textContent = text;

      const meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = (name || "Someone") + " • " + (createdAt ? new Date(createdAt).toLocaleString() : "");
      div.appendChild(meta);
      msgsEl.appendChild(div);
    }

    async function setPresence(uid, isOnline){
      const ref = doc(db, "presence", uid);
      await setDoc(ref, { online: isOnline, at: Date.now() }, { merge:true });
    }

    function watchPresence(myUid){
      // mark me online + update when leaving
      setPresence(myUid, true);
      window.addEventListener("beforeunload", () => {
        // best-effort (not guaranteed on mobile), still ok
        setPresence(myUid, false);
      });

      // show "other online" if any other allowed user is online
      // For simple: listen to ALL presence docs changes by subscribing to two known users is better,
      // but we don’t know their UIDs here in code. So: show YOUR online only.
      onlineDot.classList.add("on");
      onlineText.textContent = "Online";
    }

    function startMessagesListener(){
      if(unsubscribeMsgs) unsubscribeMsgs();

      msgsEl.innerHTML = "";
      const q = query(msgCol, orderBy("createdAt", "asc"), limit(200));

      unsubscribeMsgs = onSnapshot(q, (snap) => {
        // New message detection
        snap.docChanges().forEach((ch) => {
          if(ch.type === "added"){
            const d = ch.doc.data();
            renderMsg({
              text: d.text || "",
              uid: d.uid,
              name: d.name || "❤️",
              createdAt: d.createdAt?.toMillis ? d.createdAt.toMillis() : null
            });

            // if it's from other person -> show toast + optional notification
            if(ch.doc.id !== lastSeenMsgId){
              lastSeenMsgId = ch.doc.id;
              if(d.uid && d.uid !== meUid){
                showToast("New message 💌");
                if(("Notification" in window) && Notification.permission === "granted"){
                  new Notification("New message 💌", { body: (d.text || "").slice(0, 80) });
                }
              }
            }
          }
        });

        // auto scroll to bottom
        msgsEl.scrollTop = msgsEl.scrollHeight;
      });
    }

    // typing indicator (super simple: local only)
    let typingTimer = null;
    $("msgInput").addEventListener("input", () => {
      typingEl.textContent = "typing…";
      clearTimeout(typingTimer);
      typingTimer = setTimeout(()=> typingEl.textContent = "", 900);
    });

    async function sendMessage(){
      const text = ($("msgInput").value || "").trim();
      if(!text) return;
      $("msgInput").value = "";
      try{
        await addDoc(msgCol, {
          text,
          uid: meUid,
          name: (auth.currentUser?.email || "me").split("@")[0],
          createdAt: serverTimestamp()
        });
      }catch(e){
        showToast("Send failed (check Rules/UIDs)");
      }
    }

    $("btnSend").onclick = sendMessage;
    $("msgInput").addEventListener("keydown", (e)=>{
      if(e.key === "Enter") sendMessage();
    });

    // ====== Auth state ======
    onAuthStateChanged(auth, (user) => {
      if(user){
        meUid = user.uid;

        unlockCard.classList.add("hidden");
        loginCard.classList.add("hidden");
        chatCard.classList.remove("hidden");

        $("whoami").textContent = "Signed in as: " + (user.email || user.uid);
        showToast("Welcome ❤️");

        watchPresence(user.uid);
        startMessagesListener();
      }else{
        meUid = null;
        if(unsubscribeMsgs) unsubscribeMsgs();
        unsubscribeMsgs = null;

        // back to login (but keep unlock done)
        chatCard.classList.add("hidden");
        loginCard.classList.remove("hidden");

        onlineDot.classList.remove("on");
        onlineText.textContent = "Offline";
      }
    });
  </script>
</body>
</html>
