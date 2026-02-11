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
  /* ===== STEP 8: MEMORIES CARTOON ===== */
.scene{
  margin:10px 0 22px;
  padding:14px;
  border-radius:16px;
  background:linear-gradient(180deg, rgba(255,77,136,.12), rgba(255,255,255,.03));
  border:1px solid rgba(255,77,136,.18);
}
.sceneTitle{
  font-weight:700;
  letter-spacing:.2px;
  margin:2px 0 10px;
  opacity:.95;
  text-align:center;
}

/* Classroom cartoon */
.classroom{
  position:relative;
  height:210px;
  border-radius:16px;
  overflow:hidden;
  background:radial-gradient(circle at 30% 20%, rgba(255,255,255,.12), transparent 55%),
             radial-gradient(circle at 80% 40%, rgba(255,77,136,.18), transparent 60%),
             rgba(0,0,0,.25);
  border:1px solid rgba(255,255,255,.06);
}

.chalkBoard{
  position:absolute;
  top:12px; left:12px;
  width:120px; height:44px;
  border-radius:12px;
  background:rgba(0,0,0,.45);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:800;
  opacity:.9;
}

.tableTop{
  position:absolute;
  left:18px; right:18px;
  bottom:62px;
  height:14px;
  border-radius:10px;
  background:rgba(255,255,255,.12);
}
.bench{
  position:absolute;
  left:28px; right:28px;
  bottom:42px;
  height:18px;
  border-radius:10px;
  background:rgba(255,77,136,.25);
}

/* Kids */
.kid{
  position:absolute;
  bottom:60px;
  width:70px;
  height:110px;
}
.meKid{ left:35%; animation: bob 2.2s ease-in-out infinite; }
.herKid{ left:55%; animation: bob 2.2s ease-in-out infinite reverse; }

.kid .hair{
  position:absolute;
  top:0; left:12px;
  width:46px; height:22px;
  border-radius:14px;
  background:rgba(255,255,255,.18);
}
.kid .hair2{
  width:52px;
  left:9px;
  background:rgba(255,77,136,.22);
}
.kid .head{
  position:absolute;
  top:14px; left:18px;
  width:34px; height:34px;
  border-radius:50%;
  background:rgba(255,255,255,.88);
}
.kid .body{
  position:absolute;
  top:54px; left:14px;
  width:42px; height:50px;
  border-radius:18px;
  background:rgba(255,77,136,.55);
}
.kid .body2{
  background:rgba(255,255,255,.16);
  border:1px solid rgba(255,77,136,.25);
}

/* Tiny hearts floating */
.tinyHeart{
  position:absolute;
  left:50%;
  bottom:120px;
  transform:translateX(-50%);
  opacity:0;
  animation: popHeart 2.2s ease-in-out infinite;
}
.tinyHeart.h2{ left:44%; bottom:105px; animation-delay:.35s; }
.tinyHeart.h3{ left:57%; bottom:110px; animation-delay:.6s; }

@keyframes popHeart{
  0%,40%{ opacity:0; transform:translateX(-50%) translateY(10px) scale(.8); }
  60%{ opacity:1; transform:translateX(-50%) translateY(-8px) scale(1); }
  100%{ opacity:0; transform:translateX(-50%) translateY(-16px) scale(1.1); }
}

@keyframes bob{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-3px); }
}

/* Cute bubbles */
.bubble{
  position:absolute;
  padding:8px 10px;
  border-radius:14px;
  background:rgba(0,0,0,.45);
  border:1px solid rgba(255,255,255,.10);
  font-size:13px;
  opacity:0;
  animation: bubbleIn 3s ease-in-out infinite;
}
.b1{ left:18px; bottom:120px; }
.b2{ right:18px; bottom:130px; animation-delay:1.2s; }

@keyframes bubbleIn{
  0%,30%{ opacity:0; transform:translateY(8px); }
  45%,75%{ opacity:1; transform:translateY(0); }
  100%{ opacity:0; transform:translateY(-6px); }
}

.story{
  margin:12px 0 0;
  opacity:.92;
  line-height:1.8;
  font-size:15px;
}

/* Staircase cartoon */
.stairs{
  position:relative;
  height:210px;
  border-radius:16px;
  overflow:hidden;
  background:radial-gradient(circle at 30% 20%, rgba(255,255,255,.10), transparent 55%),
             rgba(0,0,0,.22);
  border:1px solid rgba(255,255,255,.06);
}

.step{
  position:absolute;
  left:40px;
  height:18px;
  width:220px;
  border-radius:10px;
  background:rgba(255,255,255,.10);
}
.s1{ bottom:30px; }
.s2{ bottom:55px; left:55px; width:220px; }
.s3{ bottom:80px; left:70px; width:220px; }
.s4{ bottom:105px; left:85px; width:220px; }

.rail{
  position:absolute;
  left:35px; top:30px; bottom:20px;
  width:10px;
  border-radius:10px;
  background:rgba(255,77,136,.18);
}

.miniCouple{
  position:absolute;
  bottom:70px;
  left:62%;
  transform:translateX(-50%);
  display:flex;
  gap:12px;
  animation: cuddle 2.4s ease-in-out infinite;
}
@keyframes cuddle{
  0%,100%{ transform:translateX(-50%) translateY(0); }
  50%{ transform:translateX(-50%) translateY(-3px); }
}
.mini{
  width:24px;
  height:52px;
  border-radius:14px;
  background:rgba(255,77,136,.45);
  position:relative;
}
.mini:before{
  content:"";
  position:absolute;
  top:-14px; left:50%;
  transform:translateX(-50%);
  width:18px;height:18px;border-radius:50%;
  background:rgba(255,255,255,.85);
}
.mini.her{ background:rgba(255,255,255,.14); border:1px solid rgba(255,77,136,.25); }

.whisper{
  position:absolute;
  left:66%;
  bottom:135px;
  font-size:18px;
  opacity:0;
  animation: whisper 2.2s ease-in-out infinite;
}
@keyframes whisper{
  0%,40%{ opacity:0; transform:translateY(10px); }
  60%{ opacity:1; transform:translateY(0); }
  100%{ opacity:0; transform:translateY(-10px); }
}

.floatTxt{
  position:absolute;
  padding:7px 10px;
  border-radius:14px;
  background:rgba(0,0,0,.45);
  border:1px solid rgba(255,255,255,.10);
  font-size:13px;
  opacity:0;
  white-space:nowrap;
}
.t1{ left:18px; top:50px; animation: floatText 3s ease-in-out infinite; }
.t2{ left:18px; top:88px; animation: floatText 3s ease-in-out infinite; animation-delay:1.2s; }

@keyframes floatText{
  0%,25%{ opacity:0; transform:translateY(10px); }
  45%,75%{ opacity:1; transform:translateY(0); }
  100%{ opacity:0; transform:translateY(-10px); }
}

/* Ending */
.endScene{
  position:relative;
  padding:18px;
  text-align:center;
}
.endGlow{
  position:absolute;
  inset:-40px;
  background:radial-gradient(circle at 50% 40%, rgba(255,77,136,.22), transparent 60%);
  filter:blur(10px);
  opacity:.85;
}
.endText{
  position:relative;
  z-index:2;
  font-size:16px;
  line-height:1.8;
  opacity:.95;
  }
  /* ===== STEP 9: ONE DAY CARTOON ===== */
.futureScene{
  position:relative;
  height:240px;
  border-radius:16px;
  overflow:hidden;
  margin:10px 0 18px;
  background:radial-gradient(circle at 30% 20%, rgba(255,255,255,.11), transparent 60%),
             radial-gradient(circle at 80% 40%, rgba(255,77,136,.18), transparent 60%),
             rgba(0,0,0,.22);
  border:1px solid rgba(255,77,136,.18);
}

/* Stars */
.stars{
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 12% 18%, rgba(255,255,255,.9) 0 1px, transparent 2px),
    radial-gradient(circle at 28% 36%, rgba(255,255,255,.7) 0 1px, transparent 2px),
    radial-gradient(circle at 68% 22%, rgba(255,255,255,.85) 0 1px, transparent 2px),
    radial-gradient(circle at 82% 44%, rgba(255,255,255,.6) 0 1px, transparent 2px),
    radial-gradient(circle at 52% 12%, rgba(255,255,255,.75) 0 1px, transparent 2px);
  background-size:220px 220px;
  opacity:.22;
  animation: starMove 8s linear infinite;
}
@keyframes starMove{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-8px); }
  100%{ transform:translateY(0); }
}

/* Wedding arch */
.arch{
  position:absolute;
  top:18px;
  left:50%;
  transform:translateX(-50%);
  width:210px;
  height:120px;
}
.archTop{
  position:absolute;
  inset:0;
  border-radius:120px 120px 16px 16px;
  border:6px solid rgba(255,255,255,.18);
  border-bottom:none;
}
.flowers{
  position:absolute;
  font-size:18px;
  opacity:.95;
  filter:drop-shadow(0 6px 10px rgba(0,0,0,.35));
}
.f1{ left:8px; top:20px; }
.f2{ right:10px; top:16px; }
.f3{ left:50%; transform:translateX(-50%); top:8px; }

/* Couple */
.coupleWrap{
  position:absolute;
  left:50%;
  bottom:62px;
  transform:translateX(-50%);
  display:flex;
  gap:18px;
  align-items:flex-end;
  animation: cuddle 2.4s ease-in-out infinite;
}
@keyframes cuddle{
  0%,100%{ transform:translateX(-50%) translateY(0); }
  50%{ transform:translateX(-50%) translateY(-3px); }
}

.person{
  position:relative;
  width:62px;
  height:120px;
}
.pHair{
  position:absolute;
  top:4px;
  left:8px;
  width:46px;
  height:22px;
  border-radius:14px;
  background:rgba(255,255,255,.16);
}
.pHair.veil{
  background:rgba(255,77,136,.18);
  width:54px;
  left:4px;
}
.pHead{
  position:absolute;
  top:18px;
  left:14px;
  width:34px;
  height:34px;
  border-radius:50%;
  background:rgba(255,255,255,.88);
}
.pBody{
  position:absolute;
  top:56px;
  left:10px;
  width:42px;
  height:56px;
  border-radius:18px;
  background:rgba(255,77,136,.55);
}
.pBody.dress{
  background:rgba(255,255,255,.14);
  border:1px solid rgba(255,77,136,.22);
}

/* Ring */
.ring{
  position:absolute;
  left:50%;
  top:-10px;
  transform:translateX(-50%);
  font-size:22px;
  opacity:0;
  animation: ringPop 2.4s ease-in-out infinite;
}
@keyframes ringPop{
  0%,35%{ opacity:0; transform:translateX(-50%) translateY(12px) scale(.85); }
  55%{ opacity:1; transform:translateX(-50%) translateY(0) scale(1); }
  100%{ opacity:0; transform:translateX(-50%) translateY(-12px) scale(1.08); }
}

/* Caption */
.caption{
  position:absolute;
  left:50%;
  bottom:12px;
  transform:translateX(-50%);
  width:92%;
  max-width:640px;
  font-size:14px;
  opacity:.9;
  padding:8px 10px;
  border-radius:14px;
  background:rgba(0,0,0,.38);
  border:1px solid rgba(255,255,255,.08);
}

/* Floating hearts */
.floatHearts span{
  position:absolute;
  bottom:20px;
  font-size:16px;
  opacity:0;
  animation: floatMini 2.6s ease-in-out infinite;
}
.floatHearts span:nth-child(1){ left:20%; animation-delay:0s; }
.floatHearts span:nth-child(2){ left:50%; animation-delay:.6s; }
.floatHearts span:nth-child(3){ left:76%; animation-delay:1.1s; }

@keyframes floatMini{
  0%,35%{ opacity:0; transform:translateY(12px) scale(.9); }
  55%{ opacity:1; transform:translateY(0) scale(1); }
  100%{ opacity:0; transform:translateY(-18px) scale(1.06); }
}

/* Kids Scene */
.kidsScene{
  height:210px;
  background:radial-gradient(circle at 30% 30%, rgba(255,255,255,.10), transparent 60%),
             rgba(0,0,0,.20);
}
.home{
  position:absolute;
  left:50%;
  top:18px;
  transform:translateX(-50%);
  font-size:34px;
  opacity:.95;
  filter:drop-shadow(0 10px 18px rgba(0,0,0,.35));
}
.kidsRow{
  position:absolute;
  left:50%;
  bottom:68px;
  transform:translateX(-50%);
  display:flex;
  gap:16px;
}
.kid{
  font-size:22px;
  animation: kidJump 1.8s ease-in-out infinite;
}
.k2{ animation-delay:.35s; }
.k3{ animation-delay:.7s; }
@keyframes kidJump{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-10px); }
}
  /* ===== BIG SURPRISE PAGE ===== */
.surTop{ text-align:center; margin:10px 0 12px; }
.surTitle{ margin:0; color:#ff4d88; }
.surSub{ opacity:.85; font-size:14px; margin-top:6px; }

.surHero{
  position:relative;
  max-width:860px;
  margin:10px auto 18px;
  border-radius:18px;
  overflow:hidden;
  border:1px solid rgba(255,77,136,.22);
  background:radial-gradient(circle at 30% 20%, rgba(255,255,255,.12), transparent 60%),
             radial-gradient(circle at 80% 40%, rgba(255,77,136,.18), transparent 60%),
             rgba(0,0,0,.25);
  padding:18px 16px;
}
.surGlow{
  position:absolute; inset:-60px;
  background:radial-gradient(circle at 50% 35%, rgba(255,77,136,.26), transparent 60%);
  filter:blur(10px);
  opacity:.9;
}
.surHeroText{ position:relative; z-index:2; text-align:center; }
.surLine1{ font-size:18px; opacity:.9; }
.surLine2{ font-size:34px; font-weight:800; color:#ffd1e6; margin:4px 0; }
.surLine3{ font-size:14px; opacity:.85; }

.surHearts span{
  position:absolute;
  font-size:16px;
  opacity:0;
  animation: surFloat 2.8s ease-in-out infinite;
}
.surHearts span:nth-child(1){ left:16%; bottom:14px; animation-delay:0s; }
.surHearts span:nth-child(2){ left:40%; bottom:14px; animation-delay:.6s; }
.surHearts span:nth-child(3){ left:62%; bottom:14px; animation-delay:1.1s; }
.surHearts span:nth-child(4){ left:84%; bottom:14px; animation-delay:1.6s; }
@keyframes surFloat{
  0%,35%{ opacity:0; transform:translateY(10px) scale(.9); }
  55%{ opacity:1; transform:translateY(0) scale(1); }
  100%{ opacity:0; transform:translateY(-18px) scale(1.06); }
}

.surSection{
  max-width:860px;
  margin:0 auto 18px;
  background:linear-gradient(180deg, rgba(255,77,136,.10), rgba(255,255,255,.02));
  border:1px solid rgba(255,77,136,.18);
  border-radius:18px;
  padding:14px;
}
.surH3{ margin:0 0 8px; color:#ffd1e6; }
.surP{ margin:0 0 12px; opacity:.85; font-size:14px; }

.giftRow{
  display:flex;
  gap:12px;
  justify-content:center;
  flex-wrap:wrap;
}
.giftBig{
  position:relative;
  width:120px;
  height:120px;
  cursor:pointer;
  user-select:none;
}
.giftBox{
  position:absolute;
  left:0; right:0; bottom:0;
  height:86px;
  border-radius:16px;
  background:linear-gradient(180deg, rgba(255,77,136,.85), rgba(255,77,136,.55));
  box-shadow:0 18px 38px rgba(0,0,0,.45);
}
.giftLid{
  position:absolute;
  left:-4px; right:-4px;
  top:30px;
  height:34px;
  border-radius:16px;
  background:rgba(255,255,255,.12);
  transform-origin:center bottom;
  transition:transform .7s ease;
}
.giftBow{
  position:absolute;
  top:10px; left:50%;
  transform:translateX(-50%);
  font-size:26px;
  transition:transform .7s ease, opacity .7s ease;
}
.giftTag{
  position:absolute;
  bottom:-22px; left:50%;
  transform:translateX(-50%);
  font-size:13px;
  opacity:.8;
}
.giftBig.open .giftLid{ transform:rotateX(180deg) translateY(-10px); }
.giftBig.open .giftBow{ transform:translateX(-50%) translateY(-8px) scale(.95); opacity:.8; }

.giftReveal{ margin-top:16px; }
.giftCard{
  background:rgba(0,0,0,.28);
  border:1px solid rgba(255,77,136,.18);
  border-radius:18px;
  padding:14px;
  text-align:center;
}
.giftTitle{ font-size:18px; margin-bottom:6px; color:#ffd1e6; }
.giftText{ opacity:.9; line-height:1.8; }

.promiseGrid{
  display:grid;
  grid-template-columns:1fr;
  gap:10px;
}
@media (min-width:700px){
  .promiseGrid{ grid-template-columns:1fr 1fr 1fr; }
}
.promiseCard{
  padding:12px;
  border-radius:16px;
  background:rgba(0,0,0,.25);
  border:1px solid rgba(255,255,255,.08);
  text-align:center;
  opacity:.92;
}

.tapGame{ text-align:center; }
.tapHeart{
  width:92px; height:92px;
  border-radius:26px;
  font-size:34px;
  border:none;
  background:rgba(255,77,136,.18);
  border:1px solid rgba(255,77,136,.28);
}
.tapCount{ margin-top:10px; opacity:.85; }
.tapSecret{
  margin-top:10px;
  padding:12px;
  border-radius:16px;
  background:rgba(0,0,0,.25);
  border:1px solid rgba(255,77,136,.18);
  display:none;
  line-height:1.8;
}
.tapSecret.show{ display:block; }

.collage{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:10px;
}
.ph{
  height:90px;
  border-radius:16px;
  background:rgba(0,0,0,.25);
  border:1px dashed rgba(255,77,136,.28);
  display:flex;
  align-items:center;
  justify-content:center;
  opacity:.8;
  font-size:13px;
}
@media (min-width:700px){
  .ph{ height:120px; }
}

.surFinal{
  position:relative;
  max-width:860px;
  margin:0 auto 18px;
  border-radius:18px;
  overflow:hidden;
  border:1px solid rgba(255,77,136,.22);
  background:rgba(0,0,0,.25);
  padding:18px;
  text-align:center;
}
.finalGlow{
  position:absolute; inset:-70px;
  background:radial-gradient(circle at 50% 40%, rgba(255,77,136,.28), transparent 65%);
  filter:blur(12px);
  opacity:.9;
}
.finalText{ position:relative; z-index:2; opacity:.95; line-height:1.9; }
.finalBig{ font-size:20px; font-weight:800; color:#ffd1e6; margin-top:8px; }
.finalSmall{ opacity:.9; margin-top:4px; }

.surBottomBtns{
  max-width:860px;
  margin:0 auto 30px;
  display:flex;
  justify-content:center;
}
  /* ===== FOREVER ENDING (FIREWORKS) ===== */
#foreverPage{ overflow:hidden; }
#fireCanvas{
  position:fixed;
  inset:0;
  width:100vw;
  height:100vh;
  z-index:1;
}

.foreverWrap{
  position:fixed;
  inset:0;
  z-index:2;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:22px;
  pointer-events:none;
}

.foreverGlow{
  position:absolute;
  inset:-90px;
  background:radial-gradient(circle at 50% 40%, rgba(255,77,136,.30), transparent 65%);
  filter:blur(16px);
  opacity:.95;
}

.foreverTitle{
  position:relative;
  z-index:2;
  font-size:28px;
  font-weight:900;
  color:#ffd1e6;
  text-shadow:0 18px 60px rgba(0,0,0,.7);
  animation: foreverPulse 1.9s ease-in-out infinite;
}
@keyframes foreverPulse{
  0%,100%{ transform:scale(1); }
  50%{ transform:scale(1.03); }
}

.foreverSub{
  position:relative;
  z-index:2;
  margin-top:10px;
  font-size:14px;
  opacity:.88;
  line-height:1.7;
  max-width:720px;
}

.foreverBig{
  position:relative;
  z-index:2;
  margin-top:16px;
  font-size:20px;
  font-weight:900;
  color:#ffd1e6;
  line-height:1.3;
}
.foreverSmall{
  position:relative;
  z-index:2;
  margin-top:6px;
  opacity:.9;
}

.foreverBtns{
  position:relative;
  z-index:3;
  margin-top:18px;
  display:flex;
  gap:10px;
  pointer-events:auto;
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
      <button onclick="show('surprisePage')">Surprise For Us 🎁</button>
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


<!-- MEMORIES PAGE (STEP 8 - CARTOON) -->
<div id="memoriesPage" class="page scrollPage">
  <h2 class="title" style="color:#ff4d88;">Memories 🪵</h2>

  <div class="card">
    <!-- Scene 1: Tuition Bench -->
    <div class="scene">
      <div class="sceneTitle">Tuition Class 🌙</div>

      <div class="classroom">
        <div class="chalkBoard">Tuition</div>

        <div class="bench"></div>
        <div class="tableTop"></div>

        <div class="kid meKid">
          <div class="hair"></div>
          <div class="head"></div>
          <div class="body"></div>
        </div>

        <div class="kid herKid">
          <div class="hair hair2"></div>
          <div class="head"></div>
          <div class="body body2"></div>
        </div>

        <div class="tinyHeart">💗</div>
        <div class="tinyHeart h2">💗</div>
        <div class="tinyHeart h3">💗</div>

        <div class="bubble b1">👀 first look…</div>
        <div class="bubble b2">🙈 secret smiles…</div>
      </div>

      <p class="story">
        That long wooden bench… that long table… and you sitting there like it’s normal.
        But for me, that day quietly became special. I didn’t know it was the beginning of “us”.
      </p>
    </div>

    <!-- Scene 2: Staircase Secret Talk -->
    <div class="scene">
      <div class="sceneTitle">Second Floor Stairs 🏫</div>

      <div class="stairs">
        <div class="step s1"></div>
        <div class="step s2"></div>
        <div class="step s3"></div>
        <div class="step s4"></div>
        <div class="rail"></div>

        <div class="miniCouple">
          <div class="mini me"></div>
          <div class="mini her"></div>
        </div>

        <div class="whisper">🤫</div>
        <div class="floatTxt t1">“just 2 mins…”</div>
        <div class="floatTxt t2">“don’t let anyone see…”</div>
      </div>

      <p class="story">
        And those staircase moments… where we acted like strangers in front of everyone,
        but inside… we were building our own little world quietly.
      </p>
    </div>

    <!-- Scene 3: Big Feelings -->
    <div class="scene endScene">
      <div class="endGlow"></div>
      <div class="endText">
        Some places became memories… not because of the place…  
        but because <b>YOU</b> were there. 🩷
      </div>
    </div>

    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
      <button class="btnDark" onclick="show('optionsPage')">Back 🌙</button>
    </div>
  </div>
</div>

<!-- ONE DAY PAGE (STEP 9 - CARTOON) -->
<div id="oneDayPage" class="page scrollPage">
  <h2 class="title" style="color:#ff4d88;">One Day 💍</h2>

  <div class="card">

    <!-- Scene: Wedding -->
    <div class="futureScene">
      <div class="stars"></div>

      <div class="arch">
        <div class="archTop"></div>
        <div class="flowers f1">🌸</div>
        <div class="flowers f2">🌸</div>
        <div class="flowers f3">🌸</div>
      </div>

      <div class="coupleWrap">
        <div class="person groom">
          <div class="pHair"></div>
          <div class="pHead"></div>
          <div class="pBody"></div>
        </div>

        <div class="person bride">
          <div class="pHair veil"></div>
          <div class="pHead"></div>
          <div class="pBody dress"></div>
        </div>

        <div class="ring">💍</div>
      </div>

      <div class="caption">“One day… I’ll hold your hand like this forever.”</div>

      <div class="floatHearts">
        <span>💗</span><span>💗</span><span>💗</span>
      </div>
    </div>

    <!-- Scene: Kids + Home -->
    <div class="futureScene kidsScene">
      <div class="home">🏡</div>

      <div class="kidsRow">
        <div class="kid k1">👶</div>
        <div class="kid k2">🧒</div>
        <div class="kid k3">👧</div>
      </div>

      <div class="caption">A small home… noisy laughs… and you as my peace 🩷</div>

      <div class="floatHearts">
        <span>✨</span><span>💗</span><span>✨</span>
      </div>
    </div>

    <!-- Text -->
    <p style="margin-top:14px;">
      One day… not in a rush, not in a dream — in real life…  
      I want a peaceful home where your laugh is the happiest sound.
    </p>

    <p style="opacity:.9;">
      Morning tea, silly jokes, small fights, holding hands in crowds…  
      I don’t want a perfect life… I want a life with you. 🩷
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
  const raw = document.getElementById("passwordInput").value || "";

  // convert "01-03-2025" or "01032025" both to 01032025
  const entered = raw.replace(/\D/g, "");

  if(entered === "01032025"){
    show("envelopePage");
// make sure envelopePage exists
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
  <!-- SURPRISE PAGE (BIG) -->
<div id="surprisePage" class="page scrollPage">
  <div class="surTop">
    <h2 class="surTitle">Surprise For Us 💞</h2>
    <div class="surSub">A small world… built only for you & me.</div>
  </div>

  <!-- Big hero -->
  <div class="surHero">
    <div class="surGlow"></div>
    <div class="surHeroText">
      <div class="surLine1">You + Me</div>
      <div class="surLine2">= “Us”</div>
      <div class="surLine3">Forever vibe only 🩷</div>
    </div>

    <div class="surHearts">
      <span>💗</span><span>💗</span><span>💗</span><span>💗</span>
    </div>
  </div>

  <!-- Section: 3 gifts -->
  <div class="surSection">
    <h3 class="surH3">Open 3 Gifts 🎁</h3>
    <p class="surP">Tap each gift… it will reveal something about “us”.</p>

    <div class="giftRow">
      <div class="giftBig" onclick="openGiftCard(1)">
        <div class="giftLid"></div>
        <div class="giftBow">🎀</div>
        <div class="giftBox"></div>
        <div class="giftTag">Gift 1</div>
      </div>

      <div class="giftBig" onclick="openGiftCard(2)">
        <div class="giftLid"></div>
        <div class="giftBow">🎀</div>
        <div class="giftBox"></div>
        <div class="giftTag">Gift 2</div>
      </div>

      <div class="giftBig" onclick="openGiftCard(3)">
        <div class="giftLid"></div>
        <div class="giftBow">🎀</div>
        <div class="giftBox"></div>
        <div class="giftTag">Gift 3</div>
      </div>
    </div>

    <div id="giftReveal" class="giftReveal">
      <div class="giftCard">
        <div id="giftTitle" class="giftTitle">💌</div>
        <div id="giftText" class="giftText">Tap a gift above…</div>
      </div>
    </div>
  </div>

  <!-- Section: Our Mini Promise -->
  <div class="surSection">
    <h3 class="surH3">Our Promise 🩷</h3>
    <div class="promiseGrid">
      <div class="promiseCard">I’ll protect your peace.</div>
      <div class="promiseCard">I’ll respect your heart.</div>
      <div class="promiseCard">I’ll stay, even in silence.</div>
      <div class="promiseCard">I’ll choose you—again & again.</div>
      <div class="promiseCard">I’ll love you gently.</div>
      <div class="promiseCard">I’ll be your safe place.</div>
    </div>
  </div>

  <!-- Section: Tiny game -->
  <div class="surSection">
    <h3 class="surH3">Mini Game 🎯</h3>
    <p class="surP">Tap the heart 7 times… a secret message will unlock.</p>

    <div class="tapGame">
      <button class="tapHeart" onclick="tapHeartGame()">💗</button>
      <div id="tapCount" class="tapCount">0 / 7</div>
      <div id="tapSecret" class="tapSecret"> </div>
    </div>
  </div>

  <!-- Section: Photo placeholders (big) -->
  <div class="surSection">
    <h3 class="surH3">Our Collage 📸</h3>
    <p class="surP">Later you can replace these with your photos.</p>

    <div class="collage">
      <div class="ph">Photo 1</div>
      <div class="ph">Photo 2</div>
      <div class="ph">Photo 3</div>
      <div class="ph">Photo 4</div>
      <div class="ph">Photo 5</div>
      <div class="ph">Photo 6</div>
    </div>
  </div>

  <!-- Final secret -->
  <div class="surFinal">
    <div class="finalGlow"></div>
    <div class="finalText">
      Whatever happens… I’m still choosing you.  
      <div class="finalBig">I Love You suttumaniiii ❤️💋</div>
      <div class="finalSmall">ummahhhh 💋💋💋</div>
    </div>
  </div>

  <div class="surBottomBtns">
    <button class="btnDark" onclick="show('optionsPage')">Back 🌙</button>
  </div>
</div>
  <div class="surBottomBtns" style="gap:10px;">
  <button class="btnDark" onclick="show('optionsPage')">Back 🌙</button>
<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
  <button class="btnDark" onclick="show('loveFloodPage')">Back 🌊</button>
  <button onclick="goToForever()">Finish 🎆</button>
</div>
  /* ===== Surprise Page Logic ===== */
let tapCount = 0;

function openGiftCard(n){
  // open animation on clicked gift
  const gifts = document.querySelectorAll(".giftBig");
  if(gifts[n-1]) gifts[n-1].classList.add("open");

  const title = document.getElementById("giftTitle");
  const text = document.getElementById("giftText");

  if(n === 1){
    title.textContent = "💌 Open when you miss me";
    text.textContent =
      "Close your eyes for 2 seconds… imagine I’m holding your hand. Even if we are not together now, my heart is always with you.";
  }
  if(n === 2){
    title.textContent = "🩷 Our small promise";
    text.textContent =
      "No pressure, no fear… only care. I’ll respect you, protect your peace, and love you in a way that feels safe and real.";
  }
  if(n === 3){
    title.textContent = "✨ The US secret";
    text.textContent =
      "From the moment you entered my life, everything felt softer. I don’t want perfect life… I want a life with YOU. I Love You suttumaniiii ❤️💋";
  }
}

function tapHeartGame(){
  tapCount++;
  const c = document.getElementById("tapCount");
  const s = document.getElementById("tapSecret");

  if(c) c.textContent = `${Math.min(tapCount,7)} / 7`;

  if(tapCount >= 7){
    if(s){
      s.classList.add("show");
      s.innerHTML =
        "Unlocked 💖<br><b>Two hearts.</b> One story.<br>And I want the next chapters only with you. 🩷";
    }
  }
    }
  function goToLoveFlood(){
  show("loveFloodPage");
  startLoveFlood();   // start the flood animation
    }
  <!-- FOREVER ENDING PAGE (OPTION A) -->
<div id="foreverPage" class="page">
  <canvas id="fireCanvas"></canvas>

  <div class="foreverWrap">
    <div class="foreverGlow"></div>

    <div class="foreverTitle">WE ARE FOREVER 💗</div>
    <div class="foreverSub">
      Not perfect… but real.  
      Not loud… but deep.  
      Always “us”. 🩷
    </div>

    <div class="foreverBig">
      I LOVE YOU SUTTUMANIII ❤️💋
    </div>
    <div class="foreverSmall">ummahhhh 💋💋💋</div>

    <div class="foreverBtns">
      <button class="btnDark" onclick="show('optionsPage')">Home 🌙</button>
      <button onclick="show('lockPage')">Lock 🔒</button>
    </div>
  </div>
</div>
  /* ===== GO TO FOREVER + FIREWORKS ===== */
let fireRunning = false;
let fireRAF = null;

function goToForever(){
  show("foreverPage");
  startFireworks();
}

function startFireworks(){
  if(fireRunning) return;
  fireRunning = true;

  const canvas = document.getElementById("fireCanvas");
  if(!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  function resize(){
    canvas.width = Math.floor(window.innerWidth * devicePixelRatio);
    canvas.height = Math.floor(window.innerHeight * devicePixelRatio);
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(1,0,0,1,0,0);
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [];
  function burst(x,y){
    const n = 26 + Math.floor(Math.random()*18);
    for(let i=0;i<n;i++){
      const a = Math.random()*Math.PI*2;
      const s = 1.2 + Math.random()*2.6;
      particles.push({
        x,y,
        vx: Math.cos(a)*s,
        vy: Math.sin(a)*s,
        life: 40 + Math.random()*30,
        r: 2 + Math.random()*2.6,
        alpha: 1
      });
    }
  }

  let t = 0;
  function tick(){
    const page = document.getElementById("foreverPage");
    if(!page || !page.classList.contains("active")){
      stopFireworks();
      return;
    }

    t++;
    // soft fade background
    ctx.fillStyle = "rgba(0,0,0,0.20)";
    ctx.fillRect(0,0,window.innerWidth, window.innerHeight);

    // create bursts
    if(t % 18 === 0){
      burst(
        60 + Math.random()*(window.innerWidth-120),
        70 + Math.random()*(window.innerHeight*0.45)
      );
    }

    for(let i=particles.length-1;i>=0;i--){
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03;              // gravity
      p.life -= 1;
      p.alpha = Math.max(0, p.life/70);

      ctx.beginPath();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = "rgba(255,209,230,1)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();

      if(p.life <= 0) particles.splice(i,1);
    }
    ctx.globalAlpha = 1;

    fireRAF = requestAnimationFrame(tick);
  }
  tick();
}

function stopFireworks(){
  fireRunning = false;
  if(fireRAF) cancelAnimationFrame(fireRAF);
  fireRAF = null;
}

/* Optional: auto stop fireworks when leaving forever page (if your show() isn't wrapped already) */
(function hookForeverStop(){
  const oldShow = window.show;
  window.show = function(pageId){
    oldShow(pageId);
    if(pageId !== "foreverPage") stopFireworks();
    if(pageId === "foreverPage") startFireworks();
  };
})();
</script>

</body>
</html>

