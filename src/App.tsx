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
      <div style={{ backgroundColor: '#1a1a1a', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🦅 رادار 1 🦅</h1>
        <p style={{ marginBottom: '20px', color: '#ccc' }}>أدخل الرمز السري للدخول</p>
        <input 
          type="password" 
          value={pin} 
          onChange={(e) => setPin(e.target.value)}
          style={{ padding: '15px', borderRadius: '10px', border: '2px solid #FFD700', backgroundColor: '#333', color: 'white', textAlign: 'center', fontSize: '1.2rem', width: '200px' }}
          placeholder="******"
        />
        <button onClick={handleLogin} style={{ marginTop: '20px', padding: '12px 50px', backgroundColor: '#FFD700', color: 'black', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>دخول للنظام</button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#111', padding: '20px', textAlign: 'center', borderBottom: '2px solid #FFD700' }}>
        <h2 style={{ color: '#FFD700', margin: 0 }}>نظام رادار الصياد المطور</h2>
      </header>
      <main style={{ padding: '20px', textAlign: 'center' }}>
        {activeTab === 'radar' && (
          <div style={{ padding: '50px 0' }}>
            <div style={{ width: '150px', height: '150px', border: '4px solid #FFD700', borderRadius: '50%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', animation: 'pulse 2s infinite' }}>
              <span style={{ fontSize: '4rem' }}>📡</span>
            </div>
            <h3 style={{ marginTop: '30px', color: '#FFD700' }}>الرادار متصل وجاهز</h3>
          </div>
        )}
      </main>
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#111', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '2px solid #FFD700' }}>
        <button onClick={() => setActiveTab('radar')} style={{ background: 'none', border: 'none', color: '#FFD700', cursor: 'pointer' }}>📡 الرادار</button>
      </nav>
    </div>
  );
}
