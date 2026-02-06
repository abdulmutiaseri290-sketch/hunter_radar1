import { useState, useEffect } from 'react';

// نظام رادار 1 - النسخة المتكاملة (عبدالمعطي 2026)
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pin, setPin] = useState('');
  const [activeTab, setActiveTab] = useState('radar');
  const [messages, setMessages] = useState([
    { user: 'مدير عبدالمعطي', text: 'الرادار شغال يا شباب! 🦅' },
    { user: 'النظام', text: 'تم تحديث الموقع بنجاح.' }
  ]);
  const [newMsg, setNewMsg] = useState('');

  const handleLogin = () => {
    if (pin === '663766') {
      setIsLoggedIn(true);
    } else {
      alert('الرمز السري غير صحيح يا مدير!');
    }
  };

  const sendMsg = () => {
    if (newMsg.trim()) {
      setMessages([...messages, { user: 'أنت', text: newMsg }]);
      setNewMsg('');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', direction: 'rtl' }}>
        <div style={{ textAlign: 'center', border: '1px solid #FFD700', padding: '40px', borderRadius: '30px', background: '#111', width: '300px', boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)' }}>
          <div style={{ fontSize: '4rem' }}>🦅</div>
          <h1 style={{ color: '#FFD700' }}>رادار 1</h1>
          <input 
            type="password" 
            placeholder="الرمز السري" 
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={{ width: '90%', padding: '12px', margin: '20px 0', borderRadius: '10px', border: '2px solid #FFD700', background: '#222', color: '#fff', textAlign: 'center', fontSize: '1.2rem' }}
          />
          <button onClick={handleLogin} style={{ width: '100%', padding: '12px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>دخول للنظام</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', direction: 'rtl', paddingBottom: '80px' }}>
      
      {/* صفحة الرادار */}
      {activeTab === 'radar' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2 style={{ color: '#FFD700' }}>نظام التتبع النشط 📡</h2>
          <div style={{ width: '250px', height: '250px', border: '2px solid #004400', borderRadius: '50%', margin: '30px auto', position: 'relative', background: 'radial-gradient(circle, #001a00, #000)', overflow: 'hidden', boxShadow: '0 0 20px #004400' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent 50%, rgba(0, 255, 0, 0.3) 100%)', transformOrigin: 'top left', animation: 'scan 4s linear infinite' }}></div>
            <div style={{ position: 'absolute', width: '10px', height: '10px', backgroundColor: '#FFD700', borderRadius: '50%', top: '35%', left: '65%', boxShadow: '0 0 15px #FFD700', animation: 'pulse 1.5s infinite' }}></div>
          </div>
          <p style={{ color: '#0f0' }}>متصل بالأقمار الصناعية</p>
          <button 
            onClick={() => alert('🚨 تم إرسال نداء الفزعة لجميع الصقارين!')}
            style={{ background: 'red', color: '#fff', padding: '20px', borderRadius: '15px', border: 'none', width: '90%', fontWeight: 'bold', fontSize: '1.5rem', animation: 'blink 1s infinite', cursor: 'pointer' }}
          >🚨 فزعة!</button>
        </div>
      )}

      {/* صفحة الدردشة */}
      {activeTab === 'chat' && (
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: '#FFD700', textAlign: 'center' }}>دردشة المقناص 💬</h2>
          <div style={{ background: '#111', height: '350px', borderRadius: '15px', padding: '15px', overflowY: 'auto', marginBottom: '15px', border: '1px solid #333' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ background: '#222', padding: '10px', borderRadius: '10px', marginBottom: '10px', borderRight: '4px solid #FFD700' }}>
                <b>{m.user}:</b> {m.text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              placeholder="اكتب رسالتك..." 
              style={{ flex: 1, padding: '12px', borderRadius: '10px', border: '1px solid #FFD700', background: '#000', color: '#fff' }}
            />
            <button onClick={sendMsg} style={{ background: '#FFD700', padding: '0 20px', borderRadius: '10px', border: 'none', fontWeight: 'bold' }}>إرسال</button>
          </div>
        </div>
      )}

      {/* المنيو السفلي */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#111', display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '2px solid #FFD700' }}>
        <div onClick={() => setActiveTab('radar')} style={{ color: activeTab === 'radar' ? '#FFD700' : '#888', cursor: 'pointer', fontWeight: 'bold' }}>📡 الرادار</div>
        <div onClick={() => setActiveTab('chat')} style={{ color: activeTab === 'chat' ? '#FFD700' : '#888', cursor: 'pointer', fontWeight: 'bold' }}>💬 الدردشة</div>
        <div onClick={() => window.location.reload()} style={{ color: '#888', cursor: 'pointer' }}>🔒 خروج</div>
      </nav>

      <style>{`
        @keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } }
        @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0.7; } 100% { opacity: 1; } }
      `}</style>
    </div>
  );
}
