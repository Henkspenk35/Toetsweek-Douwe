<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
  <title>Flashcards App</title>
  <meta name="theme-color" content="#2c3e50">
  <style>
    :root { --primary:#2c3e50; --blue:#3498db; --orange:#f39c12; --bg:#f4f7f6; --card:#ffffff; }
    *{box-sizing:border-box}
    body{
      margin:0; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      background:var(--bg); color:var(--primary);
    }
    .wrap{max-width:980px; margin:0 auto; padding:20px;}
    h1{margin:6px 0 8px; font-size:2rem}
    .sub{color:#5e6b78; line-height:1.45; margin:0 0 18px}
    .topcard{
      background:linear-gradient(135deg,#2c3e50,#3c5d7d);
      color:white; border-radius:24px; padding:22px; box-shadow:0 10px 26px rgba(0,0,0,.12);
      margin-bottom:18px;
    }
    .grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:14px;}
    .tile{
      display:block; text-decoration:none; color:inherit; background:var(--card); border-radius:20px; padding:18px;
      box-shadow:0 6px 18px rgba(0,0,0,.07); border:1px solid #e8ecef; transition:transform .15s ease, box-shadow .15s ease;
    }
    .tile:hover{transform:translateY(-2px); box-shadow:0 10px 22px rgba(0,0,0,.09)}
    .badge{display:inline-block; font-size:.74rem; font-weight:800; letter-spacing:.06em; text-transform:uppercase; border-radius:999px; padding:6px 10px; margin-bottom:10px;}
    .taal{background:#eef5fb; color:#28506b}
    .theorie{background:#fdf2e3; color:#9a5d00}
    .title{font-size:1.08rem; font-weight:800; line-height:1.25; margin-bottom:6px}
    .desc{font-size:.94rem; color:#64707c; line-height:1.4}
    .footer{margin-top:24px; font-size:.9rem; color:#66727d}
    .small{font-size:.85rem; color:#7a8794}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="topcard">
      <div style="font-size:.8rem; opacity:.8; text-transform:uppercase; letter-spacing:.08em; font-weight:700;">Startpagina</div>
      <h1>Flashcards App</h1>
      <p class="sub" style="color:#e7edf3; margin-bottom:0;">Alle losse vakbestanden zijn hier samengebracht in één eenvoudige startpagina. Open een vak en leer verder in de bestaande trainer.</p>
    </div>

    <div class="grid">
      <a class="tile" href="frans_u45.html">
        <span class="badge taal">Frans</span>
        <div class="title">Frans U4–5</div>
        <div class="desc">Woordenschattrainer met omdraaien, markeren, filter en woordenlijst.</div>
      </a>

      <a class="tile" href="engels_zinnen_u45.html">
        <span class="badge taal">Engels</span>
        <div class="title">Engels zinnen U4–5</div>
        <div class="desc">Zinnen en woordenschat in flashcardvorm.</div>
      </a>

      <a class="tile" href="engels_phrases_u45.html">
        <span class="badge taal">Engels</span>
        <div class="title">Engels phrases U4–5</div>
        <div class="desc">Phrases en uitdrukkingen in een aparte trainer.</div>
      </a>

      <a class="tile" href="engelse_grammatica_1vwo.html">
        <span class="badge theorie">Grammatica</span>
        <div class="title">Engelse grammatica 1VWO</div>
        <div class="desc">Regelkaarten, toetsdrill en overzicht.</div>
      </a>

      <a class="tile" href="latijn_basiswoorden.html">
        <span class="badge taal">Latijn</span>
        <div class="title">Latijn basiswoorden</div>
        <div class="desc">Basiswoorden met dezelfde flashcardlogica.</div>
      </a>

      <a class="tile" href="nederlands_begrippen.html">
        <span class="badge theorie">Nederlands</span>
        <div class="title">Nederlands begrippen</div>
        <div class="desc">Fictie, personages, spanning en argumentatie.</div>
      </a>

      <a class="tile" href="biologie_thema4.html">
        <span class="badge theorie">Biologie</span>
        <div class="title">Biologie thema 4</div>
        <div class="desc">Stevigheid en beweging, zonder het skelet-overzicht.</div>
      </a>

      <a class="tile" href="frans_u45_basis.html">
        <span class="badge taal">Frans</span>
        <div class="title">Frans U4–5 basisversie</div>
        <div class="desc">Oudere of eenvoudigere versie van de Franse trainer.</div>
      </a>
    </div>

    <div class="footer">
      <div>Tip: zet deze map op GitHub Pages en gebruik <strong>index.html</strong> als startpagina.</div>
      <div class="small">Alle bestaande vakbestanden blijven los beschikbaar, maar voelen nu als één app.</div>
    </div>
  </div>
</body>
</html>