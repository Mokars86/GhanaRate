import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, PlusCircle, CreditCard, User } from 'lucide-react';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide nav on login page
  if (location.pathname === '/' || location.pathname === '/login') {
    return null;
  }

  const tabs = [
    { name: 'Home', path: '/dashboard', icon: Home },
    { name: 'Register', path: '/add-property', icon: PlusCircle },
    { name: 'Pay', path: '/pay/all', icon: CreditCard },
    { name: 'Profile', path: '/profile', icon: User } // mock profile
  ];

  return (
    <nav className="glass-panel hide-on-desktop" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '0.75rem 1rem env(safe-area-inset-bottom, 1rem)',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      backgroundColor: 'rgba(255, 255, 255, 0.85)'
    }}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = location.pathname.startsWith(tab.path) || 
                         (tab.path === '/dashboard' && location.pathname === '/dashboard');
        
        return (
          <button
            key={tab.name}
            onClick={() => navigate(tab.path)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              cursor: 'pointer',
              color: isActive ? 'var(--color-primary)' : 'var(--color-gray)',
              transition: 'var(--transition-fast)'
            }}
          >
            <div style={{
              transform: isActive ? 'scale(1.15)' : 'scale(1)',
              transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: isActive ? 600 : 500,
            }}>
              {tab.name}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
