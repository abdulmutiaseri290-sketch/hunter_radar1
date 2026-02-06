import React, { useState } from 'react';

// نظام رادار الصياد المطور 2026 - نسخة عبدالمعطي الذهبية
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pin, setPin] = useState('');
  const [activeTab, setActiveTab] = useState('radar');

  const handleLogin = () => {
    if (pin === '663766') {
      setIsLoggedIn(true);
    } else {
      alert('الرمز السري غير صحيح يا مدير عبدالمعطي!');
    }
  };

  // شاشة الدخول
  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#0a0a0a', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
        <div style={{ fontSize: '6rem', marginBottom: '10px', filter: 'drop-shadow(0 0 15px #FFD700)' }}>🦅</div>
        <h1 style={{ fontSize: '2.5rem', margin: '10px 0', fontWeight: 'bold' }}>رادار 1</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>نظام تتبع الصقور المطور</p>
        <div style={{ backgroundColor: '#161616', padding: '30px', borderRadius: '25px', border: '1px solid #FFD700', width: '100%', maxWidth: '300px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <input 
            type="password" 
            value={pin} 
            onChange={(e) => setPin(e.target.value)}
            style={{ padding: '15px', borderRadius: '12px', border: '2px solid #FFD700', backgroundColor: '#222', color: '#fff', textAlign: 'center', fontSize: '1.5rem', width: '100%', marginBottom: '20px', outline: 'none' }}
            placeholder="الرمز السري"
          />
          <button 
            onClick={handleLogin}
            style={{ width: '100%', padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }}
          >
            دخول للنظام
          </button>
        </div>
      </div>
    );
  }

  // شاشة النظام الرئيسية
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0a0a0a', padding: '20px', textAlign: 'center', borderBottom: '2px solid #FFD700' }}>
        <h2 style={{ color: '#FFD700', margin: 0 }}>نظام رادار الصياد 📡</h2>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'radar' && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <div style={{ position: 'relative', width: '250px', height: '250px', margin: '0 auto', border: '2px solid #004400', borderRadius: '50%', backgroundColor: '#001a00', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '50%', background: 'linear-gradient(to right, transparent, rgba(0, 255, 0, 0.3))', transformOrigin: 'top left', animation: 'scan 4s linear infinite' }}></div>
              <div style={{ position: 'absolute', top: '40%', left: '60%', width: '10px', height: '10px', backgroundColor: '#FFD700', borderRadius: '50%', boxShadow: '0 0 10px #FFD700' }}></div>
            </div>
            <h3 style={{ color: '#00ff00', marginTop: '25px' }}>جاري المسح النشط...</h3>
            
            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '15px', borderRight: '4px solid #FFD700' }}>
                <small style={{ color: '#888' }}>الصقور</small>
                <div style={{ fontSize: '1.5rem' }}>05</div>
              </div>
              <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '15px', borderRight: '4px solid #00ff00' }}>
                <small style={{ color: '#888' }}>الإشارة</small>
                <div style={{ fontSize: '1.5rem', color: '#00ff00' }}>قوية</div>
              </div>
            </div>
          </div>
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#0a0a0a', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '2px solid #FFD700' }}>
        <div onClick={() => setActiveTab('radar')} style={{ textAlign: 'center', color: activeTab === 'radar' ? '#FFD700' : '#555', cursor: 'pointer' }}>📡 الرادار</div>
        <div onClick={() => setActiveTab('market')} style={{ textAlign: 'center', color: activeTab === 'market' ? '#FFD700' : '#555', cursor: 'pointer' }}>🦅 السوق</div>
      </nav>

      <style>{`
        @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
