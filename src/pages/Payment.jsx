import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [method, setMethod] = useState('');

  const handlePay = () => {
    if(!method) return alert('Select payment method');
    navigate(`/receipt/${id}`);
  };

  return (
    <div className="card">
      <h2 style={{ marginBottom: '1rem' }}>Make Payment</h2>
      
      <div style={{
        backgroundColor: 'var(--color-primary-light)',
        padding: '1.5rem',
        borderRadius: '12px',
        textAlign: 'center',
        marginBottom: '1.5rem'
      }}>
        <p style={{ margin: 0, color: 'var(--color-primary-dark)' }}>Amount to Pay</p>
        <h1 style={{ color: 'var(--color-primary)', margin: '0.5rem 0 0 0' }}>GH₵ 1,250.00</h1>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>Select Method</h3>
      <div className="flex-column gap-2">
        <label className={`card card-interactive d-flex align-center gap-4 ${method === 'momo' ? 'selected' : ''}`} style={{ padding: '1rem', cursor: 'pointer', border: method === 'momo' ? '2px solid var(--color-primary)' : '2px solid transparent' }}>
          <input type="radio" name="paymethod" value="momo" onChange={(e) => setMethod(e.target.value)} />
          <span style={{ fontWeight: 600 }}>MTN Mobile Money</span>
        </label>
        
        <label className={`card card-interactive d-flex align-center gap-4 ${method === 'telecel' ? 'selected' : ''}`} style={{ padding: '1rem', cursor: 'pointer', border: method === 'telecel' ? '2px solid var(--color-primary)' : '2px solid transparent' }}>
          <input type="radio" name="paymethod" value="telecel" onChange={(e) => setMethod(e.target.value)} />
          <span style={{ fontWeight: 600 }}>Telecel Cash</span>
        </label>

        <label className={`card card-interactive d-flex align-center gap-4 ${method === 'card' ? 'selected' : ''}`} style={{ padding: '1rem', cursor: 'pointer', border: method === 'card' ? '2px solid var(--color-primary)' : '2px solid transparent' }}>
          <input type="radio" name="paymethod" value="card" onChange={(e) => setMethod(e.target.value)} />
          <span style={{ fontWeight: 600 }}>Bank Card (Visa/Mastercard)</span>
        </label>
      </div>

      <button className="btn btn-primary w-full mt-4" onClick={handlePay}>
        Confirm Payment
      </button>
    </div>
  );
}
