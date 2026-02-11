index.html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Our Story</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: black;
  color: white;
  overflow: hidden;
}

/* Every page */
.page {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Active page */
.page.active {
  display: flex;
}

/* Simple button */
button {
  padding: 10px 20px;
  margin-top: 20px;
  background: hotpink;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
}
</style>
</head>

<body>

<!-- PAGE 1 -->
<div id="lockPage" class="page active">
  <h1>Lock Page</h1>
  <button onclick="show('envelopePage')">Go to Envelope</button>
</div>

<!-- PAGE 2 -->
<div id="envelopePage" class="page">
  <h1>Envelope Page</h1>
  <button onclick="show('letterPage')">Go to Letter</button>
</div>

<!-- PAGE 3 -->
<div id="letterPage" class="page">
  <h1>Letter Page</h1>
  <button onclick="show('countdownPage')">Go to Countdown</button>
</div>

<!-- PAGE 4 -->
<div id="countdownPage" class="page">
  <h1>Countdown Page</h1>
  <button onclick="show('lockPage')">Back to Start</button>
</div>

<script>
function show(pageId) {
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(page) {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}
</script>

</body>
</html>
