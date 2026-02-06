import React, { useState } from 'react';

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

  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#1a1a1a', color: 'gold', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Arial' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🦅 رادار 1 🦅</h1>
        <p style={{ marginBottom: '20px', color: '#ccc' }}>أدخل الرمز السري للدخول</p>
        <input 
          type="password" 
          value={pin} 
          onChange={(e) => setPin(e.target.value)}
          style={{ padding: '15px', borderRadius: '10px', border: '2px solid gold', backgroundColor: '#333', color: 'white', textAlign: 'center', fontSize: '1.2rem', width: '200px' }}
          placeholder="******"
        />
        <button onClick={handleLogin} style={{ marginTop: '20px', padding: '12px 50px', backgroundColor: 'gold', color: 'black', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>دخول للنظام</button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Arial', paddingBottom: '80px' }}>
      <header style={{ backgroundColor: '#111', padding: '20px', textAlign: 'center', borderBottom: '2px solid gold' }}>
        <h2 style={{ color: 'gold', margin: 0 }}>نظام رادار الصياد المطور</h2>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'radar' && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: '150px', height: '150px', border: '4px solid gold', borderRadius: '50%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: '4rem' }}>📡</span>
            </div>
            <h3 style={{ marginTop: '30px', color: 'gold' }}>الرادار يعمل بنجاح</h3>
          </div>
        )}

        {activeTab === 'market' && (
          <div>
            <h3 style={{ color: 'gold' }}>سوق الصقارين</h3>
            <p>مرحباً بك يا مدير عبدالمعطي. النظام جاهز.</p>
          </div>
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#111', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '2px solid gold' }}>
        <button onClick={() => setActiveTab('radar')} style={{ background: 'none', border: 'none', color: activeTab === 'radar' ? 'gold' : '#666' }}>📡 الرادار</button>
        <button onClick={() => setActiveTab('market')} style={{ background: 'none', border: 'none', color: activeTab === 'market' ? 'gold' : '#666' }}>🦅 السوق</button>
      </nav>
    </div>
  );
}
  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#1a1a1a', color: 'gold', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Arial' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🦅 رادار 1 🦅</h1>
        <p style={{ marginBottom: '20px', color: '#ccc' }}>أدخل الرمز السري للدخول</p>
        <input 
          type="password" 
          value={pin} 
          onChange={(e) => setPin(e.target.value)}
          style={{ padding: '15px', borderRadius: '10px', border: '2px solid gold', backgroundColor: '#333', color: 'white', textAlign: 'center', fontSize: '1.2rem', width: '200px' }}
          placeholder="******"
        />
        <button onClick={handleLogin} style={{ marginTop: '20px', padding: '12px 50px', backgroundColor: 'gold', color: 'black', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>دخول للنظام</button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Arial', paddingBottom: '80px' }}>
      {/* شريط العنوان العلوي */}
      <header style={{ backgroundColor: '#111', padding: '20px', textAlign: 'center', borderBottom: '2px solid gold', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ color: 'gold', margin: 0, fontSize: '1.5rem' }}>نظام رادار الصياد المطور</h2>
      </header>

      {/* المحتوى الرئيسي */}
      <main style={{ padding: '20px' }}>
        {activeTab === 'radar' && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: '180px', height: '180px', border: '4px solid gold', borderRadius: '50%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', animation: 'pulse 2s infinite', boxShadow: '0 0 20px gold' }}>
              <span style={{ fontSize: '4rem' }}>📡</span>
            </div>
            <h3 style={{ marginTop: '30px', color: 'gold' }}>جاري مسح المواقع الحالية...</h3>
            <p style={{ color: '#888' }}>متصل بالسيرفر: rxezkiv...</p>
          </div>
        )}

        {activeTab === 'market' && (
          <div style={{ animation: 'fadeIn 0.5s' }}>
            <h3 style={{ borderRight: '4px solid gold', paddingRight: '15px', color: 'gold' }}>سوق الصقارين اليوم</h3>
            <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #333', marginTop: '15px' }}>
              <p style={{ fontSize: '1.1rem' }}>مرحباً بك يا مدير **عبدالمعطي**</p>
              <p style={{ color: '#ccc' }}>النظام جاهز لاستقبال بيانات السوق والدردشة.</p>
              <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed gold', textAlign: 'center', color: 'gold' }}>
                بانتظار وصول إشارات الرادار...
              </div>
            </div>
          </div>
        )}
      </main>

      {/* القائمة السفلية للتنقل */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#111', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '2px solid gold', boxShadow: '0 -5px 15px rgba(0,0,0,0.5)' }}>
        <button onClick={() => setActiveTab('radar')} style={{ background: 'none', border: 'none', color: activeTab === 'radar' ? 'gold' : '#666', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: '0.3s' }}>
          <span style={{ fontSize: '1.5rem' }}>📡</span>
          <span>الرادار</span>
        </button>
        <button onClick={() => setActiveTab('market')} style={{ background: 'none', border: 'none', color: activeTab === 'market' ? 'gold' : '#666', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: '0.3s' }}>
          <span style={{ fontSize: '1.5rem' }}>🦅</span>
          <span>السوق</span>
        </button>
        <button onClick={() => alert('الدردشة ستكون متاحة في التحديث القادم')} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem' }}>💬</span>
          <span>الدردشة</span>
        </button>
      </nav>

      {/* تأثيرات الحركة */}
      <style>{`
        @keyframes pulse { 0% { transform: scale(1); box-shadow: 0 0 0px gold; } 50% { transform: scale(1.05); box-shadow: 0 0 20px gold; } 100% { transform: scale(1); box-shadow: 0 0 0px gold; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
