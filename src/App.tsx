import React, { useState, useEffect } from 'react';

// نظام رادار 1 - النسخة الذهبية المستقلة
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

  // شاشة الدخول الفخمة
  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#0d0d0d', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '10px', filter: 'drop-shadow(0 0 10px #FFD700)' }}>🦅</div>
        <h1 style={{ fontSize: '2.8rem', margin: '10px 0', letterSpacing: '3px', fontWeight: 'bold' }}>رادار 1</h1>
        <p style={{ color: '#888', marginBottom: '30px', fontSize: '1.1rem' }}>نظام تتبع الصقور المطور</p>
        
        <div style={{ backgroundColor: '#1a1a1a', padding: '35px', borderRadius: '25px', border: '1px solid #FFD700', boxShadow: '0 0 30px rgba(255, 215, 0, 0.15)', width: '100%', maxWidth: '320px' }}>
          <p style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#ccc' }}>أدخل الرمز السري للدخول للنظام</p>
          <input 
            type="password" 
            value={pin} 
            onChange={(e) => setPin(e.target.value)}
            style={{ padding: '15px', borderRadius: '12px', border: '2px solid #FFD700', backgroundColor: '#262626', color: '#fff', textAlign: 'center', fontSize: '1.8rem', width: '100%', marginBottom: '25px', outline: 'none' }}
            placeholder="****"
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
          <button 
            onClick={handleLogin}
            style={{ width: '100%', padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '12px', fontWeight: '900', fontSize: '1.2rem', cursor: 'pointer', transition: '0.3s', boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)' }}
          >
            دخول للنظام
          </button>
        </div>
        <p style={{ marginTop: '40px', color: '#444', fontSize: '0.8rem' }}>جميع الحقوق محفوظة © 2026</p>
      </div>
    );
  }

  // لوحة التحكم الرئيسية (الرادار)
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '90px' }}>
      <header style={{ backgroundColor: '#0a0a0a', padding: '20px', textAlign: 'center', borderBottom: '2px solid #FFD700', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ color: '#FFD700', margin: 0, letterSpacing: '1px' }}>نظام رادار الصياد المطور 📡</h2>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'radar' && (
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <div style={{ position: 'relative', width: '280px', height: '280px', margin: '0 auto', border: '3px solid #004400', borderRadius: '50%', backgroundColor: '#001a00', overflow: 'hidden', boxShadow: '0 0 20px #004400' }}>
              {/* خطوط الرادار */}
              <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', backgroundColor: '#004400' }}></div>
              <div style={{ position: 'absolute', left: '50%', top: 0, width: '1px', height: '100%', backgroundColor: '#004400' }}></div>
              {/* الشعاع المتحرك */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '50%', background: 'linear-gradient(to right, transparent, rgba(0, 255, 0, 0.2))', transformOrigin: 'top left', animation: 'scan 4s linear infinite' }}></div>
              {/* نقطة الصقر المكتشف */}
              <div style={{ position: 'absolute', top: '30%', left: '60%', width: '12px', height: '12px', backgroundColor: '#FFD700', borderRadius: '50%', boxShadow: '0 0 15px #FFD700', animation: 'blink 1.5s infinite' }}></div>
            </div>
            
            <h3 style={{ color: '#00ff00', marginTop: '25px', textShadow: '0 0 5px #00ff00' }}>جاري المسح... متصل بالستلايت</h3>
            <p style={{ color: '#FFD700' }}>الموقع: صحراء المملكة العربية السعودية</p>

            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '15px', borderLeft: '4px solid #FFD700', textAlign: 'right' }}>
                <small style={{ color: '#888' }}>الصقور النشطة</small>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>05</div>
              </div>
              <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '15px', borderLeft: '4px solid #00ff00', textAlign: 'right' }}>
                <small style={{ color: '#888' }}>حالة الإشارة</small>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#00ff00' }}>ممتازة</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'market' && (
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <h3 style={{ color: '#FFD700', borderBottom: '1px solid #333', paddingBottom: '10px' }}>سوق الصقارين</h3>
            <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '12px', marginTop: '15px', border: '1px solid #333' }}>
              <p>مرحباً بك يا مدير عبدالمعطي.</p>
              <p style={{ color: '#888' }}>لا توجد عروض بيع حالياً. سيتم تحديث القائمة فور وصول بيانات جديدة.</p>
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
        <div style={{ textAlign: 'center', color: '#555', cursor: 'pointer' }}>
          <div style={{ fontSize: '1.5rem' }}>⚙️</div>
          <small>الإعدادات</small>
        </div>
      </nav>

      <style>{`
        @keyframes scan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
