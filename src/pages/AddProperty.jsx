import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProperty() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/map-capture');
  };

  return (
    <div className="card">
      <h2 style={{ marginBottom: '1rem' }}>Register Property</h2>
      <p>Enter details for the new property.</p>
      
      <form onSubmit={handleSubmit} className="flex-column gap-4">
        <div className="input-group">
          <label className="input-label">Property Type</label>
          <select className="input-field w-full">
            <option>Residential</option>
            <option>Commercial</option>
            <option>Mixed-use</option>
          </select>
        </div>
        
        <div className="input-group">
          <label className="input-label">Building Size (approx sq ft)</label>
          <input type="number" className="input-field w-full" placeholder="e.g. 1500" />
        </div>

        <div className="input-group">
          <label className="input-label">Number of Floors</label>
          <input type="number" className="input-field w-full" defaultValue="1" min="1" />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Next: Capture Location
        </button>
      </form>
    </div>
  );
}
