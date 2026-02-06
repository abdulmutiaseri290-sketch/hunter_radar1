import React, { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    if (pin === '663766') {
      setIsLoggedIn(true);
    } else {
      alert('الرمز السري غير صحيح يا مدير!');
    }
  };

  // شاشة تسجيل الدخول
  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#111', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '10px' }}>🦅</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '5px' }}>رادار 1</h1>
        <p style={{ color: '#888', marginBottom: '30px' }}>نظام تتبع الصقور المطور</p>
        
        <div style={{ backgroundColor: '#222', padding: '30px', borderRadius: '20px', border: '1px solid #FFD700', width: '280px' }}>
          <input 
            type="password" 
            value={pin} 
            onChange={(e) => setPin(e.target.value)}
            style={{ padding: '15px', borderRadius: '10px', border: '2px solid #FFD700', backgroundColor: '#333', color: 'white', textAlign: 'center', fontSize: '1.2rem', width: '100%', marginBottom: '20px' }}
            placeholder="الرمز السري"
          />
          <button onClick={handleLogin} style={{ width: '100%', padding: '12px', backgroundColor: '#FFD700', color: 'black', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>دخول للنظام</button>
        </div>
      </div>
    );
  }

  // شاشة الرادار الرئيسية بعد الدخول
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#111', padding: '20px', textAlign: 'center', borderBottom: '2px solid #FFD700' }}>
        <h2 style={{ color: '#FFD700', margin: 0 }}>لوحة تحكم رادار 1 📡</h2>
      </header>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ marginTop: '50px' }}>
          <div style={{ width: '200px', height: '200px', border: '3px solid #00ff00', borderRadius: '50%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', backgroundColor: '#001a00' }}>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#00ff00', position: 'absolute', animation: 'spin 4s linear infinite' }}></div>
            <span style={{ fontSize: '3rem' }}>📡</span>
          </div>
          <h3 style={{ marginTop: '20px', color: '#00ff00' }}>جاري المسح وتحديد المواقع...</h3>
          <p style={{ color: '#FFD700' }}>الموقع الحالي: صحراء المملكة</p>
        </div>

        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '10px', border: '1px solid #333' }}>
            <div style={{ color: '#888' }}>الصقور المتصلة</div>
            <div style={{ fontSize: '1.5rem', color: '#FFD700' }}>5</div>
          </div>
          <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '10px', border: '1px solid #333' }}>
            <div style={{ color: '#888' }}>حالة البطارية</div>
            <div style={{ fontSize: '1.5rem', color: '#00ff00' }}>98%</div>
          </div>
        </div>
      </main>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#111', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '2px solid #FFD700' }}>
        <span>📡 الرادار</span>
        <span style={{ color: '#888' }}>🦅 السوق</span>
        <span style={{ color: '#888' }}>⚙️ الإعدادات</span>
      </nav>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
