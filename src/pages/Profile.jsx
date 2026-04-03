import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ShieldCheck, Bell, CreditCard, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Mock logout logic
    navigate('/login');
  };

  return (
    <div className="flex-column gap-4" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      
      {/* Profile Header Info */}
      <div className="card d-flex align-center gap-4 text-center flex-column" style={{ padding: '2rem 1.5rem' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary-light)',
          color: 'var(--color-primary)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '0.5rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        }}>
          <User size={40} />
        </div>
        <div>
          <h2 style={{ margin: 0 }}>Kwame Mensah</h2>
          <p style={{ margin: '0.25rem 0', color: 'var(--color-gray)' }}>+233 24 123 4567</p>
          <div className="badge badge-success d-flex align-center gap-2" style={{ marginTop: '0.5rem', display: 'inline-flex' }}>
            <ShieldCheck size={14} />
            Verified Citizen
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: '0.25rem', marginTop: '0.5rem' }}>Account Settings</h3>
      
      <div className="card flex-column" style={{ padding: '0.5rem' }}>
        <button className="d-flex justify-between align-center w-full" style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer', borderBottom: '1px solid var(--color-light-gray)' }}>
          <div className="d-flex align-center gap-4">
            <ShieldCheck size={20} color="var(--color-primary)" />
            <span style={{ fontWeight: 500, fontSize: '1rem', color: 'var(--color-dark-gray)' }}>Personal Details</span>
          </div>
          <ChevronRight size={20} color="var(--color-gray)" />
        </button>

        <button className="d-flex justify-between align-center w-full" style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer', borderBottom: '1px solid var(--color-light-gray)' }}>
          <div className="d-flex align-center gap-4">
            <CreditCard size={20} color="var(--color-secondary-dark)" />
            <span style={{ fontWeight: 500, fontSize: '1rem', color: 'var(--color-dark-gray)' }}>Payment Methods</span>
          </div>
          <ChevronRight size={20} color="var(--color-gray)" />
        </button>

        <button onClick={() => navigate('/notifications')} className="d-flex justify-between align-center w-full" style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer' }}>
          <div className="d-flex align-center gap-4">
            <Bell size={20} color="var(--color-accent)" />
            <span style={{ fontWeight: 500, fontSize: '1rem', color: 'var(--color-dark-gray)' }}>Notifications</span>
          </div>
          <ChevronRight size={20} color="var(--color-gray)" />
        </button>
      </div>

      <h3 style={{ marginBottom: '0.25rem', marginTop: '0.5rem' }}>More options</h3>
      
      <div className="card flex-column" style={{ padding: '0.5rem' }}>
        <button className="d-flex justify-between align-center w-full" style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer', borderBottom: '1px solid var(--color-light-gray)' }}>
          <div className="d-flex align-center gap-4">
            <HelpCircle size={20} color="var(--color-gray)" />
            <span style={{ fontWeight: 500, fontSize: '1rem', color: 'var(--color-dark-gray)' }}>Help & Support</span>
          </div>
          <ChevronRight size={20} color="var(--color-gray)" />
        </button>

        <button onClick={handleLogout} className="d-flex justify-between align-center w-full" style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer' }}>
          <div className="d-flex align-center gap-4">
            <LogOut size={20} color="var(--color-accent)" />
            <span style={{ fontWeight: 500, fontSize: '1rem', color: 'var(--color-accent)' }}>Log Out</span>
          </div>
        </button>
      </div>

    </div>
  );
}
