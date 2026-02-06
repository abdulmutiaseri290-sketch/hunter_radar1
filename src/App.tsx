import { useState } from 'react';

// نظام رادار 1 المتكامل - نسخة المدير عبدالمعطي النهائية 2026
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pin, setPin] = useState('');
  const [activeTab, setActiveTab] = useState('radar');
  const [messages, setMessages] = useState([
    { user: 'مدير عبدالمعطي', text: 'الرادار والدردشة شغالين يا شباب! 🦅' },
    { user: 'الرادار', text: 'جاري مسح المنطقة المحيطة...' }
  ]);
  const [newMsg, setNewMsg] = useState('');

  const handleLogin = () => {
    if (pin === '663766') {
      setIsLoggedIn(true);
    } else {
      alert('الرمز السري غير صحيح!');
    }
  };

  const sendMessage = () => {
    if (newMsg.trim() !== '') {
      setMessages([...messages, { user: 'أنت', text: newMsg }]);
      setNewMsg('');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', direction: 'rtl' }}>
        <div style={{ textAlign: 'center', border: '2px solid #FFD700', padding: '40px', borderRadius: '30px', background: '#111', width: '300px', boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)' }}>
          <div style={{ fontSize: '5rem', marginBottom: '10px' }}>🦅</div>
          <h1 style={{ color: '#FFD700', margin: '0 0 20px 0' }}>رادار 1</h1>
          <input 
            type="password" 
            placeholder="أدخل الرمز السري" 
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={{ width: '90%', padding: '15px', marginBottom: '20px', borderRadius: '12px', border: '2px solid #FFD700', background: '#222', color: '#fff', textAlign: 'center', fontSize: '1.5rem', outline: 'none' }}
          />
          <button onClick={handleLogin} style={{ width: '100%', padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem' }}>دخول للنظام</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', direction: 'rtl', paddingBottom: '80px' }}>
      
      {/* صفحة الرادار */}
      {activeTab === 'radar' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2 style={{ color: '#FFD700', marginBottom: '20px' }}>نظام التتبع النشط 📡</h2>
          
          <div style={{ width: '250px', height: '250px', border: '3px solid #004400', borderRadius: '50%', margin: '30px auto', position: 'relative', background: 'radial-gradient(circle, #001a00, #000)', overflow: 'hidden', boxShadow: '0 0 25px #004400' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent 50%, rgba(0, 255, 0, 0.3) 100%)', transformOrigin: 'top left', animation: 'scan 4s linear infinite' }}></div>
            <div style={{ position: 'absolute', width: '12px', height: '12px', backgroundColor: '#FFD700', borderRadius: '50%', top: '35%', left: '65%', boxShadow: '0 0 20px #FFD700', animation: 'pulse 1.5s infinite' }}></div>
          </div>
          
          <p style={{ color: '#0f0', fontWeight: 'bold', fontSize: '1.2rem' }}>متصل بالأقمار الصناعية 📡</p>
          <p style={{ color: '#888', marginBottom: '30px' }}>الموقع الحالي: صحراء المملكة</p>
          
          <button 
            onClick={() => alert('🚨 تم إرسال نداء الفزعة وموقعك لجميع الصقارين!')}
            style={{ background: '#ff0000', color: '#fff', padding: '20px', borderRadius: '20px', border: 'none', width: '90%', fontWeight: 'bold', fontSize: '1.8rem', cursor: 'pointer', boxShadow: '0 0 25px rgba(255,0,0,0.6)', animation: 'blink 1s infinite' }}
          >🚨 فزعة!</button>
        </div>
      )}

      {/* صفحة الدردشة */}
      {activeTab === 'chat' && (
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: '#FFD700', textAlign: 'center', marginBottom: '20px' }}>دردشة المقناص 💬</h2>
          <div style={{ background: '#111', height: '400px', borderRadius: '20px', padding: '15px', overflowY: 'auto', marginBottom: '20px', border: '1px solid #333' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ background: '#222', padding: '12px', borderRadius: '15px', marginBottom: '12px', borderRight: '5px solid #FFD700' }}>
                <b style={{ color: '#FFD700' }}>{m.user}:</b> <span style={{ color: '#fff' }}>{m.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="text" 
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              placeholder="اكتب رسالتك هنا..." 
              style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid #FFD700', background: '#000', color: '#fff', outline: 'none' }}
            />
            <button onClick={sendMessage} style={{ background: '#FFD700', color: '#000', padding: '0 25px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>إرسال</button>
          </div>
        </div>
      )}

      {/* القائمة السفلية */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#111', display: 'flex', justifyContent: 'space-around', padding: '20px 0', borderTop: '2px solid #FFD700', zIndex: 1000 }}>
        <div onClick={() => setActiveTab('radar')} style={{ color: activeTab === 'radar' ? '#FFD700' : '#888', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>📡 الرادار</div>
        <div onClick={() => setActiveTab('chat')} style={{ color: activeTab === 'chat' ? '#FFD700' : '#888', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>💬 الدردشة</div>
        <div onClick={() => window.location.reload()} style={{ color: '#888', cursor: 'pointer', fontSize: '1.1rem' }}>🔒 خروج</div>
      </nav>

      <style>{`
        @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
      `}</style>
    </div>
  );
}
