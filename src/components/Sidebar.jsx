import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, PlusCircle, CreditCard, User, LogOut } from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide nav on auth pages
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  const tabs = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Add Property', path: '/add-property', icon: PlusCircle },
    { name: 'Payments', path: '/pay/all', icon: CreditCard },
    { name: 'My Profile', path: '/profile', icon: User }
  ];

  return (
    <aside className="sidebar-container hide-on-mobile">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
        <img src="/icon-192x192.png" alt="GhanaRate" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
        <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--color-primary)' }}>GhanaRate</h2>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname.startsWith(tab.path) || 
                           (tab.path === '/dashboard' && location.pathname === '/dashboard');
          
          return (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              style={{
                background: isActive ? 'var(--color-primary-light)' : 'transparent',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.875rem 1rem',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                color: isActive ? 'var(--color-primary-dark)' : 'var(--color-dark-gray)',
                fontWeight: isActive ? 600 : 500,
                transition: 'var(--transition-fast)'
              }}
            >
              <Icon size={20} color={isActive ? 'var(--color-primary)' : 'var(--color-gray)'} />
              <span style={{ fontSize: '1rem' }}>{tab.name}</span>
            </button>
          );
        })}
      </nav>

      <div style={{ borderTop: '1px solid var(--color-light-gray)', paddingTop: '1.5rem', marginTop: 'auto' }}>
        <button
          onClick={() => navigate('/login')}
          style={{
            background: 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.875rem 1rem',
            width: '100%',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            color: 'var(--color-accent)',
            fontWeight: 500,
            transition: 'var(--transition-fast)'
          }}
        >
          <LogOut size={20} />
          <span style={{ fontSize: '1rem' }}>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
