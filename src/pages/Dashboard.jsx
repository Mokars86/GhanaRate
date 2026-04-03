import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, CreditCard, FileText, Home, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex-column gap-4">
      {/* Welcome Section */}
      <div>
        <h2 style={{ marginBottom: '0.25rem' }}>Welcome, Kwame!</h2>
        <p style={{ margin: 0 }}>Property Owner Dashboard</p>
      </div>

      {/* Tax Summary Card - Premium Design */}
      <div 
        className="card card-interactive"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            Total Outstanding Tax
          </p>
          <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>
            GH₵ 1,250.00
          </h1>
          <div className="d-flex justify-between align-center">
            <div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Due Date</p>
              <p style={{ margin: 0, fontWeight: 600 }}>Dec 31, 2026</p>
            </div>
            <span className="badge badge-warning" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-black)' }}>
              Payment Due
            </span>
          </div>
        </div>
        {/* Decorative background element */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          zIndex: 0
        }} />
      </div>

      {/* Quick Actions Grid */}
      <h3 className="mt-4" style={{ marginBottom: '0.5rem' }}>Quick Actions</h3>
      <div className="desktop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <button 
          className="card card-interactive flex-column align-center text-center" 
          style={{ padding: '1rem', border: 'none', cursor: 'pointer' }}
          onClick={() => navigate('/add-property')}
        >
          <div style={{ 
            backgroundColor: 'var(--color-primary-light)', 
            color: 'var(--color-primary)',
            padding: '0.75rem', 
            borderRadius: '50%',
            marginBottom: '0.75rem' 
          }}>
            <PlusCircle size={24} />
          </div>
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Add Property</span>
        </button>

        <button 
          className="card card-interactive flex-column align-center text-center" 
          style={{ padding: '1rem', border: 'none', cursor: 'pointer' }}
          onClick={() => navigate('/pay/all')}
        >
          <div style={{ 
            backgroundColor: 'var(--color-secondary-light)', 
            color: 'var(--color-secondary-dark)',
            padding: '0.75rem', 
            borderRadius: '50%',
            marginBottom: '0.75rem' 
          }}>
            <CreditCard size={24} />
          </div>
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Pay Now</span>
        </button>
        
        <button 
          className="card card-interactive flex-column align-center text-center" 
          style={{ padding: '1rem', border: 'none', cursor: 'pointer' }}
          onClick={() => navigate('/notifications')}
        >
          <div style={{ 
            backgroundColor: 'var(--color-light-gray)', 
            color: 'var(--color-dark-gray)',
            padding: '0.75rem', 
            borderRadius: '50%',
            marginBottom: '0.75rem' 
          }}>
            <FileText size={24} />
          </div>
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>View Bills</span>
        </button>

        <button 
          className="card card-interactive flex-column align-center text-center" 
          style={{ padding: '1rem', border: 'none', cursor: 'pointer' }}
          onClick={() => navigate('/dashboard')}
        >
          <div style={{ 
            backgroundColor: 'var(--color-accent-light)', 
            color: 'var(--color-accent)',
            padding: '0.75rem', 
            borderRadius: '50%',
            marginBottom: '0.75rem' 
          }}>
            <Home size={24} />
          </div>
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>My Properties (2)</span>
        </button>
      </div>

      {/* Recent Properties List */}
      <h3 className="mt-4" style={{ marginBottom: '0.5rem' }}>My Properties</h3>
      <div className="flex-column gap-2">
        {[1, 2].map(num => (
          <div 
            key={num} 
            className="card card-interactive d-flex justify-between align-center" 
            style={{ padding: '1rem', cursor: 'pointer' }}
            onClick={() => navigate(`/property/${num}`)}
          >
            <div className="d-flex gap-4 align-center">
              <div style={{ 
                backgroundColor: 'var(--color-primary-light)', 
                color: 'var(--color-primary)', 
                padding: '0.5rem', 
                borderRadius: '8px' 
              }}>
                <Home size={20} />
              </div>
              <div>
                <h4 style={{ margin: 0 }}>House {num} - East Legon</h4>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>Residential • GHA-1234-5678</p>
              </div>
            </div>
            <ArrowRight size={20} color="var(--color-gray)" />
          </div>
        ))}
      </div>
    </div>
  );
}
