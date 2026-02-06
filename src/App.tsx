<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رادار 1 - نظام عبدالمعطي</title>
    <style>
        body { background-color: #000; color: #fff; font-family: sans-serif; margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        #app { width: 100%; max-width: 400px; text-align: center; padding: 20px; }
        .gold { color: #FFD700; text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
        .card { background: #111; padding: 30px; border-radius: 25px; border: 1px solid #FFD700; box-shadow: 0 0 30px rgba(255, 215, 0, 0.1); }
        input { padding: 15px; border-radius: 12px; border: 2px solid #FFD700; background: #222; color: #fff; font-size: 1.8rem; width: 80%; text-align: center; margin-bottom: 20px; outline: none; }
        button { padding: 15px; background: #FFD700; color: #000; border: none; border-radius: 12px; font-weight: bold; width: 90%; cursor: pointer; font-size: 1.2rem; }
        .radar { width: 220px; height: 220px; border: 2px solid #004400; border-radius: 50%; margin: 30px auto; position: relative; background: radial-gradient(circle, #001a00, #000); overflow: hidden; }
        .scan { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 50%, rgba(0, 255, 0, 0.2) 100%); transform-origin: top left; animation: scan 4s linear infinite; }
        .point { position: absolute; width: 10px; height: 10px; background: #FFD700; border-radius: 50%; top: 30%; left: 60%; box-shadow: 0 0 10px #FFD700; }
        @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .hidden { display: none; }
    </style>
</head>
<body>
    <div id="app">
        <div id="login">
            <h1 style="font-size: 5rem;">🦅</h1>
            <h1 class="gold">رادار 1</h1>
            <div class="card">
                <input type="password" id="pin" placeholder="****">
                <button onclick="enter()">دخول للنظام</button>
            </div>
        </div>
        <div id="main" class="hidden">
            <h2 class="gold">نظام التتبع النشط 📡</h2>
            <div class="radar">
                <div class="scan"></div>
                <div class="point"></div>
            </div>
            <h3 style="color: #0f0;">جاري المسح... متصل بالستلايت</h3>
            <p style="color: #888;">الموقع: المملكة العربية السعودية</p>
            <button onclick="location.reload()" style="background: #222; color: #FFD700; margin-top: 20px; width: 50%; font-size: 0.8rem;">خروج</button>
        </div>
    </div>
    <script>
        function enter() {
            if (document.getElementById('pin').value === '663766') {
                document.getElementById('login').classList.add('hidden');
                document.getElementById('main').classList.remove('hidden');
            } else { alert('الرمز السري خطأ!'); }
        }
    </script>
</body>
</html>
