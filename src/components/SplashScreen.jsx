import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash for 2.5 seconds, then fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade animation to complete before unmounting
      setTimeout(() => {
        onComplete();
      }, 500); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'var(--color-primary)', // Forest Green background
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.5s ease-in-out',
    }}>
      <div style={{
        animation: 'pulse 2s infinite ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Using the generated PWA icon as the splash logo */}
        <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img 
            src="/icon-512x512.png" 
            alt="GhanaRate Logo" 
            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }} 
          />
        </div>
        <h1 style={{ color: 'var(--color-secondary)', fontSize: '2.5rem', margin: 0, letterSpacing: '1px' }}>
          GhanaRate
        </h1>
        <p style={{ color: 'var(--color-primary-light)', marginTop: '0.5rem', fontWeight: 500 }}>
          Property Tax Platform
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
