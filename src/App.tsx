<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رادار 1</title>
    <style>
        body { background: #000; color: #fff; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
        .box { text-align: center; border: 1px solid #FFD700; padding: 40px; border-radius: 30px; background: #111; width: 320px; box-shadow: 0 0 30px rgba(255, 215, 0, 0.2); }
        input { width: 85%; padding: 15px; margin: 20px 0; border-radius: 12px; border: 2px solid #FFD700; background: #222; color: #fff; font-size: 1.5rem; text-align: center; outline: none; }
        button { width: 100%; padding: 15px; background: #FFD700; color: #000; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; font-size: 1.2rem; }
        .radar { width: 200px; height: 200px; border: 2px solid #004400; border-radius: 50%; margin: 20px auto; position: relative; background: radial-gradient(circle, #001a00, #000); overflow: hidden; display: none; }
        .scan { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 50%, rgba(0, 255, 0, 0.3) 100%); transform-origin: top left; animation: scan 4s linear infinite; }
        @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .hidden { display: none; }
    </style>
</head>
<body>
    <div class="box" id="L">
        <h1 style="color: #FFD700;">🦅 رادار 1</h1>
        <input type="password" id="p" placeholder="الرمز السري">
        <button onclick="go()">دخول</button>
    </div>
    <div class="box hidden" id="R">
        <h2 style="color: #FFD700;">جاري التتبع... 📡</h2>
        <div class="radar" id="c" style="display:block;"><div class="scan"></div></div>
        <p style="color: #0f0;">متصل بالأقمار الصناعية</p>
    </div>
    <script>
        function go() {
            if(document.getElementById('p').value === '663766') {
                document.getElementById('L').classList.add('hidden');
                document.getElementById('R').classList.remove('hidden');
            } else { alert('خطأ!'); }
        }
    </script>
</body>
</html>
