import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState('phone');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-split">
      {/* Desktop Branded Left Pane */}
      <div className="auth-left-brand hide-on-mobile">
        <img src="/icon-512x512.png" alt="GhanaRate" style={{ width: '150px', height: '150px', borderRadius: '30px', marginBottom: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
        <h1 style={{ fontSize: '3rem', margin: 0, textAlign: 'center', color: 'white' }}>GhanaRate</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, textAlign: 'center', maxWidth: '400px', color: 'white', marginTop: '1rem' }}>
          Simple, Transparent Property Tax Payment for Every Citizen
        </p>
      </div>

      {/* Main Form Right Pane */}
      <div className="auth-right-form">
        <div className="auth-form-container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
          <div className="text-center mb-4 hide-on-desktop">
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
                  {loginMethod === 'phone' ? 'Phone Number' : 'Ghana Card Number'}
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
                New to GhanaRate? <button type="button" onClick={() => navigate('/register')} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer', padding: 0 }}>Register here</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
