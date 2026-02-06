import React, { useState } from 'react';

// نظام رادار الصياد المطور - نسخة عبدالمعطي 2026
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pin, setPin] = useState('');
  const [activeTab, setActiveTab] = useState('radar');

  const handleLogin = () => {
    if (pin === '663766') {
      setIsLoggedIn(true);
    } else {
      alert('الرمز السري غير صحيح يا مدير!');
    }
  };

  // 1. شاشة تسجيل الدخول
  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#0d0d0d', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
        <div style={{ fontSize: '5rem', marginBottom: '10px', filter: 'drop-shadow(0 0 10px #FFD700)' }}>🦅</div>
        <h1 style={{ fontSize: '2.5rem', margin: '10px 0', letterSpacing: '2px' }}>رادار 1</h1>
        <p style={{ color: '#888', marginBottom: '30px' }}>نظام تتبع الصقور المطور</p>
        
        <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '25px', border: '1px solid #FFD700', width: '100%', maxWidth: '300px', boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)' }}>
          <input 
            type="password" 
            value={pin} 
            onChange={(e) => setPin(e.target.value)}
            style={{ padding: '15px', borderRadius: '12px', border: '2px solid #FFD700', backgroundColor: '#262626', color: '#fff', textAlign: 'center', fontSize: '1.5rem', width: '100%', marginBottom: '20px', outline: 'none' }}
            placeholder="الرمز السري"
          />
          <button 
            onClick={handleLogin}
            style={{ width: '100%', padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
          >
            دخول للنظام
          </button>
        </div>
      </div>
    );
  }

  // 2. لوحة التحكم الرئيسية بعد الدخول
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '80px' }}>
      <header style={{ backgroundColor: '#0a0a0a', padding: '20px', textAlign: 'center', borderBottom: '2px solid #FFD700', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ color: '#FFD700', margin: 0 }}>نظام رادار الصياد المطور 📡</h2>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'radar' && (
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <div style={{ position: 'relative', width: '260px', height: '260px', margin: '0 auto', border: '2px solid #004400', borderRadius: '50%', backgroundColor: '#001a00', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '50%', background: 'linear-gradient(to right, transparent, rgba(0, 255, 0, 0.2))', transformOrigin: 'top left', animation: 'scan 4s linear infinite' }}></div>
              <div style={{ position: 'absolute', top: '30%', left: '60%', width: '10px', height: '10px', backgroundColor: '#FFD700', borderRadius: '50%', boxShadow: '0 0 10px #FFD700' }}></div>
            </div>
            <h3 style={{ color: '#00ff00', marginTop: '20px' }}>جاري المسح... متصل بالستلايت</h3>
            
            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #FFD700', textAlign: 'right' }}>
                <small style={{ color: '#888' }}>الصقور النشطة</small>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>05</div>
              </div>
              <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #00ff00', textAlign: 'right' }}>
                <small style={{ color: '#888' }}>الإشارة</small>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff00' }}>قوية</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'market' && (
          <div style={{ padding: '10px', textAlign: 'right' }}>
            <h3 style={{ color: '#FFD700' }}>سوق الصقارين</h3>
            <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #333' }}>
              <p>لا توجد عروض بيع حالياً.</p>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>سيتم عرض الطيور المتاحة هنا فور رصدها.</p>
            </div>
          </div>
        )}
      </main>

      {/* القائمة السفلية */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#0a0a0a', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '2px solid #FFD700' }}>
        <div onClick={() => setActiveTab('radar')} style={{ textAlign: 'center', color: activeTab === 'radar' ? '#FFD700' : '#555', cursor: 'pointer' }}>
          <div style={{ fontSize: '1.5rem' }}>📡</div>
          <small>الرادار</small>
        </div>
        <div onClick={() => setActiveTab('market')} style={{ textAlign: 'center', color: activeTab === 'market' ? '#FFD700' : '#555', cursor: 'pointer' }}>
          <div style={{ fontSize: '1.5rem' }}>🦅</div>
          <small>السوق</small>
        </div>
      </nav>

      <style>{`
        @keyframes scan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
