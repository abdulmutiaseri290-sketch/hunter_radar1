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
      <div style={{ backgroundColor: '#0a0a0a', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '10px' }}>🦅</div>
        <h1 style={{ fontSize: '2.5rem' }}>رادار 1</h1>
        <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '20px', border: '1px solid #FFD700' }}>
          <input 
            type="password" 
            value={pin} 
            onChange={(e) => setPin(e.target.value)}
            style={{ padding: '15px', borderRadius: '10px', border: '2px solid #FFD700', backgroundColor: '#222', color: '#fff', textAlign: 'center', fontSize: '1.5rem', width: '200px', marginBottom: '20px' }}
            placeholder="****"
          />
          <br />
          <button onClick={handleLogin} style={{ width: '100%', padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>دخول</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0a0a0a', padding: '20px', textAlign: 'center', borderBottom: '2px solid #FFD700' }}>
        <h2 style={{ color: '#FFD700' }}>نظام رادار الصياد 📡</h2>
      </header>
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: '200px', height: '200px', margin: '40px auto', border: '2px solid #004400', borderRadius: '50%', backgroundColor: '#001a00', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '50%', background: 'linear-gradient(to right, transparent, rgba(0, 255, 0, 0.3))', transformOrigin: 'top left', animation: 'scan 4s linear infinite' }}></div>
        </div>
        <h3 style={{ color: '#00ff00' }}>جاري المسح النشط...</h3>
      </main>
      <style>{`@keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
