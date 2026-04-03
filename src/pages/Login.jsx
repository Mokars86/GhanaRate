import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState('phone'); // phone, card

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login, go to dashboard
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '2rem 1rem',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <div className="text-center mb-4">
        <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          GhanaRate
        </h1>
        <p style={{ fontWeight: 500, color: 'var(--color-dark-gray)' }}>
          Simple, Transparent Property Tax Payment for Every Citizen
        </p>
      </div>

      <div className="card glass-panel" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-light-gray)', paddingBottom: '1rem' }}>
          <button 
            className={`btn w-full ${loginMethod === 'phone' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setLoginMethod('phone')}
            style={{ padding: '0.5rem' }}
          >
            Phone
          </button>
          <button 
            className={`btn w-full ${loginMethod === 'card' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setLoginMethod('card')}
            style={{ padding: '0.5rem' }}
          >
            Ghana Card
          </button>
        </div>

        <form onSubmit={handleLogin} className="flex-column gap-4">
          <div className="input-group">
            <label className="input-label">
              {loginMethod === 'phone' ? 'Phone Number' : 'Ghana Card Number (GHA-XXXXXXXXX-X)'}
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--color-gray)' }}>
                {loginMethod === 'phone' ? <User size={20} /> : <ShieldCheck size={20} />}
              </div>
              <input 
                type={loginMethod === 'phone' ? 'tel' : 'text'} 
                className="input-field w-full" 
                style={{ paddingLeft: '3rem' }}
                placeholder={loginMethod === 'phone' ? 'e.g. 024 123 4567' : 'GHA-123456789-0'}
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <label className="input-label">Password / PIN</label>
            <input type="password" className="input-field w-full" placeholder="Enter your PIN" required />
          </div>

          <button type="submit" className="btn btn-secondary w-full" style={{ marginTop: '1rem' }}>
            Login Securely
          </button>
        </form>

        <div className="text-center" style={{ marginTop: '1.5rem' }}>
          <p style={{ fontSize: '0.875rem' }}>
            New to GhanaRate? <button onClick={() => navigate('/register')} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer', padding: 0 }}>Register here</button>
          </p>
        </div>
      </div>
    </div>
  );
}
