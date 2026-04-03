import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Share2, CheckCircle } from 'lucide-react';

export default function Receipt() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex-column gap-4">
      <div className="card text-center">
        <CheckCircle size={64} color="var(--color-primary)" style={{ margin: '0 auto 1rem' }} />
        <h2 style={{ color: 'var(--color-primary)' }}>Payment Successful!</h2>
        <p>Your property tax has been paid successfully.</p>
        
        <div style={{
          backgroundColor: 'var(--color-surface-gray)',
          padding: '1.5rem',
          borderRadius: '12px',
          margin: '1.5rem 0',
          textAlign: 'left'
        }}>
          <div className="d-flex justify-between mb-2">
            <span style={{ color: 'var(--color-gray)' }}>Receipt No.</span>
            <span style={{ fontWeight: 600 }}>TXN-987654321</span>
          </div>
          <div className="d-flex justify-between mb-2">
            <span style={{ color: 'var(--color-gray)' }}>Property ID</span>
            <span style={{ fontWeight: 600 }}>GHA-1234-5678</span>
          </div>
          <div className="d-flex justify-between mb-2">
            <span style={{ color: 'var(--color-gray)' }}>Date & Time</span>
            <span style={{ fontWeight: 600 }}>{new Date().toLocaleDateString()}</span>
          </div>
          <hr style={{ border: 'none', borderTop: '1px dashed var(--color-gray)', margin: '1rem 0' }} />
          <div className="d-flex justify-between">
            <span style={{ color: 'var(--color-dark-gray)', fontWeight: 600 }}>Amount Paid</span>
            <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>GH₵ 1,250.00</span>
          </div>
        </div>

        {/* Mock QR Code */}
        <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: 'white',
          border: '1px solid var(--color-light-gray)',
          margin: '0 auto 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-gray)' }}>QR CODE</span>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-outline" style={{ flex: 1 }}>
            <Download size={20} /> Download
          </button>
          <button className="btn btn-outline" style={{ flex: 1 }}>
            <Share2 size={20} /> Share
          </button>
        </div>

        <button className="btn btn-primary w-full mt-4" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
