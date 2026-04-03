import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function MapCapture() {
  const navigate = useNavigate();

  return (
    <div className="flex-column" style={{ height: 'calc(100vh - 120px)' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Location Capture</h2>
      <p>Pin your property location.</p>
      
      {/* Mock Map Area */}
      <div 
        className="card d-flex flex-column align-center" 
        style={{ 
          flex: 1, 
          backgroundColor: '#e5e3df', 
          justifyContent: 'center',
          position: 'relative',
          padding: 0,
          overflow: 'hidden'
        }}
      >
        {/* Fake Map Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(#cdd3d8 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.5
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, color: 'var(--color-accent)' }}>
          <MapPin size={48} />
        </div>
        <p style={{ position: 'relative', zIndex: 1, marginTop: '1rem', fontWeight: 600 }}>Accra, Ghana</p>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <button 
          className="btn btn-outline" 
          style={{ flex: 1 }}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button 
          className="btn btn-primary" 
          style={{ flex: 1 }}
          onClick={() => navigate('/dashboard')}
        >
          Confirm Location
        </button>
      </div>
    </div>
  );
}
