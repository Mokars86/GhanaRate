import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show header on login
  if (location.pathname === '/' || location.pathname === '/login') {
    return null;
  }

  const showBackButton = location.pathname !== '/dashboard';

  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '1rem',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid var(--color-light-gray)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {showBackButton && (
          <button 
            onClick={() => navigate(-1)}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              display: 'flex',
              padding: '0.25rem',
              color: 'var(--color-dark-gray)'
            }}
          >
            <ArrowLeft size={24} />
          </button>
        )}
        <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--color-primary)' }}>GhanaRate</h2>
      </div>
      
      <button 
        onClick={() => navigate('/notifications')}
        style={{ 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          padding: '0.25rem',
          color: 'var(--color-dark-gray)'
        }}
      >
        <Bell size={24} />
        {/* Unread badge indicator */}
        <span style={{
          position: 'absolute',
          top: '2px',
          right: '2px',
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--color-accent)',
          borderRadius: '50%'
        }}></span>
      </button>
    </header>
  );
}
