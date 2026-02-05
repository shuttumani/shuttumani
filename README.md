index. html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Our Classroom World</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Georgia", serif;
    }

    body {
      background: linear-gradient(#fbeee6, #e8d8c3);
      min-height: 100vh;
      overflow-x: hidden;
    }

    header {
      text-align: center;
      padding: 30px 10px;
      font-size: 2rem;
      color: #5a3e2b;
    }

    .classroom {
      width: 100%;
      padding: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
    }

    .bench-row {
      display: flex;
      gap: 20px;
    }

    .bench {
      width: 160px;
      height: 80px;
      background: linear-gradient(#c49a6c, #8b5a2b);
      border-radius: 10px;
      position: relative;
      box-shadow: 0 8px 0 #5a3e2b;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .bench:hover {
      transform: translateY(-5px);
    }

    .bench::before {
      content: "";
      position: absolute;
      bottom: -25px;
      left: 15px;
      width: 20px;
      height: 25px;
      background: #5a3e2b;
      border-radius: 0 0 5px 5px;
    }

    .bench::after {
      content: "";
      position: absolute;
      bottom: -25px;
      right: 15px;
      width: 20px;
      height: 25px;
      background: #5a3e2b;
      border-radius: 0 0 5px 5px;
    }

    .note {
      margin-top: 40px;
      font-size: 1.1rem;
      color: #6b4b34;
      opacity: 0.8;
    }

    @media (max-width: 600px) {
      .bench {
        width: 120px;
        height: 65px;
      }
    }
  </style>
</head>

<body>

  <header>
    🌸 A Classroom Where Stories Begin 🌸
  </header>

  <section class="classroom">

    <div class="bench-row">
      <div class="bench"></div>
      <div class="bench"></div>
    </div>

    <div class="bench-row">
      <div class="bench"></div>
      <div class="bench"></div>
    </div>

    <div class="bench-row">
      <div class="bench"></div>
      <div class="bench"></div>
    </div>

    <div class="note">
      Some benches remember glances, smiles, and unfinished stories…
    </div>

  </section>

</body>
</html>
