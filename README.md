<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Shuttumani Chat</title>

<style>
  body{
    margin:0;
    background:#0b0b0b;
    color:#fff;
    font-family:Arial, sans-serif;
    height:100vh;
    display:flex;
    flex-direction:column;
  }
  .topbar{
    padding:12px 14px;
    background:#111;
    border-bottom:1px solid #222;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
  }
  .title{
    font-weight:700;
    display:flex;
    align-items:center;
    gap:10px;
  }
  .dot{
    width:10px;height:10px;border-radius:50%;
    background:#666;
    display:inline-block;
  }
  .status{
    font-size:12px;
    opacity:.85;
    line-height:1.2;
  }
  .btn{
    background:#ff4da6;
    color:#fff;
    border:none;
    padding:10px 12px;
    border-radius:10px;
    cursor:pointer;
    font-size:14px;
    white-space:nowrap;
  }
  .btnDark{ background:#222; }
  .chat{
    flex:1;
    overflow:auto;
    padding:14px;
    display:flex;
    flex-direction:column;
    gap:10px;
  }
  .bubble{
    max-width:78%;
    padding:10px 12px;
    border-radius:14px;
    line-height:1.45;
    border:1px solid #222;
    background:#121212;
    white-space:pre-wrap;
    word-wrap:break-word;
  }
  .me{
    align-self:flex-end;
    background:rgba(255,77,166,.12);
    border:1px solid rgba(255,77,166,.28);
  }
  .meta{
    font-size:11px;
    opacity:.65;
    margin-top:4px;
  }
  .composer{
    display:flex;
    gap:10px;
    padding:12px;
    border-top:1px solid #222;
    background:#0f0f0f;
  }
  textarea{
    flex:1;
    resize:none;
    height:44px;
    max-height:140px;
    padding:10px 12px;
    border-radius:12px;
    border:1px solid #222;
    background:#0b0b0b;
    color:#fff;
    font-size:15px;
    outline:none;
  }
</style>
</head>

<body>

<div class="topbar">
  <div>
    <div class="title">
      <span class="dot" id="onlineDot"></span>
      <span>Shuttumani Chat 💬</span>
    </div>
    <div class="status" id="onlineText">Checking…</div>
  </div>

  <div style="display:flex;gap:8px;">
    <button class="btn btnDark" id="refreshBtn">Refresh</button>
    <button class="btn" id="logoutBtn">Logout</button>
  </div>
</div>

<div class="chat" id="chatBox"></div>

<div class="composer">
  <textarea id="msgInput" placeholder="Type here..."></textarea>
  <button class="btn" id="sendBtn">Send 💗</button>
</div>
// ✅ 1) Save MY user profile (email -> uid mapping)
await setDoc(doc(db, "users", user.uid), {
  uid: user.uid,
  email: (user.email || "").toLowerCase(),
  updatedAt: serverTimestamp()
}, { merge: true });

// ✅ 2) Find HER uid by email
let herUid = null;
const herEmailLower = "kk8477089@gmail.com".toLowerCase();
const snapUsers = await getDocs(query(collection(db, "users"), where("email", "==", herEmailLower)));
snapUsers.forEach(d => { herUid = d.id; });

// ✅ 3) If her account not logged in at least once, we can't get uid yet
if(!herUid){
  onlineDot.style.background = "#666";
  onlineText.textContent = "Waiting for her first login… (then Online/Last seen will show)";
} else {
  // ✅ 4) Listen to HER presence from Realtime DB
  const herPresenceRef = ref(rtdb, `presence/${herUid}`);
  onValue(herPresenceRef, (snap) => {
    const data = snap.val();
    if(data && data.state === "online"){
      onlineDot.style.background = "#44ff88";
      onlineText.textContent = "She is Online 💚";
    } else {
      onlineDot.style.background = "#666";
      const last = data?.lastSeen;
      onlineText.textContent = formatLastSeen(last);
    }
  });
}
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

  import {
    getAuth,
    onAuthStateChanged,
    signOut
  } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

  import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp
  } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

  import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  setDoc,
  getDocs,
  where
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
  const rtdb = getDatabase(app);

  const chatBox = document.getElementById("chatBox");
  const msgInput = document.getElementById("msgInput");
  const sendBtn = document.getElementById("sendBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const refreshBtn = document.getElementById("refreshBtn");

  const onlineDot = document.getElementById("onlineDot");
  const onlineText = document.getElementById("onlineText");

  // ✅ set this to HER email (you already gave)
  const HER_EMAIL = "kk8477089@gmail.com";

  function formatTime(ts){
    if(!ts) return "";
    const d = new Date(ts);
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2,"0");
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12; if(h===0) h=12;
    return `${h}:${m} ${ampm}`;
  }

  function renderMessage({text, uid, createdAtMs, mine}){
    const wrap = document.createElement("div");
    wrap.className = "bubble" + (mine ? " me" : "");
    wrap.textContent = text;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = createdAtMs ? formatTime(createdAtMs) : "";
    wrap.appendChild(meta);

    return wrap;
  }

  function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // ===== AUTH GATE =====
  onAuthStateChanged(auth, (user) => {
    if(!user){
      window.location.href = "index.html";
      return;
    }

    // ===== Presence (Online/Last seen) =====
    const myPresenceRef = ref(rtdb, `presence/${user.uid}`);
    set(myPresenceRef, { state:"online", lastSeen: rtdbServerTimestamp() });
    onDisconnect(myPresenceRef).set({ state:"offline", lastSeen: rtdbServerTimestamp() });

    // Show ONLY HER online status (not yours)
    // We search her UID using her email is not possible directly with client-only,
    // so we do: show online status for "chatPartner" document in Firestore.
    // Simple safe trick: each user writes their UID under /users/{uid}.
    // We'll create it now:
    (async()=>{
      // Firestore: users
      const usersCol = collection(db, "users");
      // We can’t "setDoc" without import; keep it simple:
      // We'll use addDoc only? Not good. So we skip user indexing in Step 3.
      // Instead: show YOUR status text as "Chat ready" now, Step 4 will add partner lookup.
      onlineDot.style.background = "#44ff88";
      onlineText.textContent = "Chat ready ✅ (Step 4 will add her online/last seen)";
    })();

    // ===== LIVE CHAT =====
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

    onSnapshot(q, (snap) => {
      chatBox.innerHTML = "";
      snap.forEach(doc => {
        const data = doc.data();
        const mine = data.uid === user.uid;
        chatBox.appendChild(renderMessage({
          text: data.text || "",
          uid: data.uid,
          createdAtMs: data.createdAt?.toMillis ? data.createdAt.toMillis() : null,
          mine
        }));
      });
      scrollToBottom();
    });

    // SEND
    async function send(){
      const text = msgInput.value.trim();
      if(!text) return;
      msgInput.value = "";

      await addDoc(collection(db, "messages"), {
        text,
        uid: user.uid,
        email: user.email || "",
        createdAt: serverTimestamp()
      });
    }

    sendBtn.onclick = send;

    msgInput.addEventListener("keydown", (e) => {
      if(e.key === "Enter" && !e.shiftKey){
        e.preventDefault();
        send();
      }
    });

    logoutBtn.onclick = async()=>{
      await signOut(auth);
      window.location.href = "index.html";
    };

    refreshBtn.onclick = ()=> location.reload();
  });
  function formatLastSeen(ms){
  if(!ms) return "Last seen: unknown";
  const d = new Date(ms);
  return "Last seen: " + d.toLocaleString();
  }
</script>

</body>
</html>
