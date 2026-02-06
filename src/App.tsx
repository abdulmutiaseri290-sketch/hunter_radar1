<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رادار 1 - نسخة عبدالمعطي</title>
    <style>
        body { background: #000; color: #fff; font-family: sans-serif; margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        .box { width: 90%; max-width: 400px; text-align: center; border: 1px solid #FFD700; padding: 30px; border-radius: 25px; background: #111; box-shadow: 0 0 30px rgba(255, 215, 0, 0.1); }
        .gold { color: #FFD700; }
        input { width: 85%; padding: 15px; margin: 20px 0; border-radius: 12px; border: 2px solid #FFD700; background: #222; color: #fff; font-size: 1.8rem; text-align: center; outline: none; }
        button { width: 95%; padding: 15px; background: #FFD700; color: #000; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; font-size: 1.3rem; }
        .radar { width: 220px; height: 220px; border: 2px solid #004400; border-radius: 50%; margin: 30px auto; position: relative; background: radial-gradient(circle, #001a00, #000); overflow: hidden; display: none; }
        .scan { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 50%, rgba(0, 255, 0, 0.3) 100%); transform-origin: top left; animation: scan 4s linear infinite; }
        @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .hidden { display: none; }
    </style>
</head>
<body>
    <div class="box" id="loginBox">
        <h1 style="font-size: 5rem; margin: 0;">🦅</h1>
        <h1 class="gold">رادار 1</h1>
        <p style="color: #888;">نظام تتبع الصقور المطور</p>
        <input type="password" id="pin" placeholder="****">
        <button onclick="check()">دخول للنظام</button>
    </div>

    <div class="box hidden" id="radarBox">
        <h2 class="gold">نظام التتبع النشط 📡</h2>
        <div class="radar" id="radarCircle" style="display: block;">
            <div class="scan"></div>
            <div style="position: absolute; top: 30%; left: 60%; width: 10px; height: 10px; background: #FFD700; border-radius: 50%; box-shadow: 0 0 10px #FFD700;"></div>
        </div>
        <h3 style="color: #0f0;">جاري المسح النشط...</h3>
        <p style="color: #FFD700;">الموقع: صحراء المملكة</p>
        <button onclick="location.reload()" style="background: #222; color: #FFD700; margin-top: 20px; font-size: 0.9rem;">تسجيل خروج</button>
    </div>

    <script>
        function check() {
            if (document.getElementById('pin').value === '663766') {
                document.getElementById('loginBox').classList.add('hidden');
                document.getElementById('radarBox').classList.remove('hidden');
            } else { alert('الرمز السري خطأ يا مدير!'); }
        }
    </script>
</body>
</html>
