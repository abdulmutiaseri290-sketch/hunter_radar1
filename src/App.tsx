import React, { useState, useEffect } from 'react';

// كود تشغيل الرادار - نسخة عبدالمعطي المطورة
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(true);

  // تأثير بسيط عند التشغيل
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleLogin = () => {
    if (pin === '663766') {
      setIsLoggedIn(true);
    } else {
      alert('الرمز السري غير صحيح يا مدير عبدالمعطي!');
    }
  };

  if (loading) {
    return (
      <div style={{ backgroundColor: '#000', color: '#FFD700', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h2>جاري تشغيل رادار 1...</h2>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#1a1a1a', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '10px' }}>🦅</div>
        <h1 style={{ fontSize: '2.5rem', margin: '10px 0', letterSpacing: '2px' }}>رادار 1</h1>
        <p style={{ color: '#888', marginBottom: '30px' }}>نظام تتبع الصقور المطور</p>
        
        <div style={{ backgroundColor: '#222', padding: '30px', borderRadius: '20px', border: '1px solid #FFD700', boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)' }}>
          <p style={{ marginBottom: '15px' }}>أدخل الرمز السري للدخول</p>
          <input 
            type="password" 
            value={pin} 
            onChange={(e) => setPin(e.target.value)}
            style={{ padding: '15px', borderRadius: '12px', border: '2px solid #FFD700', backgroundColor: '#333', color: '#fff', textAlign: 'center', fontSize: '1.5rem', width: '100%', maxWidth: '200px', marginBottom: '20px', outline: 'none' }}
            placeholder="****"
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
          <br />
          <button 
            onClick={handleLogin}
            style={{ width: '100%', padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: '0.3s' }}
          >
            دخول للنظام
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '80px' }}>
      <header style={{ backgroundColor: '#111', padding: '20px', textAlign: 'center', borderBottom: '2px solid #FFD700', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ color: '#FFD700', margin: 0 }}>نظام رادار الصياد المطور 📡</h2>
      </header>

      <main style={{ padding: '20px' }}>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div style={{ position: 'relative', width: '250px', height: '250px', margin: '0 auto', border: '2px solid #004400', borderRadius: '50%', backgroundColor: '#001a00', overflow: 'hidden' }}>
            {/* دائرة الرادار المتحركة */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '2px', backgroundColor: '#00ff00', transformOrigin: 'left', animation: 'scan 4s linear infinite' }}></div>
            <div style={{ position: 'absolute', top: '20%', left: '30%', width: '10px', height: '10px', backgroundColor: '#FFD700', borderRadius: '50%', boxShadow: '0 0 10px #FFD700' }}></div>
            <div style={{ position: 'absolute', top: '60%', left: '70%', width: '10px', height: '10px', backgroundColor: '#FFD700', borderRadius: '50%', boxShadow: '0 0 10px #FFD700' }}></div>
          </div>
          <h3 style={{ color: '#00ff00', marginTop: '20px' }}>جاري المسح... متصل بالستلايت</h3>
          <p style={{ color: '#888' }}>الموقع: المملكة العربية السعودية</p>
        </div>

        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #FFD700' }}>
            <small style={{ color: '#888' }}>الصقور النشطة</small>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>12</div>
          </div>
          <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #FFD700' }}>
            <small style={{ color: '#888' }}>حالة الإشارة</small>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff00' }}>ممتازة</div>
          </div>
        </div>
      </main>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#111', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '2px solid #FFD700' }}>
        <div style={{ textAlign: 'center', color: '#FFD700', cursor: 'pointer' }}>
          <div>📡</div>
          <small>الرادار</small>
        </div>
        <div style={{ textAlign: 'center', color: '#888', cursor: 'pointer' }}>
          <div>🦅</div>
          <small>السوق</small>
        </div>
        <div style={{ textAlign: 'center', color: '#888', cursor: 'pointer' }}>
          <div>⚙️</div>
          <small>الإعدادات</small>
        </div>
      </nav>

      <style>{`
        @keyframes scan {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
