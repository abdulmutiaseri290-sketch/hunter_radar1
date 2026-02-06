<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة رادار 1 - النسخة المتكاملة</title>
    <style>
        /* التنسيق العام */
        body { background: #000; color: #fff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding-bottom: 70px; direction: rtl; }
        .container { padding: 20px; text-align: center; max-width: 500px; margin: auto; }
        .gold { color: #FFD700; }
        .hidden { display: none; }

        /* شاشة الدخول */
        .login-box { border: 1px solid #FFD700; padding: 40px; border-radius: 30px; background: #111; margin-top: 50px; box-shadow: 0 0 30px rgba(255, 215, 0, 0.2); }
        input[type="password"] { width: 80%; padding: 15px; margin: 20px 0; border-radius: 12px; border: 2px solid #FFD700; background: #222; color: #fff; font-size: 1.5rem; text-align: center; outline: none; }
        .btn-main { width: 100%; padding: 15px; background: #FFD700; color: #000; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; font-size: 1.2rem; }

        /* الرادار */
        .radar-box { width: 250px; height: 250px; border: 2px solid #004400; border-radius: 50%; margin: 30px auto; position: relative; background: radial-gradient(circle, #001a00, #000); overflow: hidden; box-shadow: 0 0 20px #004400; }
        .scan { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 50%, rgba(0, 255, 0, 0.3) 100%); transform-origin: top left; animation: scan 4s linear infinite; }
        .point { position: absolute; width: 10px; height: 10px; background: #FFD700; border-radius: 50%; top: 35%; left: 65%; box-shadow: 0 0 15px #FFD700; animation: pulse 1.5s infinite; }
        @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } }

        /* الدردشة */
        .chat-area { background: #111; border: 1px solid #333; height: 350px; border-radius: 15px; margin: 20px 0; padding: 15px; overflow-y: auto; text-align: right; }
        .msg { background: #222; padding: 10px; border-radius: 10px; margin-bottom: 10px; border-right: 4px solid #FFD700; }
        .chat-input-row { display: flex; gap: 10px; }
        input[type="text"] { flex: 1; padding: 12px; border-radius: 10px; border: 1px solid #FFD700; background: #000; color: #fff; }

        /* الفزعة */
        .fazaa-btn { background: #ff0000; color: #fff; padding: 20px; border-radius: 15px; border: none; width: 100%; font-weight: bold; font-size: 1.5rem; margin-top: 20px; cursor: pointer; animation: blink 1s infinite; box-shadow: 0 0 20px rgba(255,0,0,0.4); }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }

        /* المنيو السفلي */
        .nav-bar { position: fixed; bottom: 0; width: 100%; background: #111; display: flex; justify-content: space-around; padding: 15px 0; border-top: 2px solid #FFD700; z-index: 100; }
        .nav-item { color: #888; text-decoration: none; font-size: 0.9rem; cursor: pointer; font-weight: bold; }
        .nav-item.active { color: #FFD700; }
    </style>
</head>
<body>

    <div class="container" id="loginPage">
        <div class="login-box">
            <div style="font-size: 5rem;">🦅</div>
            <h1 class="gold">رادار 1</h1>
            <p style="color: #666;">أدخل الرمز السري للدخول</p>
            <input type="password" id="pinCode" placeholder="****">
            <button class="btn-main" onclick="login()">دخول للنظام</button>
        </div>
    </div>

    <div class="container hidden" id="radarPage">
        <h2 class="gold">نظام التتبع النشط</h2>
        <div class="radar-box">
            <div class="scan"></div>
            <div class="point"></div>
        </div>
        <p style="color: #0f0;">متصل بالأقمار الصناعية 📡</p>
        <p style="color: #888;">الموقع الحالي: صحراء المملكة</p>
        <button class="fazaa-btn" onclick="sendFazaa()">🚨 إرسال فزعة</button>
    </div>

    <div class="container hidden" id="chatPage">
        <h2 class="gold">دردشة المقناص</h2>
        <div class="chat-area" id="chatBox">
            <div class="msg"><b>مدير عبدالمعطي:</b> السلام عليكم، الرادار شغال تمام.</div>
            <div class="msg"><b>النظام:</b> أهلاً بك في غرف الدردشة.</div>
        </div>
        <div class="chat-input-row">
            <input type="text" id="chatInput" placeholder="اكتب رسالتك...">
            <button onclick="sendMessage()" style="background:#FFD700; border:none; border-radius:10px; padding:0 20px; font-weight:bold;">إرسال</button>
        </div>
    </div>

    <nav class="nav-bar hidden" id="navBar">
        <div class="nav-item active" onclick="switchPage('radarPage', this)">📡 الرادار</div>
        <div class="nav-item" onclick="switchPage('chatPage', this)">💬 الدردشة</div>
        <div class="nav-item" onclick="location.reload()">🔒 خروج</div>
    </nav>

    <script>
        function login() {
            const pin = document.getElementById('pinCode').value;
            if (pin === '663766') {
                document.getElementById('loginPage').classList.add('hidden');
                document.getElementById('radarPage').classList.remove('hidden');
                document.getElementById('navBar').classList.remove('hidden');
            } else {
                alert('الرمز السري خطأ!');
            }
        }

        function switchPage(pageId, element) {
            // إخفاء الصفحات
            document.getElementById('radarPage').classList.add('hidden');
            document.getElementById('chatPage').classList.add('hidden');
            
            // إظهار الصفحة المطلوبة
            document.getElementById(pageId).classList.remove('hidden');
            
            // تحديث شكل المنيو
            const items = document.querySelectorAll('.nav-item');
            items.forEach(item => item.classList.remove('active'));
            element.classList.add('active');
        }

        function sendMessage() {
            const input = document.getElementById('chatInput');
            const chatBox = document.getElementById('chatBox');
            if (input.value.trim() !== "") {
                const div = document.createElement('div');
                div.className = 'msg';
                div.innerHTML = `<b>أنت:</b> ${input.value}`;
                chatBox.appendChild(div);
                input.value = "";
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        }

        function sendFazaa() {
            alert('🚨 تم إرسال نداء الفزعة لجميع الصقارين القريبين منك!');
        }
    </script>
</body>
</html>
