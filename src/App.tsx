<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رادار 1</title>
    <style>
        body { background: #000; color: #fff; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
        .container { text-align: center; border: 1px solid #FFD700; padding: 40px; border-radius: 30px; background: #111; width: 320px; }
        .gold { color: #FFD700; }
        input { width: 90%; padding: 15px; margin-bottom: 20px; border-radius: 10px; border: 1px solid #FFD700; background: #222; color: #fff; font-size: 1.5rem; text-align: center; }
        button { width: 100%; padding: 15px; background: #FFD700; color: #000; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 1.2rem; }
        .radar { width: 200px; height: 200px; border: 2px solid #004400; border-radius: 50%; margin: 20px auto; position: relative; background: radial-gradient(circle, #001a00, #000); overflow: hidden; display: none; }
        .scan { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 50%, rgba(0, 255, 0, 0.2) 100%); transform-origin: top left; animation: scan 4s linear infinite; }
        @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .hidden { display: none; }
    </style>
</head>
<body>
    <div class="container" id="login">
        <h1 class="gold">رادار 1</h1>
        <input type="password" id="pass" placeholder="الرمز السري">
        <button onclick="enter()">دخول</button>
    </div>
    <div class="container hidden" id="radar-box">
        <h2 class="gold">جاري التتبع...</h2>
        <div class="radar" id="r-circ" style="display:block;"><div class="scan"></div></div>
        <p>متصل بالأقمار الصناعية</p>
    </div>
    <script>
        function enter() {
            if(document.getElementById('pass').value === '663766') {
                document.getElementById('login').classList.add('hidden');
                document.getElementById('radar-box').classList.remove('hidden');
            } else { alert('خطأ!'); }
        }
    </script>
</body>
</html>
