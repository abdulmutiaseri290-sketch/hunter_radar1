import { useState } from 'react'

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

  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#0d0d0d', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '3rem' }}>🦅 رادار 1</h1>
        <div style={{ backgroundColor: '#1a1a1a', padding: '40px', borderRadius: '20px', border: '1px solid #FFD700' }}>
          <input 
            type="password" 
            value={pin} 
            onChange={(e) => setPin(e.target.value)}
            style={{ padding: '15px', borderRadius: '10px', border: '1px solid #FFD700', backgroundColor: '#262626', color: '#fff', textAlign: 'center', fontSize: '1.5rem', width: '200px', display: 'block', marginBottom: '20px' }}
            placeholder="الرمز"
          />
          <button 
            onClick={handleLogin}
            style={{ width: '100%', padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }}
          >
            دخول
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <header style={{ padding: '20px', borderBottom: '2px solid #FFD700' }}>
        <h2 style={{ color: '#FFD700' }}>نظام الرادار النشط 📡</h2>
      </header>
      <div style={{ marginTop: '50px' }}>
        <div style={{ width: '250px', height: '250px', margin: '0 auto', border: '2px solid #004400', borderRadius: '50%', position: 'relative', backgroundColor: '#001a00', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '50%', background: 'linear-gradient(to right, transparent, rgba(0, 255, 0, 0.3))', transformOrigin: 'top left', animation: 'scan 4s linear infinite' }}></div>
        </div>
        <h3 style={{ color: '#00ff00', marginTop: '30px' }}>جاري المسح... متصل بالستلايت</h3>
      </div>
      <style>{`@keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
