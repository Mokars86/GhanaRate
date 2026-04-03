import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Shield, ArrowRight } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock registration -> go to login
    navigate('/login');
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '1rem',
      maxWidth: '400px',
      margin: '0 auto',
      animation: 'fadeIn 0.5s ease-out'
    }}>
      <div className="text-center mb-4">
        <h2 style={{ color: 'var(--color-primary)', fontSize: '2rem', marginBottom: '0.5rem' }}>
          Create Account
        </h2>
        <p style={{ color: 'var(--color-dark-gray)' }}>
          Join GhanaRate to manage your property taxes seamlessly.
        </p>
      </div>

      <div className="card glass-panel" style={{ padding: '2rem 1.5rem' }}>
        
        {/* Progress indicator */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', justifyContent: 'center' }}>
          <div style={{ height: '6px', width: '40px', borderRadius: '3px', backgroundColor: step >= 1 ? 'var(--color-primary)' : 'var(--color-light-gray)', transition: 'all 0.3s' }} />
          <div style={{ height: '6px', width: '40px', borderRadius: '3px', backgroundColor: step >= 2 ? 'var(--color-primary)' : 'var(--color-light-gray)', transition: 'all 0.3s' }} />
        </div>

        {step === 1 ? (
          <form onSubmit={handleNext} className="flex-column gap-4" style={{ animation: 'slideInRight 0.3s ease-out' }}>
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={20} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--color-gray)' }} />
                <input type="text" className="input-field w-full" style={{ paddingLeft: '3rem' }} placeholder="John Doe" required />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Email Address (Optional)</label>
              <div style={{ position: 'relative' }}>
                <Mail size={20} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--color-gray)' }} />
                <input type="email" className="input-field w-full" style={{ paddingLeft: '3rem' }} placeholder="john@example.com" />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Phone Number</label>
              <div style={{ position: 'relative' }}>
                <Phone size={20} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--color-gray)' }} />
                <input type="tel" className="input-field w-full" style={{ paddingLeft: '3rem' }} placeholder="024 123 4567" required />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4">
              Continue <ArrowRight size={20} />
            </button>
            <button type="button" className="btn btn-outline w-full" onClick={() => navigate('/login')} style={{ marginTop: '0.5rem', border: 'none' }}>
              Already have an account? Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="flex-column gap-4" style={{ animation: 'slideInRight 0.3s ease-out' }}>
            <div className="input-group">
              <label className="input-label">Ghana Card Number</label>
              <div style={{ position: 'relative' }}>
                <Shield size={20} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--color-gray)' }} />
                <input type="text" className="input-field w-full" style={{ paddingLeft: '3rem' }} placeholder="GHA-123456789-0" required />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Create PIN</label>
              <input type="password" className="input-field w-full" placeholder="4-digit PIN" maxLength={4} pattern="\d{4}" required />
            </div>
            
            <div className="input-group">
              <label className="input-label">Confirm PIN</label>
              <input type="password" className="input-field w-full" placeholder="4-digit PIN" maxLength={4} pattern="\d{4}" required />
            </div>

            <button type="submit" className="btn btn-secondary w-full mt-4" style={{ backgroundColor: 'var(--color-secondary)' }}>
              Create Account
            </button>
            <button type="button" className="btn btn-outline w-full" onClick={() => setStep(1)} style={{ marginTop: '0.5rem', border: 'none' }}>
              Back
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
