import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    // الرمز السري الخاص بك
    if (pin === '663766') {
      setIsLoggedIn(true);
    } else {
      alert('الرمز السري غير صحيح يا مدير عبدالمعطي!');
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
      margin: 0,
      overflow: 'hidden'
    }}>
      {!isLoggedIn ? (
        /* --- شاشة الدخول --- */
        <div style={{ 
          textAlign: 'center', 
          border: '1px solid #FFD700', 
          padding: '40px', 
          borderRadius: '30px', 
          background: '#111', 
          width: '320px',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)'
        }}>
          <h1 style={{ color: '#FFD700', fontSize: '2.5rem', marginBottom: '10px' }}>🦅 رادار 1</h1>
          <p style={{ color: '#666', marginBottom: '30px' }}>نظام تتبع الصقور المطور</p>
          
          <input 
            type="password" 
            placeholder="الرمز السري"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={{ 
              width: '90%', 
              padding: '15px', 
              marginBottom: '20px', 
              borderRadius: '12px', 
              border: '2px solid #FFD700', 
              background: '#222', 
              color: '#fff', 
              fontSize: '1.5rem', 
              textAlign: 'center',
              outline: 'none'
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
              borderRadius: '12px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              fontSize: '1.2rem' 
            }}
          >
            دخول للنظام
          </button>
        </div>
      ) : (
        /* --- شاشة الرادار بعد الدخول --- */
        <div style={{ 
          textAlign: 'center', 
          border: '1px solid #FFD700', 
          padding: '40px', 
          borderRadius: '30px', 
          background: '#111', 
          width: '320px' 
        }}>
          <h2 style={{ color: '#FFD700', marginBottom: '20px' }}>جاري التتبع النشط...</h2>
          
          <div style={{ 
            width: '220px', 
            height: '220px', 
            border: '2px solid #004400', 
            borderRadius: '50%', 
            margin: '20px auto', 
            position: 'relative', 
            background: 'radial-gradient(circle, #001a00, #000)', 
            overflow: 'hidden',
            boxShadow: '0 0 15px #004400'
          }}>
            {/* خط المسح المتحرك */}
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
            
            {/* نقطة الهدف (الصقر) */}
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '60%',
              width: '10px',
              height: '10px',
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              boxShadow: '0 0 10px #FFD700'
            }}></div>
          </div>
          
          <p style={{ color: '#00ff00', fontWeight: 'bold' }}>متصل بالأقمار الصناعية 📡</p>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>الموقع: المملكة العربية السعودية</p>
          
          <button 
            onClick={() => setIsLoggedIn(false)}
            style={{ 
              marginTop: '25px', 
              background: 'none', 
              color: '#FFD700', 
              border: '1px solid #FFD700', 
              padding: '8px 20px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            تسجيل خروج
          </button>
        </div>
      )}

      {/* الأنيميشن الخاص بالرادار */}
      <style>{`
        @keyframes scan {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
