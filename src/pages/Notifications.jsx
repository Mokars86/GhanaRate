import React from 'react';

export default function Notifications() {
  return (
    <div className="flex-column gap-2">
      <h2 style={{ marginBottom: '1rem' }}>Notifications</h2>
      
      <div className="card d-flex gap-4 align-center" style={{ padding: '1rem', borderLeft: '4px solid var(--color-accent)' }}>
        <div>
          <div className="d-flex justify-between align-center mb-1">
            <h4 style={{ margin: 0, color: 'var(--color-accent)' }}>Payment Overdue Alert</h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-gray)' }}>2 hrs ago</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>Your property tax for House 1 (GHA-1234-5678) is past due. Late penalties may apply. Please settle your bill immediately.</p>
        </div>
      </div>

      <div className="card d-flex gap-4 align-center" style={{ padding: '1rem', borderLeft: '4px solid var(--color-primary)' }}>
        <div>
          <div className="d-flex justify-between align-center mb-1">
            <h4 style={{ margin: 0, color: 'var(--color-primary)' }}>Payment Received</h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-gray)' }}>Jan 15</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>We successfully received your payment of GH₵ 1,000.00 for House 2.</p>
        </div>
      </div>

      <div className="card d-flex gap-4 align-center" style={{ padding: '1rem', borderLeft: '4px solid var(--color-secondary)' }}>
        <div>
          <div className="d-flex justify-between align-center mb-1">
            <h4 style={{ margin: 0, color: 'var(--color-secondary-dark)' }}>New Tax Rate Assessment</h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-gray)' }}>Jan 01</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>Your property value has been reassessed for the 2026 fiscal year. Tap to view your new annual tax amount.</p>
        </div>
      </div>
    </div>
  );
}
