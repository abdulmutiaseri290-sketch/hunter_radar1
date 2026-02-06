import { useState } from 'react';

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

  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      fontFamily: 'sans-serif', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      margin: 0 
    }}>
      {!isLoggedIn ? (
        /* شاشة الدخول - مقتبسة من تصميمك الـ HTML */
        <div style={{ 
          textAlign: 'center', 
          border: '1px solid #FFD700', 
          padding: '40px', 
          borderRadius: '30px', 
          background: '#111', 
          width: '320px' 
        }}>
          <h1 style={{ color: '#FFD700' }}>رادار 1</h1>
          <input 
            type="password" 
            placeholder="الرمز السري"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={{ 
              width: '90%', 
              padding: '15px', 
              marginBottom: '20px', 
              borderRadius: '10px', 
              border: '1px solid #FFD700', 
              background: '#222', 
              color: '#fff', 
              fontSize: '1.5rem', 
              textAlign: 'center' 
            }}
          />
          <button 
            onClick={handleLogin}
            style={{ 
              width: '100%', 
              padding: '15px', 
              backgroundColor: '#FFD700', 
              color: '#000', 
              border: 'none', 
              borderRadius: '10px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              fontSize: '1.2rem' 
            }}
          >
            دخول
          </button>
        </div>
      ) : (
        /* شاشة الرادار - مقتبسة من تصميمك الـ HTML */
        <div style={{ 
          textAlign: 'center', 
          border: '1px solid #FFD700', 
          padding: '40px', 
          borderRadius: '30px', 
          background: '#111', 
          width: '320px' 
        }}>
          <h2 style={{ color: '#FFD700' }}>جاري التتبع...</h2>
          <div style={{ 
            width: '200px', 
            height: '200px', 
            border: '2px solid #004400', 
            borderRadius: '50%', 
            margin: '20px auto', 
            position: 'relative', 
            background: 'radial-gradient(circle, #001a00, #000)', 
            overflow: 'hidden' 
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(45deg, transparent 50%, rgba(0, 255, 0, 0.2) 100%)', 
              transformOrigin: 'top left', 
              animation: 'scan 4s linear infinite' 
            }}></div>
          </div>
          <p>متصل بالأقمار الصناعية</p>
          <button 
            onClick={() => setIsLoggedIn(false)}
            style={{ 
              marginTop: '20px', 
              background: 'none', 
              color: '#FFD700', 
              border: '1px solid #FFD700', 
              padding: '5px 15px', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            خروج
          </button>
        </div>
      )}

      {/* إضافة الأنيميشن الخاص بالرادار */}
      <style>{`
        @keyframes scan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}`}</style>
    </div>
  );
}
