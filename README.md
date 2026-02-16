<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Our Secret Chat 💬</title>

<style>

body{
margin:0;
background:#0b0b0b;
font-family:Arial;
color:white;
}

.page{
position:fixed;
inset:0;
display:none;
}

.active{
display:block;
}

/* LOCK PAGE */

.lockBox{
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:15px;
}

input{
padding:14px;
border-radius:12px;
border:none;
font-size:18px;
width:250px;
text-align:center;
}

button{
padding:14px 25px;
border:none;
border-radius:12px;
background:#ff4da6;
color:white;
font-size:18px;
}

.chatHeader{
background:#111;
padding:15px;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #222;
}

.status{
font-size:14px;
opacity:.8;
}

.online{
color:#00ff88;
}

.offline{
color:#aaa;
}

.chatBox{
position:absolute;
top:60px;
bottom:70px;
left:0;
right:0;
overflow-y:auto;
padding:15px;
}

.msg{
padding:10px 14px;
margin:6px 0;
border-radius:14px;
max-width:70%;
word-wrap:break-word;
}

.me{
background:#ff4da6;
margin-left:auto;
}

.her{
background:#222;
margin-right:auto;
}

.inputBar{
position:absolute;
bottom:0;
left:0;
right:0;
display:flex;
padding:10px;
background:#111;
gap:10px;
}

.inputBar input{
flex:1;
}

.typing{
font-size:13px;
opacity:.7;
padding:5px 15px;
}

</style>
</head>

<body>

<!-- LOCK PAGE -->

<div id="lockPage" class="page active">

<div class="lockBox">

<h1>Shuttumani 💋</h1>

<input id="passwordInput" type="password" placeholder="Enter secret date">

<button onclick="checkPassword()">Unlock</button>

</div>

</div>

<!-- CHAT PAGE -->

<div id="chatPage" class="page">

<div class="chatHeader">

<div>
Shuttumani 💬
<div id="status" class="status offline">Offline</div>
</div>

<button onclick="logout()">Logout</button>

</div>

<div id="typing" class="typing"></div>

<div id="chatBox" class="chatBox"></div>

<div class="inputBar">

<input id="msgInput" placeholder="Type message..." oninput="typing()">

<button onclick="sendMessage()">Send</button>

</div>

</div>

<!-- SOUND -->

<audio id="notifySound">
<source src="https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3">
</audio>

<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
query,
orderBy,
onSnapshot,
doc,
setDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

import {
getAuth,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut
}
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

/* YOUR FIREBASE */

const firebaseConfig = {

apiKey:"AIzaSyDJ5nrd-sCZNvCsg3THxXhewT0cBzkDoCI",

authDomain:"shuttumani-chat.firebaseapp.com",

projectId:"shuttumani-chat",

storageBucket:"shuttumani-chat.firebasestorage.app",

messagingSenderId:"1033302224383",

appId:"1:1033302224383:web:952bdfed407ab257cf0bca"

};

const app=initializeApp(firebaseConfig);

const db=getFirestore(app);

const auth=getAuth(app);

/* CHANGE THIS */

const HER_EMAIL="kk84089@gmail.com";

/* LOCK */

window.checkPassword=function(){

const pass=document.getElementById("passwordInput").value;

if(pass==="01032025"){

login();

}else{

alert("Wrong date");

}

}

/* LOGIN */

async function login(){

const email=prompt("Enter email");

const pass=prompt("Enter password");

await signInWithEmailAndPassword(auth,email,pass);

}

/* AUTH */

let currentUser="";

onAuthStateChanged(auth,user=>{

if(user){

currentUser=user.email;

show("chatPage");

online();

listen();

listenPresence();

}else{

show("lockPage");

}

});

/* SHOW PAGE */

function show(id){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));

document.getElementById(id).classList.add("active");

}

/* SEND MESSAGE */

window.sendMessage=async function(){

const input=document.getElementById("msgInput");

if(!input.value)return;

await addDoc(collection(db,"messages"),{

text:input.value,

sender:currentUser,

time:serverTimestamp()

});

input.value="";

}

/* LISTEN MESSAGES */

function listen(){

const q=query(collection(db,"messages"),orderBy("time"));

onSnapshot(q,snap=>{

const box=document.getElementById("chatBox");

box.innerHTML="";

snap.forEach(docu=>{

const d=docu.data();

const div=document.createElement("div");

div.className="msg "+(d.sender===currentUser?"me":"her");

div.innerText=d.text;

box.appendChild(div);

if(d.sender!==currentUser){

document.getElementById("notifySound").play();

}

});

box.scrollTop=box.scrollHeight;

});

}

/* ONLINE */

async function online(){

await setDoc(doc(db,"presence",me),{

online:true,
lastSeen:serverTimestamp()

});

}

/* PRESENCE LISTEN */

function listenPresence(){

onSnapshot(doc(db,"presence",HER),snap=>{

const status=document.getElementById("status");

if(!snap.exists()) return;

const data=snap.data();

if(data.online){

status.innerText="Online";
status.className="status online";

}else{

if(data.lastSeen){

const date=data.lastSeen.toDate();

const time=date.toLocaleTimeString([],{
hour:'2-digit',
minute:'2-digit'
});

status.innerText="Last seen at "+time;

}else{

status.innerText="Offline";

}

status.className="status offline";

}

});

                      }

/* TYPING */

window.typing=async function(){

await setDoc(doc(db,"typing",currentUser),{

typing:true

});

setTimeout(async()=>{

await setDoc(doc(db,"typing",currentUser),{

typing:false

});

},1000);

}

onSnapshot(doc(db,"typing",HER_EMAIL),snap=>{

if(snap.exists() && snap.data().typing){

document.getElementById("typing").innerText="Typing...";

}else{

document.getElementById("typing").innerText="";

}

});

/* LOGOUT */

window.logout=async function(){

await setDoc(doc(db,"presence",me),{

online:false,
lastSeen:serverTimestamp()

});

await signOut(auth);

};

</script>

</body>
</html>
