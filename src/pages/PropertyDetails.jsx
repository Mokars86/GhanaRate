import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Home, MapPin, ReceiptText } from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex-column gap-4">
      <div className="card d-flex gap-4 align-center mb-4">
        <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1rem', borderRadius: '12px' }}>
          <Home size={32} color="var(--color-primary)" />
        </div>
        <div>
          <h2>House {id}</h2>
          <p style={{ margin: 0 }}>GHA-1234-5678</p>
        </div>
      </div>

      <div className="card">
        <h3>Property Info</h3>
        <div className="flex-column gap-2 mt-4" style={{ color: 'var(--color-dark-gray)' }}>
          <div className="d-flex align-center gap-2">
            <MapPin size={20} color="var(--color-gray)" />
            <span>East Legon, Plot 45, Accra Axis</span>
          </div>
          <div className="d-flex align-center gap-2">
            <Home size={20} color="var(--color-gray)" />
            <span>Residential - 4 Floors</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Tax Assessment</h3>
        <div className="d-flex justify-between mt-4 mb-2">
          <span style={{ color: 'var(--color-gray)' }}>Rateable Value</span>
          <span style={{ fontWeight: 600 }}>GH₵ 150,000.00</span>
        </div>
        <div className="d-flex justify-between mb-4">
          <span style={{ color: 'var(--color-gray)' }}>Annual Tax Amount</span>
          <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>GH₵ 1,250.00</span>
        </div>
        
        <button className="btn btn-secondary w-full" onClick={() => navigate(`/pay/${id}`)}>
          Pay Now
        </button>
      </div>

      <h3 className="mt-4">Payment History</h3>
      <div className="card d-flex justify-between align-center">
         <div className="d-flex align-center gap-2">
           <ReceiptText size={20} color="var(--color-primary)" />
           <div>
             <p style={{ margin: 0, fontWeight: 600 }}>GH₵ 1,000.00</p>
             <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-gray)' }}>Jan 15, 2025</p>
           </div>
         </div>
         <span className="badge badge-success">Paid</span>
      </div>
    </div>
  );
}
